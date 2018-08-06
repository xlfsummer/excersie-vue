export default {
    props: {
        level: {
            type: Number,
            default: 1
        }
        
    },
    render(creareElement){
        return creareElement(
            "h" + this.$props.level, // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    }
};