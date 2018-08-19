import Vue from "vue";

class OrderList {
    constructor(list) {
        /** @type {[{id: Number, goodsName: String, selected?: Boolean}]} */
        this._list = list || [];
    }

    add() {
        let id = ~~(Math.random() * 10000);
        console.log("add order, id: " + id);

        let order = {};
        order.id = id;
        order.goodsName = "";
        order.selected = false;
        this._list.push(order);
        this.select(id);
    }

    update(order) {
        let index = this._list.findIndex(o => o.id === order.id);
        let updateItem = this._list[index];
        let goodsName = order.goodsName;
        Vue.set(this._list, index, {...this._list[index], goodsName});
        
    }

    removeById(id) {
        console.log("remove order, id: " + id);
        if (this.exsist(id)) {
            this._list.splice(this._list.findIndex(order => {
                return order.id = id;
            }), 1);
            return true;
        }

        return false;
    }

    exsist(id) {
        return !!this.getById(id);
    }

    getById(id) {
        return this._list.find(order => {
            return order.id == id;
        });
    }

    select(id) {
        let lastSelectedOrder = this.selected;
        if (lastSelectedOrder) {
            lastSelectedOrder.selected = false;
            Vue.set(this._list, this._list.indexOf(lastSelectedOrder), lastSelectedOrder);
        }

        let selectedOrder = this.getById(id);
        selectedOrder.selected = true;
        Vue.set(this._list, this._list.indexOf(selectedOrder), selectedOrder);
        return;
    }

    get selected() {
        return this._list.find(order => order.selected);
    }
}

export default new OrderList([
    {
        id: 8964,
        goodsName: "tank",
        selected: false
    },
    {
        id: 1817,
        goodsName: "fan",
        selected: false
    },
    {
        id: 9627,
        goodsName: "iPad Pro",
        selected: false
    }
]);