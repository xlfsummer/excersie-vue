import HeaderTag from "./HeaderTag.js";
import ListTag from "./ListTag.js";

export default {
    props: {
        level: {
            type: Number,
            default: 0
        },
        header:{
            type: String,
            default: ""
        },
        ordered: {
            type: Boolean,
            default: false
        }
    }, 
    render(createElement){
        return createElement("div", {}, [
            createElement(
                HeaderTag, 
                {
                    props: {
                        level: this.$props.level
                    }
                },
                [this.$props.header]
            ),
            createElement(
                ListTag,
                {
                    props: {
                        ordered: this.$props.ordered
                    }
                }, 
                [this.$slots.default]
            )
        ]);
    }
};
