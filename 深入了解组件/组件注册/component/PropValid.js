export default {
    props: {
        aNumber: Number,
        aString: String,
        aObject: Object,
        aNumberOrString: [Number, String],
        aPerson: Person,
        aDefaultNumber: {
            type: Number,
            default: 42
        },
        aDefaultObject: {
            type: Object,
            default() {
                return {
                    a: 10
                }
            }
        },
        anOdd: {
            type: Number,
            validator(v) {
                return Math.abs(v % 2) == 1
            }
        }
    }
}