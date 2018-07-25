export default {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
        allListener() {
            return {
                ...this.$listeners,
                input: ($event)=>{
                    this.$emit('input', $event.target.value);
                }
            }
        }
    },
    template: `
        <label>
            {{label}}
            <input
                v-bind="$attrs"
                v-on="allListener"
                :value="value"
            />
        </label>
    `
}