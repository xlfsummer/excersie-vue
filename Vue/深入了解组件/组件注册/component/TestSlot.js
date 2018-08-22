export default {
    props: {
        summary: {
            type: String,
            default: ""
        }
    },
    template: `
        <details>
            <summary>
                <slot name="summay"><strong>{{summary}}</strong></slot>
            </summary>
            <slot>默认插槽默认内容</slot>
        </details>
    `,
}