import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route.js";
import App from "./App.vue";
import "./style.css";

Vue.use(VueRouter);

new Vue({
    el: "#app",
    router: new VueRouter({
        mode: "history",
        routes
    }),
    render: h => h(App)
});
