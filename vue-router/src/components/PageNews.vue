<template>
    <section>
        <h2>News</h2>
        <router-link to="/news">news home</router-link>
        <router-link to="/news/edit">news edit</router-link>
        <router-link to="/news/view">news view</router-link>
        <hr/>

        <!-- 嵌套路由的渲染出口 -->
        <router-view></router-view>
    </section>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next){
        console.log(`route change from ${from.fullPath} to ${to.fullPath} - before enter PageNews`);
        next();
    },
    beforeRouteUpdate(to, from, next){
        console.log(`route change from ${from.fullPath} to ${to.fullPath} - before update PageNews`);
        next();
    },
    beforeRouteLeave(to, from, next){
        console.log(`route change from ${from.fullPath} to ${to.fullPath} - before leave PageNews`);
        next();
    },
}
</script>

<style>

</style>
