<template>
    <a @click="go"
    :style="{
        textTransform: active ? 'underline' : 'normal'
    }"><slot/></a>
</template>

<script>
export default {
    name: "app-link",
    props: {
        url: String
    },
    computed: {
        active() {
            return window.location.href == this.url;
        }
    },
    methods: {
        go($event) {
            $event.preventDefault();
            window.history.pushState(this.url, this.$slots.default, this.url);
        }
    }
};
