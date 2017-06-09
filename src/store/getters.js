import _ from 'lodash'

export const sunglassesList = (state) => {
  return _.sortBy(state.sunglassesList, 'productName')
}
export const shoppingCartList = (state) => {
  return _.sortBy(state.shoppingCartList, 'productName')
}
