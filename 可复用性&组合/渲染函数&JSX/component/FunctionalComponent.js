import HeaderTag from "./HeaderTag.js";

export default {
    functional: true,
    props: {
        data: Array,
    },

    /**
     * context: 
     * props：提供所有 prop 的对象
     * children: VNode 子节点的数组
     * slots: 返回所有插槽的对象的函数
     * data：传递给组件的数据对象，作为 createElement 的第二个参数传入组件 
     * parent：对父组件的引用
     * listeners: (2.3.0+) 一个包含了所有在父组件上注册的事件侦听器的对象。这只是一个指向 data.on 的别名。
     * injections: (2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的属性。
     */
    render(createElement, context) {
        // 函数式组件没有 this
        // 节约渲染开销

        if(context.data.attrs.level){
            return createElement(HeaderTag, context.data, context.children);
        }

        if(!context.props.data.length){
            return createElement("table");
        }

        return createElement(
            "table",
            {
                attrs: {
                    border: 1
                },
                style: {
                    borderCollapse: "collapse"
                }
            },
            [
                createElement(
                    "tr",
                    Object.keys(context.props.data[0]).map(k => createElement(
                        "th",
                        k
                    ))
                ),
                ...context.props.data.map(r => createElement(
                    "tr",
                    Object.keys(r).map(k => createElement(
                        "td",
                        r[k]
                    ))
                ))
            ]
        );
    }
};
