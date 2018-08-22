import Vue from "vue";
import App from "./App.vue";
import "./style.css";


new Vue({
    el: "#app",
    /* 不要使用 template 选项, 默认的引入的 vue 不包含编译器 */
    render: h=>h(App)
});