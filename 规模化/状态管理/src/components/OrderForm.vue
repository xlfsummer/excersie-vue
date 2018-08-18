<template>
    <div>
        <form @submit="handleSubmit($event)" v-show="!!selected">
            <p><label>id: <br/><input type="text" v-model="formData.id" disabled/></label></p>
            <p><label>goods name: <br/><input type="text" v-model="formData.goodsName"/></label></p>
            <p><input type="submit" value="提交"/></p>
        </form>

        <div v-show="!selected">
            暂未选择
        </div>
    </div>

</template>

<script>
import orderList from "../models/orderList.js";

export default {
    name: "OrderForm",
    data(){
        return {
            list: orderList._list,
            formData: {
                id: "",
                goodsName: ""
            },
            selected: false
        };
    },
    watch: {
        list(list){
            let order = orderList.selected;
            if(!order) return;
            this.formData.id = order.id;
            this.formData.goodsName = order.goodsName;
            this.selected = !!order;
        }
    },
    methods: {
        handleSubmit(e){
            orderList.update({
                goodsName: this.formData.goodsName
            });
            e.preventDefault();
        }
    },
    created(){

    }
}
</script>

<style>

</style>
