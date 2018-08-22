import JsScopeSlotsChild from "./JsScopeSlotsChild.js";

export default {
    data(){
        return {
            list: [
                {index: 1, content: "医药"},
                {index: 2, content: "工业用品"},
                {index: 3, content: "橡胶"}
            ]
        };
    },
    components: {
        JsScopeSlotsChild
    },
    // 对应的模板
    // template: `<div>
    //     <js-scope-slots-child :list="list">
    //         <template slot-scope="scope">{{scope.item.index}} - {{scope.item.content}}</template>
    //     </js-scope-slots-child>
    // </div>`,
    render(createElement){
        return createElement(
            "div",
            [
                createElement(
                    JsScopeSlotsChild,
                    {
                        props: {
                            list: this.list,
                        },
                        scopedSlots: {
                            default(scope){
                                return `${scope.item.index} - ${scope.item.content}`;
                            }
                        }
                    }
                )
            ]
        );
    }
};
