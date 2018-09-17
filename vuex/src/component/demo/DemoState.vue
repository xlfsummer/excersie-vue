<template>
    <div>
        <h2>Counter</h2>
        <p>count: {{count}}</p>
        <button @click="add">add</button>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {

    computed: {
        count(){
             return this.$store.state.counter.count;
        }
    },

    // computed: mapState({
    //     count: "count"
    // }),

    methods: {
        add(){
            this.$store.commit("counter/increment");
        }
    },

}
</script>

<style scope>

</style>
