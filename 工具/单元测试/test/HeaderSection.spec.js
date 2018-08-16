import HeaderSection from "../component/HeaderedSection.vue";
import { shallowMount, mount } from "@vue/test-utils";

describe("gen a <hn> tag", () => {
    it("gen a <h3> when level = 3", () => {
        let wrapper = shallowMount(HeaderSection, {
            propsData: {
                level: 3,
                header: "lorem ipsum"
            }
        });
        expect(wrapper.find("h3").text()).toBe("lorem ipsum");
    });

    it("gen a <h1> when level not been pass", () => {
        let wrapper = shallowMount(HeaderSection, {
            propsData: {
                header: "lorem ipsum"
            }
        });
        expect(wrapper.find("h1").text()).toBe("lorem ipsum");
    });

    it("contain children", () => {
        let wrapper = shallowMount(HeaderSection, {
            propsData: {
                header: "lorem ipsum"
            },
            slots: {
                default: [
                    "<div id=\"child-div\">hello</div>",
                    "<ul><li id=\"child-list-item\">world</li></ul>"
                ]
            }
        });
        expect(wrapper.contains("#child-div")).toBe(true);
        expect(wrapper.find("#child-div").text()).toBe("hello");
        expect(wrapper.contains("#child-list-item")).toBe(true);
        expect(wrapper.find("#child-list-item").text()).toBe("world");
    });
});

describe("level increased when cascading", () => {
    it("inner level increased by 1", () => {
        let wrapper = shallowMount(HeaderSection, {
            propsData: {
                header: "header"
            },
            provide: {
                parentLevel: 3
            }
        });
        expect(wrapper.contains("h4")).toBe(true);
        expect(wrapper.find("h4").text()).toBe("header");
    });

    it("level prop has a higher priority", () => {
        let wrapper = shallowMount(HeaderSection, {
            propsData: {
                level: 2
            },
            provide: {
                parentLevel: 3
            }
        });

        expect(wrapper.contains("h2")).toBe(true);
    });

    it("level prop has a higher priority", () => {
        let wrapper = shallowMount(HeaderSection, {
            propsData: {
                level: 2
            },
            provide: {
                parentLevel: 3
            }
        });

        expect(wrapper.contains("h2")).toBe(true);
    });
});
