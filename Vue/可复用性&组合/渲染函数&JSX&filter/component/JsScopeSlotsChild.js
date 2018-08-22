export default {
    props: {
        list: Array,
    },
    // 对应的模板
    // template: `
    // <div>
    //     <div v-for="item in list">
    //         <slot :item="item"/>
    //     </div>
    // </div>`
    // ,
    render(createElement){
        return createElement(
            "div",
            this.list.map(item => createElement(
                "div",
                [this.$scopedSlots.default({
                    item: item
                })]
            ))
        );
    }
};
