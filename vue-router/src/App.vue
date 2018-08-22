<template>
    <main>
        <header>
            <h1>Hello world</h1>
            <p>{{msg}}</p>
            <nav>
                <router-link to="/about">About</router-link>
                <router-link to="/news">News</router-link>
            </nav>
        </header>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view>

        </router-view>
        <footer>copyright</footer>
    </main>
</template>

<script>
// import VueRouter from "vue-router";
// import route from "./route.js";

export default {
    data(){
        return {
            msg: "xxx"
        }
    },
    // router: new VueRouter(route),
}
</script>

<style scoped>
    h1{
        border-bottom: 1px solid #eee;
    }
</style>
