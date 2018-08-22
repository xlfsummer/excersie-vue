// import Vue, { VueConstructor } from "vue";
import Vue from "../../../node_modules/vue/dist/vue.esm.browser.js";

export default {
    /**
     * @param {VueConstructor<Vue>} Vue Vue Constructor
     */
    install(Vue, options) {

        //全局注册 filter/component/directive 等等
        Vue.filter("negative", function (v) {
            return -v;
        });

        //使用mixin
        Vue.mixin({
            created() {
                this.$createTime = new Date().toLocaleTimeString();
            }
        });

        //在实例上增添属性
        Vue.prototype.$createTime = 0;

        //使用插件 option
        console.log(options.msg);
    }
};