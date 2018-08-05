export default {
    created(){
        let tag = this.$options._componentTag;
        console.log(`created ${tag} at ${Date.now()}`);
    }
}; 