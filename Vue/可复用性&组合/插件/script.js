// import Vue from "vue";
import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import MyPlugin from "./plugins/MyPlugin.js";

Vue.use(MyPlugin, {
    msg: "Hello world"
});

new Vue({
    el: ".app",
    data: {
        createTime: 0
    },
    mounted() {
        this.createTime = this.$createTime;
    }
});