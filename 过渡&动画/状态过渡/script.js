import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import FoldBlock from "./component/FoldBlock.js";
import AnimateInteger from "./component/AnimateInteger.js";
// import { Elastic } from "gsap";
// import { TweenMax } from "gsap";

new Vue({
    el: ".app",
    components: {
        FoldBlock,
        AnimateInteger
    },
    data: {
        num: 0,
        tweenNum: 0,

        inputRangeValue: 50,
        tweenInputRangeValue: 50,

        operand1: 3,
        operand2: 4,
    },
    computed: {
        tweenNumInt() {
            return Math.floor(this.$data.tweenNum);
        }
    },
    watch: {
        num(newValue) {
            new TweenMax(this.$data, 1, {
                tweenNum: newValue,
            });
        },
        inputRangeValue(newValue) {
            new TweenMax(this.$data, 1, {
                tweenInputRangeValue: newValue,
                ease: Elastic.easeOut
            });
        }
    }
})