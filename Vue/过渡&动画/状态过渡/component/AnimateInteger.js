export default {
    props: {
        num: Number,
        duration: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            tweenNum: 0
        };
    },
    template: "<span>{{tweenInt}}</span>",
    computed: {
        tweenInt() {
            return Math.floor(this.tweenNum);
        }
    },
    watch: {
        num(n) {
            new TweenMax(this.$data, this.duration, {
                tweenNum: n
            });
        }
    },
    create(){
        this.tweenNum = this.num;
    }
};