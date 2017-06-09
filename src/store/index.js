import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)
Vue.config.productionTip = false

export default new Vuex.Store({
  state: {
    shoppingCartList: [],
    sunglassesList: []
  },
  mutations,
  actions
})
