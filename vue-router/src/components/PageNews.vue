<template>
    <section>
        <h2>News</h2>
        <router-link to="/news">news home</router-link>
        <router-link to="/news/edit">news edit</router-link>
        <router-link to="/news/view">news view(named view)</router-link>
        <hr/>

        <!-- 嵌套路由的渲染出口 -->
        <router-view></router-view>
    </section>
</template>

<script>
export default {
}
</script>

<style>

</style>
