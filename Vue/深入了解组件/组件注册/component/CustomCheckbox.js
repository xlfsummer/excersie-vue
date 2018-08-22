export default {
    model: {
        prop: "checked",
        event: "change",
    },
    props: {
        checked: Boolean,
    },
    data(){
        return {
            innerState: this.checked,
        }
    },
    template: `
        <div @click="clicked" tabindex="1">{{innerState ? "田" : "口"}}</div>
    `,
    methods: {
        clicked() {
            this.innerState = !this.innerState
            this.$emit("change", this.innerState);
        }
    }
}