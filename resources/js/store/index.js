import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import cart from './cart'
import purchase from './purchase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },

  getters: {
    //
  },

  mutations: {
    //
  },

  actions: {
    //
  },

  modules: {
    auth,
    cart,
    purchase
  }
})
