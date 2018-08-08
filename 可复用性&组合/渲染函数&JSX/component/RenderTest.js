export default {
    data(){
        return {
            vShowValue: true
        };
    },
    render(createElement){

        let vm = this;
        let h3 = content => createElement("h3", {}, [content]);

        return createElement(
            "div",
            {},
            [
                h3("样式"),
                createElement(
                    "div",
                    {
                        style: {
                            color: "red",
                            fontWeight: "bold"
                        }
                    },
                    ["红色粗体文字"]
                ),
                h3("类名"),
                createElement(
                    "pre",
                    {
                        "class":{
                            class1: true,
                            class2: true,
                            class3: false
                        }
                    },
                    [
                        "\"className\": {{[className: string]: Boolean}}"
                    ]
                ),
                createElement(
                    "pre",
                    {
                        "class": [
                            {
                                class1: true, 
                                class3: false
                            },
                            "class2",
                        ]
                    },
                    [
                        "\"className\": {({[className: string]: Boolean} | string)[]}"
                    ]
                ),
                createElement(
                    "pre",
                    {
                        "class": "class1 class2"
                    },
                    [
                        "\"className\": {string}"
                    ]
                ),
                h3("属性"),
                createElement(
                    "div",
                    {
                        attrs: {
                            id: "id",
                            title: "title",

                            // 生效, 如果顶层 class 属性存在, 以 class 属性的值为准
                            "class": "abc", 

                            // 生效, 如果顶层 style 属性存在, 合并两处的样式, 如果有冲突
                            // 以 style 属性中的设置为准
                            style: "text-decoration: underline"
                        }
                    },
                    [
                        "设置 id title class style 属性内容"
                    ]
                ),
                h3("on / nativeOn - 事件 (输入并打开控制台查看)"),
                createElement("div", {},
                    [
                        createElement(
                            "input",
                            {
                                attrs:{
                                    placeholder: "普通 input",
                                },
                                on: {
                                    input(){
                                        console.log(
                                            "on input \n" +
                                            "(when element is not a component, 'on' is worked on native events " +
                                            "and 'nativeOn' is not worked)"
                                        );
                                    }
                                },
                                /** 
                                 * 仅对于组件，用于监听原生事件，而不是组件内部使用
                                 * `vm.$emit` 触发的事件。
                                 */
                                nativeOn: {
                                    input(){
                                        console.log("native on input");
                                    }
                                }
                            }
                        )
                    ]
                ),
                createElement(
                    { // anonymous component
                        template: `
                            <div>
                                <input
                                    placeholder="组件input"
                                    @input="$emit('myInput', $event)"/>
                            </div>`,
                    },
                    {
                        on: {
                            //这里监听不到冒泡的原生 input 事件
                            input(){
                                console.log("on input");
                            },
                            myInput(){
                                console.log("on myInput (emit by component)");
                            }
                        },
                        nativeOn: {
                            input(){
                                console.log("native on input (propagation from input to div)");
                            }
                        }
                    }
                ),
                h3("指令"),
                createElement(
                    "input",
                    {
                        attrs: {
                            type: "checkbox",
                            checked: this.vShowValue
                        },
                        on: {
                            input: this.vShowValueUpdate
                        }
                    }
                ),
                createElement(
                    "div",
                    {
                        directives:[
                            { // 自带的指令只能使用 v-show // @todo 了解 v-model 处理流程
                                name: "show",
                                value: this.vShowValue,
                                expression: "vShowValue",
                            }
                        ]
                    },
                    "使用自定义指令形式的 v-show 控制内容显示"
                )

            ]
        );
    },
    methods: {
        vShowValueUpdate(ev){
            this.$data.vShowValue = ev.currentTarget.checked;
        }
    }
};
