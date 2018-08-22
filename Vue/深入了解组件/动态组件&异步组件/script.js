import AsyncContent1 from "./component/AsyncContent1.js";
import AsyncContent2 from "./component/AsyncContent2.js";
// import AsyncComponent from "./component/AsyncComponent.js"



new Vue({
    el: ".app",
    data: {
        contentSwitch: "1",
        isAsyncComponentActive: false
    },
    components: {
        AsyncContent1,
        AsyncContent2,
        "async-component": _ => import("./component/AsyncComponent.js") //需要时才加载
    },
    methods: {
        log() { console.log.apply(this, arguments); }
    },
    computed: {
        componentName() {
            return "async-content" + this.contentSwitch;
        }
    }
})