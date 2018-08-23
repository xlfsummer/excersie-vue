<template>
    <main>
        <header>
            <h1>Hello world</h1>
            <p>{{msg}}</p>
            <nav>
                <router-link to="/about">About</router-link>
                <router-link to="/news">News</router-link>
                <router-link to="/article-list">Article List</router-link>
            </nav>
        </header>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view>
        </router-view>
        <footer>
            <hr/>
            copyright
        </footer>
    </main>
</template>

<script>
export default {
    data(){
        return {
            msg: "xxx"
        }
    },
}
</script>

<style scoped>
    h1{
        border-bottom: 1px solid #eee;
    }
    main{
        display: grid;
        align-content: stretch;
        min-height: 100%;
        grid-template: 
           "header" auto 
           "main"   1fr
           "footer" auto
           /1fr;
    }
</style>
