import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    singer: '',
    showSongBox: false
  },
  mutations: {
    changeSongBoxState(state, payload) {
      state.showSongBox = payload
    }
  },
  actions: {
    toggleSongBox({ commit}, flag) {
      commit('changeSongBoxState',flag)
    }
  }
})
