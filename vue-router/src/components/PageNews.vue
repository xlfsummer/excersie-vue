<template>
    <section>
        <h2>News</h2>
        <router-link to="/news">news home</router-link>
        <router-link to="/news/edit">news edit</router-link>
        <router-link to="/news/view">news view</router-link>
        <hr/>

        <!-- 嵌套路由的渲染出口 -->
        <transition name="news-view" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
export default {
    beforeRouteUpdate(to, from, next){
        console.log("before route update - componnet - "/*  + this.name */);
        next();
    },
}
</script>

<style scoped>
section{
    overflow: hidden;
}

.news-view-enter{
    transform: translateX(200px);
    opacity: 0;
}
.news-view-leave-active,
.news-view-enter-active{
    transition: .4s;
}
.news-view-leave-to{
    transform: translateX(-200px);
    opacity: 0;
}
</style>
