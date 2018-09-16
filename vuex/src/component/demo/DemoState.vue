<template>
    <div>
        <p>count: {{count}}</p>
        <button @click="add">add</button>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    /**
     * computed: {
     *     count(){
     *          return this.$store.state.count;
     *     }
     * }
     */
    computed: mapState({
        count: "count"
    }),

    methods: {
        add(){
            this.$store.commit("increment");
        }
    }
}
</script>

<style>

</style>
