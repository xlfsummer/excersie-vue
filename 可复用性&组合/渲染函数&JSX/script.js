import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
// import Vue from "vue" ;
import FoldBlock from "./component/FoldBlock.js";
import HeaderTag from "./component/HeaderTag.js";
import ListTag from "./component/ListTag.js";

new Vue({
    el: ".app",
    components: {
        FoldBlock,
        HeaderTag,
        ListTag
    },
    data: {

    },
    computed: {
        
    },
    watch: {
      
    }
})