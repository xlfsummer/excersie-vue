<template>
    <div class="container">
        <div class="sidebar">
            <nav-sidebar></nav-sidebar>
        </div>
        <div class="main">
            <keep-alive>
                <transition>
                    <component :is="component"></component>
                </transition>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import NavSidebar from "./component/NavSidebar.vue";
import common from "./util/common.js";
import PageWelcome from "./component/PageWelcome.vue";

export default {
    prop: {
        componentParam: {
            type: String,
        }
    },
    components: {
        NavSidebar,
        PageWelcome
    },
    computed: {
        component(){
            let kebab = this.$route.params.componentParam;
            if(kebab){
                let camel = common.kebab2camel(kebab);
                return () => import(`./component/demo/${camel}.vue`);
            }else{
                return PageWelcome;
            }
        }
    }
}

</script>

<style scoped>
    .container{
        display: grid;
        grid-template:
          "sidebar     main"   1fr
          /auto      1fr;
        align-content: stretch;
        padding: 10px;
        box-sizing: border-box;
        min-height: 100vh;
    }
    .sidebar{
        grid-template-areas: "sidebar";
        border-right: 1px solid #eee;
        align-items: stretch;
        width: 300px;
        resize: horizontal;
        overflow: hidden auto;
    }
    .main{
        grid-template-areas: "main";
        padding: 10px;
        overflow-x: hidden;
        justify-items: strech;
        /* max-width: 800px; */
        /* margin: 0 auto; */

        perspective: 2000px;
    }

    .v-enter{
        transform: rotateX(-180deg);
        background: #ccc;
    }
    .v-leave-to{
        transform: rotateX(180deg);
        background: #ccc;
    }

    .v-enter-to,
    .v-leave{
        transform: rotateX(0);
    }

    .v-enter-active,
    .v-leave-active{
        backface-visibility: hidden;
        transition: .5s;
        position: absolute;
        left: 10px;
        right: 10px;
        box-sizing: border-box;
    }
</style>
