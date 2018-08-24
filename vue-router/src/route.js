import PageAbout from "./components/PageAbout.vue";
import PageNews from "./components/PageNews.vue";
import PageArticle from "./components/PageArticle.vue";
import PageArticleList from "./components/PageArticleList.vue";
import PageDefault from "./components/PageDefault.vue";
import PageNewsHome from "./components/PageNewsHome.vue";
import PageNewsEdit from "./components/PageNewsEdit.vue";
import PageNewsView from "./components/PageNewsView.vue";

export default [
    {
        path: "/",
        component: PageDefault
    },
    {
        path: "/about",
        component: PageAbout
    },
    {
        path: "/news",
        component: PageNews,

        // 定义嵌套路由
        children: [
            {
                //match /news
                path: "",
                component: PageNewsHome
            },
            {
                //match /news/edit
                path: "edit",
                component: PageNewsEdit
            },
            {
                //match /news/view
                path: "/news/view",
                component: PageNewsView
            }
        ]
    },
    {
        //高级参数匹配: id 满足规则 \d+
        path: "/article/:id(\\d+)",
        component: PageArticle
    },
    {
        path: "/article",
        component: PageArticleList
    }
];
