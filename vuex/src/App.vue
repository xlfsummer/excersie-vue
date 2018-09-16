<template>
    <div class="container">
        <div class="sidebar">
            <nav-sidebar></nav-sidebar>
        </div>
        <div class="main">
            <keep-alive>
                <router-view name="main"></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import NavSidebar from "./component/NavSidebar.vue";

export default {
    components: {
        NavSidebar
    }
}
</script>

<style scoped>
    .container{
        display: grid;
        grid-template:
          "sidebar     main"   1fr
          /auto      1fr;
        align-content: stretch;
        padding: 10px;
        box-sizing: border-box;
        min-height: 100vh;
    }
    .sidebar{
        grid-template-areas: "sidebar";
        border-right: 1px solid #eee;
        align-items: stretch;
        width: 300px;
        resize: horizontal;
        overflow: hidden auto;
    }
    .main{
        grid-template-areas: "main";
    }
</style>
