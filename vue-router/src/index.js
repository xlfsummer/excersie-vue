import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route.js";
import App from "./App.vue";
import "./style.css";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach(function(to, from, next){
    console.log(`route change from ${from.fullPath} to ${to.fullPath} - before each`);
    next();
});
router.beforeEach(function(to, from, next){
    console.log(`route change from ${from.fullPath} to ${to.fullPath} - after each`);
    next();
});


new Vue({
    el: "#app",
    // histroy 模式需服务端配合
    router,
    render: h => h(App)
});
