<template>
    <main>
        <ul>
            <li><app-link url="/">主页</app-link></li>
            <li><app-link url="/about">关于</app-link></li>
        </ul>
    </main>
</template>

<script>
import AppLink from "./AppLink.vue";

export default {
    data(){
        return {

        }
    },
    components: {
        AppLink
    },
    mounted(){
        window.addEventListener("popstate", function(ev){
            let state = ev.state;
            console.log(state);
        },false)
    }
};
</script>
