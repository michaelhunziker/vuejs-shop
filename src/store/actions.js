import axios from 'axios'

export const loadSunglasses = ({commit}) => {
  axios.get('http://localhost:3000/sunglasses')
    .then(response => {
      commit('updateSunglassesList', response.data)
    })
}

export const addToShoppingCart = ({commit}, product) => {
  commit('addToShoppingCart', product)
}

export const removeFromShoppingCart = ({commit}, product) => {
  commit('removeFromShoppingCart', product)
}
