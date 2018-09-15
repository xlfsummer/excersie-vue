export default {
    beforeRouteEnter(to, from, next){
        console.log("before route enter - componnet");
        next(function(){
            console.log("before route enter.next - componnet - ");
        });
    },
    beforeRouteUpdate(to, from, next){
        console.log("before route update - componnet - " + this.name);
        next();
    },
    beforeRouteLeave(to, from, next){
        console.log("before route leave - componnet - " + this.name);
        next();
    }
};
