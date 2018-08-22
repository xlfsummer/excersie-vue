export default {
    props: {
        "caption": String
    },
    template: `
        <details>
            <summary><h2 style="display: inline" v-text="caption"></h2></summary>
            <slot />
        </details>
    `
};