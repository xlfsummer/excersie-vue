import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";
import routes from "./route.js";

import "./main.css";

let router = new VueRouter({
    mode: "history",
    routes
});

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
});
