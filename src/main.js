// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    shoppingCartList: [],
    sunglassesList: []
  },
  mutations: {
    updateSunglassesList (state, list) {
      state.sunglassesList = list
    },
    addToShoppingCart (state, product) {
      state.shoppingCartList.push(product)
    },
    removeFromShoppingCart (state, product) {
      // TODO: USE LODASH!!!
      let index = state.shoppingCartList.indexOf(product)
      if (index !== -1) {
        state.shoppingCartList.splice(index, 1)
      }
    }
  },
  actions: {
    loadSunglasses ({commit}) {
      axios.get('http://localhost:3000/sunglasses')
        .then(response => {
          commit('updateSunglassesList', response.data)
        })
    },
    addToShoppingCart ({commit}, product) {
      commit('addToShoppingCart', product)
    },
    removeFromShoppingCart ({commit}, product) {
      commit('removeFromShoppingCart', product)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
