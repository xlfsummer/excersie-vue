import FoldBlock from "./component/FoldBlock.js";
import TransitionRunner from "./component/TransitionRunner.js";

new Vue({
    el: ".app",
    data: {
        mutiElTrans: "save",
        mutiCompTrans: "fold-block",
        listTrans: {
            list: [1, 2, 3, 4, 5, 6],
            next: 7
        }
    },
    components: {
        FoldBlock,
        TransitionRunner
    },
    computed: {

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
        radomListIndex() {
            return Math.floor(Math.random() * this.listTrans.list.length);
        },
        listAdd() {
            this.listTrans.list.splice(this.radomListIndex(), 0, this.listTrans.next++);
        },
        listRemove() {
            this.listTrans.list.splice(this.radomListIndex(), 1);
        }
    },
});