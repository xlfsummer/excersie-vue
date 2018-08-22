<template>
    <table border="1">
        <tr>
            <th>订单ID</th>
            <th>商品名称</th>
        </tr>
        <tr v-for="item in list"
            :key="item.id"
            @click="handelSelect(item)"
            :class="{selected: item.selected}">
            <td v-text="item.id"></td>
            <td v-text="item.goodsName"></td>
        </tr>
        <tr><td colspan="2" @click="handelAdd" class="add-cell">添加</td></tr>
    </table>
</template>

<script>
import orderList from "../models/orderList.js";

export default {
    data(){
        return {
            list: orderList._list
        };
    },
    watch: {    },
    methods: {
        handelSelect(item){
            orderList.select(item.id);
        },
        handelAdd(){
            orderList.add();
        }
    }
}
</script>

<style>
    td,th{
        padding: 5px;
    }
    tr.selected {
        background: #eee;
    }
    .add-cell{
        color: #fff;
        background: #6c6;
    }
</style>
