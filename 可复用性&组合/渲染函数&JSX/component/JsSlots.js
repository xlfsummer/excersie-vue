export default {
    data(){
        return {
            list: [
                {name: "red",    value: "#b00"},
                {name: "yellow", value: "#bb0"},
                {name: "green",  value: "#0b0"},
                {name: "cyan",   value: "#0bb"},
                {name: "blue",   value: "#00b"},
                {name: "purple", value: "#b0b"}
            ]
        };
    },
    render(createElement){
        return createElement(
            "div",
            {},
            [
                createElement(
                    {
                        name: "JsSlotsChild",
                        props: {
                            list: Array
                        },
                        render(createElement){
                            return createElement(
                                "div",
                                {},
                                [
                                    createElement(
                                        "h4",
                                        {},
                                        [
                                            this.$slots.header
                                        ]
                                    ),
                                    createElement(
                                        "ul",
                                        {},
                                        this.$props.list.map(v => {
                                            return createElement(
                                                "li",
                                                {},
                                                [
                                                    this.$scopedSlots.default(v)
                                                ]
                                            );
                                        })
                                    ),
                                    createElement(
                                        "div",
                                        {},
                                        [
                                            this.$scopedSlots.footer("---")
                                        ]
                                    )
                                ]
                            );
                        }
                    },
                    {
                        props: {
                            list: this.$data.list
                        },
                        // 子->父
                        scopedSlots: {
                            // scoped-slot="props"
                            default(props){
                                return createElement(
                                    "span",
                                    {
                                        style: {
                                            display: "block",
                                            borderRadius: "3px",
                                            margin: "5px",
                                            padding: "1px 5px",
                                            color: "white",
                                            background: props.value, 
                                        },
                                    },
                                    [
                                        props.name
                                    ]
                                );
                            },
                            // scoped-slot="text" slot="footer"
                            footer(text){
                                return text;
                            }
                            
                        }
                    },
                    [ 
                        // 父->子
                        // slot="header"
                        createElement(
                            "template",
                            {
                                slot: "header"
                            },
                            "colors"
                        )
                    ]
                )
            ]
        );
    }
};
