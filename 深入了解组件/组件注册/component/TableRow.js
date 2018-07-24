export default {
    props: {
        "columnCount": Number
    },
    computed: {
        columns() {
            return new Array(this.columnCount);
        }
    },
    template: `<tr>
            <td v-for="i in columns">1</td>
        </tr>`
}