import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
Vue.config.productionTip = false

export default new Vuex.Store({
  state: {
    shoppingCartList: [],
    sunglassesList: []
  },
  getters,
  actions,
  mutations
})
