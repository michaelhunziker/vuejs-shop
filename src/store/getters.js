import _ from 'lodash'
import { getterTypes } from './types'

export default {
  [getterTypes.SUNGLASSES_LIST] (state) {
    return _.sortBy(state.sunglassesList, 'productName')
  },

  [getterTypes.SHOPPING_CART_LIST] (state) {
    return _.sortBy(state.shoppingCartList, 'productName')
  }
}
