export default {
    inject: ["addPage", "switchPage"],
    props: {
        "tab-header": String,
    },
    template: `
        <div ref="content">
            <slot>Empty</slot>
        </div>
    `,
    mounted() {
        this.addPage(this.tabHeader, this.$refs.content);
    }
};