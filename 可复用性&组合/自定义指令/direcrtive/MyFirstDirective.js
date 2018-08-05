/**
 * @typedef {object} binding
 * @prop {string} name 指令名，不包括 v- 前缀。
 * @prop {any} value 指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
 * @prop {any} oldValue 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
 * @prop {string} expression 字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"
 * @prop {any} arg 传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
 * @prop {Object<string, any>} modifiers 一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
 */

 /**
  * @typedef {(el: HTMLElement, binding: binding, VNode: VNode, oldVNode: VNode)=>any} VueDirectiveLifecycleHook
  */

export default {

    /** 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置 */
    bind(){
        console.log("directive bind")
    },

    /** 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。 */
    inserted(){
        console.log("directive inserted")
    },

    /** 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。 */
    update(el, binding, VNode, oldVNode){
        console.log("directive update")
    },

    
    /** 指令所在组件的 VNode 及其子 VNode 全部更新后调用。*/
    componentUpdated(el, binding, VNode, oldVNode){
        console.log("directive componentUpdated")
        console.log(binding.oldValue + " -> " + binding.value);
    },

    /** 只调用一次，指令与元素解绑时调用。 */
    unbind(){
        console.log("directive unbind")
    }
}