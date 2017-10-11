import { mutationTypes } from './types'

export default {
  [mutationTypes.UPDATE_SUNGLASSES_LIST] (state, sunglassesList) {
    state.sunglassesList = sunglassesList
  },

  [mutationTypes.ADD_TO_SHOPPING_CART] (state, product) {
    state.shoppingCartList.push(product)
  },

  [mutationTypes.REMOVE_FROM_SHOPPING_CART] (state, sunglasses) {
    let index = state.shoppingCartList.indexOf(sunglasses)
    if (index !== -1) {
      state.shoppingCartList.splice(index, 1)
    }
  }
}
