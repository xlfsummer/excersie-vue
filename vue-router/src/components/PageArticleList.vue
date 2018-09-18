<template>
    <section>
        <div v-if="loading">
            正在加载。。
        </div>
        <ul v-else>
            <li v-for="art in articleList" :key="art.id">
                <router-link :to="'/article/' + art.id">
                    <article>
                        <h2>{{art.title}}</h2>
                        <p>时间：{{art.time}}</p>
                    </article>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import axios from "axios";
import { delay } from "../service/util.js";

export default {
    data(){
        return {
            articleList: [],
            loading: true
        }
    },
    created(){
        this.fetchData()
    },
    beforeRouteUpdate(){
        //可以传入分页参数等
        this.fetchData()
    },
    methods: {
        async fetchData(){
            this.loading = true;
            let res = await axios.get("/src/data/article.json")
            // pretend to be slow
            await delay(1000)
            this.loading = false;
            this.articleList = res.data;
        }
    }
}
</script>

<style>

</style>
