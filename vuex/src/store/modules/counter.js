/** @type {import("vuex").Module} */
let option = {
    namespaced: true,
    state: {
        count: 0,
    },
    mutations: {
        increment(state){
            state.count += 1;
        },
    }
};

export default option;