<template>
    <div>
        <h1>{{msg}}</h1>
        <input type="colot" v-model="color"/>
        <div>{{HexColor}}</div>
        <div>{{RgbColor}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            msg: "Hello world",
            color: "#000"
        }
    },
    methods: {

    }
});
</script>

<style scoped>
    h1{
        font-family: 'Times New Roman', Times, serif;
    }
</style>
