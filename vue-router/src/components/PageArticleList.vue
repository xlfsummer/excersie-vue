<template>
    <section>
        <ul>
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

export default {
    data(){
        return {
            articleList: [],
        }
    },
    async created(){
        let res = await axios.get("/src/data/article.json")
        this.articleList = res.data;
    }
}
</script>

<style>

</style>
