<template>
    <div>
        <h2>Todo List</h2>
        <ul>
            <li v-for="todo in todoList" :key="todo.name">
                <label>
                    <input type="checkbox"
                        :name="todo.name"
                        :checked="todo.done"
                        @change="toggleTodo($event, todo.id)">
                    <span>{{todo.name}}</span>
                </label>
            </li>
        </ul>
        <h3>Done (getter)</h3>
        <ul>
            <li v-for="doneTodo in doneTodoList" :key="doneTodo.name">
                <span>{{doneTodo.name}}</span>
            </li>
        </ul>
        <p>done: {{doneTodoListLength}}</p>
        <h3>filter (getter function)</h3>
        <input v-model="todoStartWith" placeholder="start with"/>
        <ul>
            <li v-for="todoStartWith in todoListStartWith" :key="todoStartWith.name">
                <span>{{todoStartWith.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
    data(){
        return {
            todoStartWith: ""
        }
    },
    computed: {
        ...mapState({
            todoList: "todoList"
        }),
        ...mapGetters({
            doneTodoList: "doneTodoList",
            doneTodoListLength: "doneTodoListLength" ,
        }),
        todoListStartWith(){
            return this.$store.getters.todoStartWith(this.todoStartWith);
        }
    },
    methods: {
        /** @param {UIEvent} ev */
        toggleTodo(ev, id){
            /** @type {HTMLInputElement} */
            let checkbox = ev.target;
            let done = checkbox.checked;
            this.$store.commit("toggleTodo", { id, done});
        }
    },
    created(){
        this.$store.dispatch("loadTodoList");
    }
});
</script>

<style>

</style>
