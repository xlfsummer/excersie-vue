import HeaderTag from "../component/HeaderTag.js";

export default {
    props: {
        myTag: String
    },
    data() {
        return {
            isFocus: false
        };
    },
    methods: {
        handleClick() {
            this.$data.isFocus = !this.$data.isFocus;
        }
    },
    render(h) {
        return h(
            "div",
            {
                style: {
                    outline: this.$data.isFocus ? "1px red solid" : ""
                },
                attrs: { title: this.myTag,
                    "data-title": this.myTag
                },
                domProps: {
                    "_custom_dom_attrs": "Hello world"
                },
                on: {
                    "click": this.handleClick
                }
            },
            [h(
                HeaderTag,
                {
                    ref: "header",
                    attrs: { level: 4 }
                },
                ["Introducuing JSX"]
            ), this.$scopedSlots.scopedSlotName(this.myTag), h("br"), this.$slots.default]
        );
    },
    mounted() {
        console.group("jsx demo");
        console.log("自定义 dom 属性:", this.$el._custom_dom_attrs);
        console.log("ref", this.$refs.header.$el);
        console.groupEnd("jsx demo");
    }
};