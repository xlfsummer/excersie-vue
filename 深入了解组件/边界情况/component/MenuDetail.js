export default {
    name: "menu-detail",
    props: {
        menu: Object
    },
    template: `
        <li>
            <div>{{menu.name}}</div>
            <menu-list :list="menu.sub"></menu-list>
        </li>
    `,
    components: {
        "menu-list": () => import("./MenuList.js")
    }
};