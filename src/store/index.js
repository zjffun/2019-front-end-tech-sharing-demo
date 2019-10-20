export default Vuex => new Vuex.Store({
    state: {
        keyword: ""
    },
    mutations: {
        setKeyword(state, kw) {
            state.keyword = kw;
        }
    }
})