function getValidator(handlerName, modifiers){
    let handler = handlers[handlerName];
    if(!handler) throw new Error("invalid arg: " + handler);
    return handler(modifiers);
}

let handlers = {
    minlength(modifiers){
        let lenStat = modifiers.byte
            ? byteLenStatistics
            : lenStatistics;
        return function (value, limit){
            let len = lenStat(value);
            return len >= limit;
        }   
    },
    maxlength(modifiers){
        let lenStat = modifiers.byte
            ? byteLenStatistics
            : lenStatistics;
        return function (value, limit){
            let len = lenStat(value);
            return len <= limit;
        }
    }
}

let lenStatistics = function(text){
    return text.length;
};
let byteLenStatistics = function(text){
    let length = 0;
    for(let char of text){
        length += char.charCodeAt(0) < 128
            ? 1 : 2;
    }
    return length;
};

let createListener = function(el, binding){
    let input = el;
    let modifiers = binding.modifiers;
    let arg = binding.arg;
    let validator = getValidator(arg, modifiers);
    return function listener(ev){
        let dataset = ev.currentTarget.dataset;
        let isValid = validator(input.value, binding.value);
        if(isValid){
           dataset.isValid = "";
            delete dataset.isError;
        }else{
            dataset.isError = "";
            delete dataset.isValid;
        }
        return false;
    };
};



export default  {

    inserted(el, binding){

        if(!(el instanceof HTMLInputElement))
            throw new Error("v-limit only works on input tag");

        let listenerName = "_vLimitListener:" + binding.arg;
        let listener = createListener(el, binding);
        el._vLimitListenerOldValue = el.value;

        if(el[listenerName]){
            el.removeEventListener("input", el[listenerName], false);
        }

        el[listenerName] = listener;

        el.addEventListener("input", el[listenerName]);
    }
};