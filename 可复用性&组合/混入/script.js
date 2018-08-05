import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
// import Vue from "vue" ;
import FoldBlock from "./component/FoldBlock.js";
import SimplePresenter from "./component/SimplePresenter.js";
import CustomOptionMergeStrategies from "./mixin/CustomOptionMergeStrategies.js";

import CreateLogMixin from "./mixin/CreatedLog.js";
import DataMixin from "./mixin/DataMixin.js";

import {isFunction} from "./utils/type.js";

//全局混入
//影响之后创建的所有 Vue 实例
Vue.mixin(CreateLogMixin);

//使用混入
// FoldBlock.mixins = [CreateLogMixin];
// SimplePresenter.mixins = [CreateLogMixin];

//自定义选项合并策略
//为 data 中的 list 属性增加策略, concat 数组
let mergeDataStrategies = Vue.config.optionMergeStrategies.data;
Vue.config.optionMergeStrategies.data = function(toValue, fromValue){
    let result = mergeDataStrategies.call(this, ...arguments);

    let toList = toValue && toValue.list|| isFunction(toValue) && (toValue() || {}).list;
    let fromList = fromValue && fromValue.list || isFunction(fromValue) && (fromValue() || {}).list;

    if(toList && fromList && toList instanceof Array && fromList instanceof Array){
        let originResult = result;
        result = function(){
            let data = originResult();
            data.list = fromList.concat(toList);
            return data;
        }
    }

    return result;
};

new Vue({
    el: ".app",
    components: {
        FoldBlock,
        SimplePresenter
    },
    data: {
        message: "message defined in root option",
        list: ["data", "defined", "in", "option", "|"]
    },
    mixins: [DataMixin, CustomOptionMergeStrategies],
    computed: {
        listText(){
            return this.$data.list.join(" ");
        }
    },
    watch: {
      
    }
})