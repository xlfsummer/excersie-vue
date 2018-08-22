<template>
    <div class="app">
        <order-list></order-list>
        <order-form></order-form>
    </div>
</template>

<script>
import OrderForm from "./components/OrderForm.vue";
import OrderList from "./components/OrderList.vue";

export default {
    data(){
        return {

        }
    },
    components: {
        OrderForm,
        OrderList
    },
    methods: {

    }
};
</script>

<style scoped>
    .app{
        display: grid;
        grid-template: 1fr / 1fr 1fr;
        grid-gap: 100px;
    }
</style>
