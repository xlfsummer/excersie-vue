export default {
    props: {
        label: String,
        id: Number
    },
    template: `
        <div class="c-input">
            <label>{{id ? id + ": " : ""}}{{label}}</label>
            <input @input="$emit('input', $event.target.value)" />
        </div>
    `
}