<template>
    <div>
        <h1>{{msg}}</h1>
        <input type="color" v-model="hexColor"/>
        <div>{{hexColor}}</div>
        <div>{{rgbColor}}</div>
        <input type="range" v-model="r" min="0" max="255"/>
        <input type="range" v-model="g" min="0" max="255"/>
        <input type="range" v-model="b" min="0" max="255"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Color from "./lib/Color";

export default Vue.extend({
    data(){
        return {
            msg: "Hello world",
            color: new Color(0, 0, 0),
        }
    },
    computed: {
        hexColor: {
            get(): string{
                return this.color.toString("hex");
            },
            set(hexColor: string){
                this.color.set(hexColor);
            }
        },
        rgbColor(): string{
            return this.color.toString("rgb");
        },
        r: {
            get(): number{
                return this.color.r;
            },
            set(v){
                return this.color.set(this.color & 0x00ffff | v << 4);
            }
        },
        g: {
            get(): number{
                return this.color.g;
            },
            set(v: number){
                return this.color.set(this.color & 0xff00ff | v << 2);
            },
        },
        b:{
            get(): number{
                return this.color.b;
            },
            set(v: number){
                return this.color.set(this.color & 0xffff00 | v);
            },
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
