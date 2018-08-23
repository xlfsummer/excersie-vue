import PageAbout from "./components/PageAbout.vue";
import PageNews from "./components/PageNews.vue";
import PageArticle from "./components/PageArticle.vue";
import PageArticleList from "./components/PageArticleList.vue";

export default [
    {
        path: "/about",
        component: PageAbout
    },
    {
        path: "/news",
        component: PageNews
    },
    {
        path: "/article/:id",
        component: PageArticle
    },
    {
        path: "/article-list",
        component: PageArticleList
    }
];
