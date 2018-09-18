<template>
    <div>
        <h2>Action Demo</h2>
        <p>异步加载TodoList</p>
        <button @click="loadData">load</button>
        <button @click="clear">clear</button>
        <p>(注意这里使用与上一节中相同的数据源)</p>
        <ul>
            <li v-for="todo in todoList" :key="todo.id">{{todo.name}}</li>
        </ul>
    </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default Vue.extend({
    data(){
        return {}
    },
    computed: {
        ...mapState("todoList", {
            todoList: "todoList"
        })
    },
    methods:{
        ...mapMutations("todoList", {
            clear: "clearTodoList"
        }),
        ...mapActions("todoList", {
            loadData: "loadTodoList"
        })
        // loadData(){
        //     this.$store.dispatch("todoList/loadTodoList")
        // }
    }
});
</script>

<style>

</style>
