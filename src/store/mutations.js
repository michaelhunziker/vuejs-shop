export const updateSunglassesList = (state, list) => {
  state.sunglassesList = list
}

export const addToShoppingCart = (state, product) => {
  state.shoppingCartList.push(product)
}

export const removeFromShoppingCart = (state, product) => {
  let index = state.shoppingCartList.indexOf(product)
  if (index !== -1) {
    state.shoppingCartList.splice(index, 1)
  }
}
