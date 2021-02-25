const state = () => ({
    isOpen: false
})

const getters = {
    isOpen: state => state.isOpen
}

const mutations = {
    SET_STATE (state, payload) {
        state.isOpen = payload
    }
}

const actions = {
    toggle ({ state, commit }) {
        commit('SET_STATE', !state.isOpen)
    },
    open ({ commit }) {
        commit('SET_STATE', true)
    },
    close ({ commit }) {
        commit('SET_STATE', false)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
