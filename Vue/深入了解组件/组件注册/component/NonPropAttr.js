export default {
    // inheritAttrs: false,
    data() {
        return {
            style: {
                color: "red"
            }
        };
    },
    template: `<div
        :style="style"
        data-tag="默认 tag"
    >Content</div>`,
}