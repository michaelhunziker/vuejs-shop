import axios from 'axios'
import { actionTypes, mutationTypes } from './types'

export default {
  [actionTypes.LOAD_SUNGLASSES] ({commit}) {
    return axios.get('http://localhost:3000/sunglasses')
      .then(response => {
        commit(mutationTypes.UPDATE_SUNGLASSES_LIST, response.data)
      })
  }
}
