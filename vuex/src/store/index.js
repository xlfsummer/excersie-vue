import Vue from "vue";
import Vuex from "vuex";

import counter from "./modules/counter.js";
import todoList from "./modules/todo.js";

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        counter,
        todoList
    }
});

export default store;


// hmr support
if (module.hot) {
    module.hot.accept([
        "./modules/counter.js",
        "./modules/todo.js"
    ], () => {
        store.hotUpdate({
            modules: {
                counter: require("./modules/counter.js").default,
                todoList: require("./modules/todo.js").default
            }
        })
    })
}