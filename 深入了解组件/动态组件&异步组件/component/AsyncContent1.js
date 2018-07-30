export default {
    data() {
        return {
            content: "loading 1...",
        };
    },
    template: `<div>{{content}}</div>`,
    mounted() {
        setTimeout(() => {
            this.content = "lorem plusum 1"
        }, 1000);
    }
}