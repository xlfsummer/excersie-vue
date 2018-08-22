<template>
    <keep-alive>
        <component :is="page"></component>
    </keep-alive>
</template>

<script>
import AppLink from "./components/AppLink.vue";
import routeMap from "./routeMap.js";
import Route from "./lib/Route.js";

import PageIndex from "./pages/PageIndex.vue";
import PageAbout from "./pages/PageAbout.vue";

export default {
    data(){
        return {
            route: new Route(),
        };
    },
    provide(){
        return {
            route: this.route,
        };
    },
    computed: {
        page(){
            let page = routeMap(this.route);
            return page;
        },
    },
    components: {
        AppLink,
        PageIndex,
        PageAbout
    },
    created(){
        this.route.assign(window.location);
    },
    mounted(){
        window.addEventListener("popstate", (ev) => {
           this.route.assign(window.location);
        },false)
    }
};
</script>
