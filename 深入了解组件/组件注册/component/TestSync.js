export default {
    props: ['value', 'title', 'description'],
    template: `
        <input :value="value" @input="input" />
    `,
    methods: {
        input($event) {
            this.$emit('update:value', $event.target.value)
            this.$emit('update:title', $event.target.value.substr(-5))
            this.$emit('update:description', $event.target.value.substr(-10))
        }
    }
}