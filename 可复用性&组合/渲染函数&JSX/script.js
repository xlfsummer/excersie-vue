import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
// import Vue from "vue" ;
import FoldBlock from "./component/FoldBlock.js";
import HeaderTag from "./component/HeaderTag.js";
import ListTag from "./component/ListTag.js";
import ListWithHeader from "./component/ListWithHeader.js";
import RenderTest from "./component/RenderTest.js";


new Vue({
    el: ".app",
    components: {
        FoldBlock,
        HeaderTag,
        ListTag,
        ListWithHeader,
        RenderTest
    },
    data: {

    },
    computed: {
        
    },
    watch: {
      
    }
});
