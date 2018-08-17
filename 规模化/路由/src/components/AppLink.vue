<template>
    <a @click="go"
    :class="active ? 'active' : ''"><slot/></a>
</template>

<script>
export default {
    name: "app-link",
    inject: ["route"],
    props: {
        url: String,
    },
    computed: {
        active() {
            return this.route.pathname == this.url;
        }
    },
    methods: {
        go($event) {
            $event.preventDefault();
            window.history.pushState(this.url, this.$slots.default, this.url);
            this.route.assign(window.location);
        }
    }
};
</script>

<style scoped>
    a{
        display: inline-block;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;

        cursor: pointer;
    }

    a.active,
    a:hover{
        color: #fff;
        background: #eeaa33;
    }
</style>