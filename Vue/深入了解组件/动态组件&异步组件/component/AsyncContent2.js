export default {
    data() {
        return {
            content: "loading 2...",
        };
    },
    template: `<div>{{content}}</div>`,
    mounted() {
        setTimeout(() => {
            this.content = "lorem plusum 2"
        }, 1000);
    }
}