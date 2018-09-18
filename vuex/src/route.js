// import PageWelcome from "./component/PageWelcome.vue";


/** @type {import("vue-router").RouteConfig[]} */
let routes = [
    {
        path: "/:componentParam",
        props: true
    },
    // {
    //     path: "/:component",
    //     // component: function(){ return import(`./component/demo/${""}`},
    //     beforeEnter:  function(to, from, next){
    //         to.matched[0].components.default = function(){
    //             let kebab = to.params.component;
    //             let camel = kebab.replace(/(^|-)[a-z]/g, function(str){
    //                 return str.substr(-1,1).toUpperCase();
    //             });
    //             return import(`./component/demo/${camel}.vue`);
    //         };
    //         next();
    //     }
    // }
];

export default routes;
