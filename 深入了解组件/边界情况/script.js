new Vue({
    el: ".app",
    data: {
        contentSwitch: "1",
        isAsyncComponentActive: false
    },
    components: {

    },
    methods: {
        log() { console.log.apply(this, arguments); }
    }
})