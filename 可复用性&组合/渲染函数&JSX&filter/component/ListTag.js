export default {
    props: {
        ordered: {
            type: Boolean,
            default: false
        }
    },
    render(createElement){
        let tag = this.$props.ordered
            ? "ol" : "ul";
        return createElement(
            tag,
            this.$slots.default
        );
    }
};
