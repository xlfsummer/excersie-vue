import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
// import Vue from "vue" ;
import FoldBlock from "./component/FoldBlock.js";

import MyFirstDirective from "./direcrtive/myFirstDirective.js";
import Limit from "./direcrtive/Limit.js";


new Vue({
    el: ".app",
    components: {
        FoldBlock,
    },
    directives: {
        MyFirstDirective,
        Limit
    },
    data: {
        inputValue: "输入内容"
    },
    computed: {
        
    },
    watch: {
      
    }
})