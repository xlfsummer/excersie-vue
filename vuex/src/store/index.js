import Vue from "vue";
import Vuex from "vuex";

import todoList from "../data/todo.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        todoList: todoList
    },
    mutations: {
        increment(state){
            state.count++;
        }
    }
});
