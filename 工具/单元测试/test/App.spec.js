import App from "../App.vue";
import {shallowMount} from "@vue/test-utils";

describe("App data option have a property msg.", () => {
    it("msg equals to \"Hello world\"", () => {
        let wrapper = shallowMount(App);
        expect(wrapper.find("header").text()).toEqual("Hello world");
    });
});