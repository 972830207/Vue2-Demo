const state = {
    user: ""  
}

const getters = {
    getUser(state) {
        return state.user
    },
}
const mutations = {
    setUser(state, user) {
        state.user = user
    },
}

const actions = {

}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}