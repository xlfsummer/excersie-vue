import HeaderTag from "../component/HeaderTag.js";

export default {
    props: {
        myTag: String
    },
    data(){
        return {
            isFocus: false,
        };
    },
    methods: {
        handleClick(){
            this.$data.isFocus = !this.$data.isFocus;
        },
    },
    render(h){
        return (
            <div
                style={{
                    outline: this.$data.isFocus ? "1px red solid" : ""
                }}
                title={this.myTag}
                data-title={this.myTag}
                domProps_custom_dom_attrs={"Hello world"}
                onClick={this.handleClick}>
                {/* level 被编译为 attr 中的属性, 但仍然作为 props 生效*/}
                <HeaderTag
                    ref="header"
                    level={4}>Introducuing JSX</HeaderTag>
                {this.$scopedSlots.scopedSlotName(this.myTag)}
                <br/>
                {this.$slots.default}
            </div>
        );
    },
    mounted(){
        console.group("jsx demo");
        console.log("自定义 dom 属性:", this.$el._custom_dom_attrs);
        console.log("ref", this.$refs.header.$el);
        console.groupEnd("jsx demo");
    }
};
