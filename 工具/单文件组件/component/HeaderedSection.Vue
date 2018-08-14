<script>
export default {
    name: "HeaderedSection",
    props: {
        level: {
            type: Number,
            // default: 0
        },
        header: {
            type: String,
            default: ""
        }
    },
    inject: {
        parentLevel: {
            from: "parentLevel",
            default: 0
        },
    },
    provide(){
        return {
            parentLevel: this.currentHeaderLevel,
        }
    },
    computed: {
        currentHeaderLevel(){
            return this.$props.level || this.parentLevel + 1;
        }
    },
    render(h){
        return h(
            "section",
            [
                h(
                    "h" + this.currentHeaderLevel,
                    [this.$props.header]
                ),
                this.$slots.default
            ]
        );
    }
}
</script>
