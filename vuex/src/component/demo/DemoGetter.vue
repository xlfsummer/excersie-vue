<template>
    <div>
        <h2>Todo List</h2>
        <ul>
            <li v-for="todo in todoList" :key="todo.name">
                <label>
                    <input type="checkbox" :name="todo.name" :checked="todo.done" id="">
                    <span>{{todo.name}}</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            todoList: "todoList"
        }),
    }
}
</script>

<style>

</style>
