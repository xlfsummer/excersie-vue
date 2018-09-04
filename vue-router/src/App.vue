<template>
    <main>
        <header>
            <h1>Vue-Router Demo</h1>
            <nav>
                <div class="links">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/news">News (Nest Route)</router-link>
                    <router-link to="/article">Article List (Param Match)</router-link>
                    <router-link to="/router-param/123/abc">Router Param</router-link>
                </div>
                <div class="navigator">
                    <input v-model="routeInput" @keypress.enter="go"/><button @click="go">Go</button>
                    <button @click="goPrev">&lt;</button>
                    <button @click="goNext">&gt;</button>
                </div>
            </nav>
            <hr/>
        </header>

        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <div class="main-view-container">
            <transition name="main-view">
                <router-view></router-view>
            </transition>
        </div>

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
            routeInput: ""
        }
    },
    methods: {
        go(){
            this.$router.push(this.$data.routeInput)
        },
        goPrev(){
            this.$router.go(-1);
        },
        goNext(){
            this.$router.go(1);
        }
    }
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
           "header"     auto
           "main"       1fr
           "footer"     auto

           /1fr;
    }
    navigator{
        }
    .links{
        display: flex;
        flex-flow: row wrap;
        margin: 0 -10px;
    }
    .links > *{
        margin: 10px;
        display: block;
    }

    .main-view-container{
        perspective: 1000px;
        overflow: hidden;
    }

    .main-view-enter{
        transform: rotateY(180deg);
    }

    .main-view-enter-active,
    .main-view-leave-active{
        transform-origin: left;
        transition: .5s;
        backface-visibility: hidden;
        position: absolute;
    }

    .main-view-leave-to{
        transform: rotateY(-180deg);
    }

</style>
