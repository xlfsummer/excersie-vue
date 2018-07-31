import AccessParent from "./component/AccessParent.js";
import TabPresentor from "./component/TabPresentor.js";
import TabPresentorPage from "./component/TabPresentorPage.js";
import MenuList from "./component/MenuList.js";

new Vue({
    el: ".app",
    data: {
        someData: "data in parent/root component",
        child1Data: "",
        eventLoopLog: [],
        menuData: [],
        toggle: false
    },
    components: {
        AccessParent,
        TabPresentor,
        TabPresentorPage,
        MenuList,
        "inline-template": { props: ["list"] },
        "x-template": {
            props: ["list"],

            //不限定 [type="text/x-template"] 也不限定 <script>, 但不能用 .类名 指定模板
            template: "#xTemplate"
        },
        "staticComponent": {
            props: ["toggle"],
            methods: {
                update() {
                    this.$forceUpdate();
                }
            }
        }
    },
    methods: {
        log() { console.log.apply(this, arguments); },

        /** @param {string} event */
        logEventLoop(event) {
            this.$on("hook:" + event, () => {
                this.$data.eventLoopLog.push(+new Date() + " " + event);
            });
        }
    },
    computed: {
        //用 computed 不能正常读取数据， 使用 $parent $children 是非响应式的
        // child1Data() {
        //     return this.$children[0] && this.$children[0].someData
        // }
    },
    async mounted() {
        this.child1Data = this.$children[0] && this.$children[0].someData;
        this.$data.menuData = await (await fetch("./data/menuList.json")).json();
    },
    created() {
        this.logEventLoop("beforeMount");
        this.logEventLoop("mounted");
    }
});