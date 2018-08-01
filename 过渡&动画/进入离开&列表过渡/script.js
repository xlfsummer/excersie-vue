import FoldBlock from "./component/FoldBlock.js";
import TransitionRunner from "./component/TransitionRunner.js";

new Vue({
    el: ".app",
    data: {
        singleElmentShow: true
    },
    components: {
        FoldBlock,
        TransitionRunner
    },
    computed: {

    },
    methods: {
        log() { console.log.call(this, Date.now(), ...arguments); },
    },
});