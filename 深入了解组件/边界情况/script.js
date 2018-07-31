import AccessParent from "./component/AccessParent.js";
import TabPresentor from "./component/TabPresentor.js";
import TabPresentorPage from "./component/TabPresentorPage.js";

new Vue({
    el: ".app",
    data: {
        someData: "data in parent/root component",
        child1Data: ""
    },
    components: {
        AccessParent,
        TabPresentor,
        TabPresentorPage
    },
    methods: {
        log() { console.log.apply(this, arguments); }
    },
    computed: {
        //用 computed 不能正常读取数据， 使用 $parent $children 是非响应式的
        // child1Data() {
        //     return this.$children[0] && this.$children[0].someData
        // }
    },
    mounted() {
        this.child1Data = this.$children[0] && this.$children[0].someData;
    }

})