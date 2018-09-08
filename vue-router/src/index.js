import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route.js";
import App from "./App.vue";
import "./style.css";
// import routerEventMixin from "./mixin/routerEventMixin.js";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition){
        if(to.hash){
            return {
                selector: to.hash,
                // x: 0,
                // y: 0,
            };
        }
        if(savedPosition)
            return savedPosition;
    }
});

router.beforeEach(function(to, from, next){
    if(to.matched.some(r=>r.meta.hasEnterLog)){
        console.log("enter ! (use route metadata as condition)");
    }
    console.log(`route change from ${from.fullPath} to ${to.fullPath} - before each`);
    next();
});
router.afterEach(function(to, from){
    console.log(`route change from ${from.fullPath} to ${to.fullPath} - after each`);
});

// Vue.mixin(routerEventMixin);

new Vue({
    el: "#app",
    // histroy 模式需服务端配合
    router,
    render: h => h(App)
});
