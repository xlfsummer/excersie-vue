export default {
    template: "<div><slot/></div>",
    created(){
        console.log("component self created");
    }
};