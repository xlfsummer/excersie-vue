<template>
    <article v-if="load">
        <h1>{{article.title}}</h1>
        <time>{{article.time}}</time><span>{{article.author}}</span>
        <hr/>
        <div>
            <p>{{article.content}}</p>
        </div>
    </article>
</template>

<script>
import Axios from 'axios';

export default {
    data(){
        return {
            articleId: this.$route.params.id,
            article: null,
            load: false
        };
    },
    async created(){
        // debugger;
        /** @type {Article[]} */
        let articleList = (await Axios.get("/src/data/article.json")).data;
        let article = articleList.find(art => art.id == Number(this.articleId));
        this.article = article;
        await this.$nextTick();
        this.load = true;
    }
}
</script>

<style scoped>
</style>
