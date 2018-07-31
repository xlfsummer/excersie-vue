export default {
    template: `<ul>
    <li>parentData: {{parentData}}</li>
    <li>rootData: {{rootData}}</li>
    </ul>`,
    data(){
        return {
            someData: "data in child component"
        }
    },
    computed: {
        parentData() {
            return this.$parent.someData;
        },
        rootData() {
            return this.$root.someData;
        }
    },
    // mounted() {
    //     this.parentData = this.$parent.someData
    // }
}