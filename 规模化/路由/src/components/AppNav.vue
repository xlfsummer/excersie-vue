<template>
    <ul class="nav-list">
        <li><app-link url="/">主页</app-link></li>
        <li><app-link url="/about">关于</app-link></li>
    </ul>
</template>

<script>
import routeMap from "../routeMap.js";
import AppLink from "../components/AppLink.vue";

export default {
    components: {
        AppLink
    }
}
</script>

<style scoped>
.nav-list{
    border-bottom: 1px solid #eee;
}
.nav-list li{
    display: inline-block;
}
</style>
