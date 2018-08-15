import App from "../App.vue";
import {shallowMount} from "@vue/test-utils";
// import Vue from "vue";

describe("App data option have a property msg.", () => {
    it("msg equals to \"Hello world\"", () => {
        // let vm = new Vue(App).$mount();
        let wrapper = shallowMount(App);
        expect(wrapper.find("header").text()).toEqual("Hello world");
    });
});