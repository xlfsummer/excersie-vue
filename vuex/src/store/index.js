import Vue from "vue";
import Vuex from "vuex";
import { delay } from "../util/common.js";

// import todoList from "../data/todo.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        todoList: [],
    },
    getters: {
        doneTodoList(state){
            return state.todoList.filter(todo => todo.done);
        },
        doneTodoListLength(state, getters){
            return getters.doneTodoList.length;
        },
        todoStartWith: state => 
            startWith => state.todoList.filter(todo => todo.name.startsWith(startWith))
    },
    mutations: {
        increment(state){
            state.count++;
        },
        /**
         * @param {object} payload 
         * @param {number} payload.id
         * @param {boolean} payload.done
         */
        toggleTodo(state, payload){
            state.todoList.find(todo => todo.id == payload.id).done = payload.done;
        },
        clearTodoList(state){
            state.todoList = [];
        },
        /**
         * @param {object} payload 
         * @param {import("../data/todo.js").todo[]} payload.data
         */
        updateTodoList(state, payload){
            state.todoList = payload.data;
        }
    },
    actions: {
        loadTodoList(context){
            import("../data/todo.js")
                .then(delay(500)) //pretend to be slow
                .then(mod => {
                    let data = mod.default;
                    context.commit("updateTodoList", { data });
                });
        }
    }
});
