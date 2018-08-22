export default {
    name: "menu-list", //for self ref
    props: {
        "list": Array
    },
    template: `
        <ul><li is="menu-detail" v-for="menu in list" :menu="menu"></li></ul>
    `,
    components: {
        "menu-detail": () => import("./MenuDetail.js")
    }
};