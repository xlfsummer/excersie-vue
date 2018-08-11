export default {
    prop: {
        tag: String
    },
    render(h) {
        return h(
            "div",
            {
                attrs: { title: this.tag }
            },
            ["Introducuing JSX"]
        );
    }
};
