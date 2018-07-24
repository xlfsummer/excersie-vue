// import Vue from "vue";
import BaseInput from "./component/BaseInput.js"
import TableRow from "./component/TableRow.js"

new Vue({
    el: ".app",
    data: {
        inputValue: ""
    },
    components: {
        BaseInput,
        TableRow
    }
})