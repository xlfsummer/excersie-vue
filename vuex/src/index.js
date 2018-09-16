import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";

import routes from "./route.js";
import store from "./store/index.js";

import "./main.css";

let router = new VueRouter({
    mode: "history",
    routes
});

Vue.use(VueRouter);

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
