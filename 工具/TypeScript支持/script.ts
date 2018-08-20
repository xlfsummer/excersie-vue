import Vue from "./vue.esm.js";
import App from "./App.vue";
import "./style.css";
import a from "./a.js";

console.log(a);

new Vue({
    el: "#app",
    /* 不要使用 template 选项, 默认的引入的 vue 不包含编译器 */
    render: h=>h(App)
});
