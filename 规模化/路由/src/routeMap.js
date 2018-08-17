import Index from "./pages/PageIndex.vue";
import About from "./pages/PageAbout.vue";
import Page404 from "./pages/Page404.vue";


export const map = [
    {
        name: "首页",
        path: "/",
        component: Index
    },
    {
        name: "关于我们",
        path: "/about",
        component: About
    }
];

export default function router(route) {
    let activeRoute = map.find(routeConfig => {
        return routeConfig.path == route.pathname;
    });

    activeRoute = activeRoute || { component: Page404 };

    return activeRoute.component;
}