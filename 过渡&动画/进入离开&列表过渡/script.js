import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import FoldBlock from "./component/FoldBlock.js";
import TransitionRunner from "./component/TransitionRunner.js";

new Vue({
    el: ".app",
    data: {
        mutiElTrans: "save",
        mutiCompTrans: "fold-block",
        listTrans: {
            list: new Array(50).fill(0).map((v,i)=>i),
            next: 51
        },
        wordList: {
            data: _.shuffle([
                "abandon", "append", "aqua", "accomplished", "a.m.", "band", "boom", "boat", "cast", "clock",
                "cycle", "dim", "def", "delta", "dot", "doom", "door", "different", "egg", "east", "fast"
            ]),
            keyword: ""
        },
        dynamicTransition: {
            enter: 500,
            leave: 500
        }
    },
    components: {
        FoldBlock,
        TransitionRunner
    },
    computed: {
        wordListSearch() {
            return this.wordList.data.filter(word => word.startsWith(this.wordList.keyword)).slice(0, 10);
        }
    },
    methods: {
        log() { console.log.call(this, Date.now(), ...arguments); },
        velocityEnter(el, done) {
            el.velocity({
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)"
            }, {
                easing: "ease",
                complete: done,
            });
        },
        velocityLeave(el, done) {
            el.style.transform = "translate(0)";
            el.velocity({
                opacity: 0,
                transform: "matrix(1, 1, 1, 1, 1, 1)"
            }, {
                easing: "ease",
                complete: done
            });
        },
        randomListIndex() {
            return Math.floor(Math.random() * this.listTrans.list.length);
        },
        listAdd() {
            this.listTrans.list.splice(this.randomListIndex(), 0, this.listTrans.next++);
        },
        listRemove() {
            this.listTrans.list.splice(this.randomListIndex(), 1);
        },
        listShuffle() {
            this.listTrans.list = _.shuffle(this.listTrans.list);
        }
    },
    mounted() {

    }
});