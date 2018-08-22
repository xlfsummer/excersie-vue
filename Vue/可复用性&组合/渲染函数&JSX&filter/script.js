import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
// import Vue from "vue" ;
import FoldBlock from "./component/FoldBlock.js";
import HeaderTag from "./component/HeaderTag.js";
import ListTag from "./component/ListTag.js";
import ListWithHeader from "./component/ListWithHeader.js";
import RenderTest from "./component/RenderTest.js";
import JsControledTemplate from "./component/JsControledTemplate.js";
import JsScopeSlotsParent from "./component/JsScopeSlotsParent.js";
import JsSlots from "./component/JsSlots.js";
import JsxSyntax from "./component/JsxSyntax.js";
import FunctionalComponent from "./component/FunctionalComponent.js";



new Vue({
    el: ".app",
    components: {
        FoldBlock,
        HeaderTag,
        ListTag,
        ListWithHeader,
        RenderTest,
        JsControledTemplate,
        JsScopeSlotsParent,
        JsSlots,
        JsxSyntax,
        FunctionalComponent
    },
    data: {
        surfaceList: [],
        roundDigit: 0
    },
    computed: {
        
    },
    filters: {
        int(number){
            return (number + "").replace(/\.[\s\S]*$/, "").replace(/^$/, "0");
        },
        round(number, digit){
            return digit > 0
                ? Math.round(number / 10 ** digit) * 10 ** digit + ""
                : number.toFixed(-digit);
        }
    },
    watch: {
      
    },
    methods: {
        deleteRow(){
            this.$data.surfaceList.shift();
        }
    },
    async created(){
        this.$data.surfaceList = await (await fetch("./data/surface.json")).json();
    }
});
