// import Vue from "vue";
import BaseInput from "./component/BaseInput.js"
import TableRow from "./component/TableRow.js"
import PropValid from "./component/PropValid.js"
import Person from "./lib/Person.js"
import NonPropAttr from "./component/NonPropAttr.js"
import CustomCheckbox from "./component/CustomCheckbox.js"
import TransparentInput from "./component/TransparentInput.js"

new Vue({
    el: ".app",
    data: {
        inputValue: "",
        xiaomin: new Person("xiaomin", 15),
        checkboxValue: true
    },
    components: {
        BaseInput,
        TableRow,
        PropValid,
        NonPropAttr,
        CustomCheckbox,
        TransparentInput,
    },
    methods: {
        log() { console.log.apply(this, arguments); }
    }
})