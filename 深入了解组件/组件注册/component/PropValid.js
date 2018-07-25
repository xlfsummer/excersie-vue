import Person from "../lib/Person.js";

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
    },
    template: `
    <dl>
        <dt>aNumber</dt>
        <dd>{{aNumber}}</dd>
        <dt>aString</dt>
        <dd>{{aString}}</dd>
        <dt>aObject</dt>
        <dd>{{aObject}}</dd>
        <dt>aNumberOrString</dt>
        <dd>{{aNumberOrString}}</dd>
        <dt>aPerson</dt>
        <dd>{{aPerson}}</dd>
        <dt>aDefaultNumber</dt>
        <dd>{{aDefaultNumber}}</dd>
        <dt>aDefaultObject</dt>
        <dd>{{aDefaultObject}}</dd>
        <dt>anOdd</dt>
        <dd>{{anOdd}}</dd>
    </dl>`

}