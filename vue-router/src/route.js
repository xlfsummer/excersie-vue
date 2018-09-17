import { RouteConfig } from "vue-router";
import PageAbout from "./components/PageAbout.vue";
import PageNews from "./components/PageNews.vue";
import PageArticle from "./components/PageArticle.vue";
import PageArticleList from "./components/PageArticleList.vue";
import PageDefault from "./components/PageDefault.vue";
// import PageScrollBehavior from "./components/PageScrollBehavior.vue";
import NewsHome from "./components/NewsHome.vue";
import NewsEdit from "./components/NewsEdit.vue";
import NewsView from "./components/NewsView.vue";
import AboutMain from "./components/AboutMain.vue";
import AboutInfo from "./components/AboutInfo.vue";
import PageNotFound from "./components/PageNotFound.vue";
import PageRouterParamPassing from "./components/PageRouterParamPassing.vue";
import RouterParamBoolean from "./components/RouterParamBoolean.vue";
import RouterParamFunction from "./components/RouterParamFunction.vue";
import RouterParamObject from "./components/RouterParamObject.vue";

/** 路由懒加载 */
let PageScrollBehaviorPromise = () => import(
    /* webpackChunkName: "scroll-behavior" */
    "./components/PageScrollBehavior.vue"
);

export default /** @type {RouteConfig[]} */([
    {
        path: "/",
        component: PageDefault,
        alias: ["/home", "/index"]
    },
    {
        path: "/about",
        component: PageAbout,
        children: [
            {
                path: "",
                components: {
                    // 命名视图
                    // key is the 'name' attr value defined on <router-view>
                    "main": AboutMain,
                    "right": AboutInfo
                }
            }
        ]
    },
    {
        path: "/news",
        component: PageNews,

        // 定义嵌套路由
        children: [
            {
                //match /news
                path: "",
                component: NewsHome,
                // route metadate 路由元信息
                meta: {
                    hasEnterLog: true
                }
            },
            {
                //match /news/edit
                path: "edit",
                component: NewsEdit
            },
            {
                //match /news/view
                path: "/news/view",
                component: NewsView
            }
        ]
    },
    {
        //高级参数匹配: id 满足规则 \d+
        path: "/article/:id(\\d+)",
        component: PageArticle
    },
    {
        /**
         * 命名路由
         * 在 vue 实例中
         * @example this.$router.push({name: "article-list", param: {
         *  //...
         * }})
         */
        name: "article-list",
        path: "/article",
        component: PageArticleList
    },
    {
        name: "router-param",
        path: "/router-param",
        component: PageRouterParamPassing,
        children: [
            {
                path: ":id/:subid",
                components: {
                    //key: name of router-view
                    "boolean": RouterParamBoolean,
                    "function": RouterParamFunction,
                    "object": RouterParamObject
                },
                props: {
                    "boolean": true,
                    "object": {
                        "msg": "defined in route.js"
                    },
                    "function": function (param) {
                        let params = Object.assign({
                            custom: "Hello World"
                        }, param.params);
                        return params;
                    }
                }
            }
        ]
    },
    {
        path: "/scroll-behavior",
        component: PageScrollBehaviorPromise
        // component: PageScrollBehavior
    },
    {
        name: "404",
        path: "/404",
        component: PageNotFound
    },
    //其它页面
    {
        path: "*",
        redirect: to => {
            return {
                path: "/404",
                query: {
                    from: to.fullPath
                }
            };
        }
    }
]);
