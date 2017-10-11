<template>
  <div>
    <h1>l<span class="infinity">&infin;</span>king good!</h1>
    <h2>sunglasses</h2>
    <div v-for="sunglasses in sunglassesList">
      <router-link :to="{ name: 'detail', params: { id: sunglasses.id }}">{{sunglasses.productName}}</router-link>
      <button v-on:click="addToShoppingCart(sunglasses)">+</button>
    </div>
  </div>
</template>

<script>

  import { actionTypes, getterTypes, mutationTypes } from '@/store/types'

  export default {
    name: 'list',
    computed: {
      sunglassesList () {
        return this.$store.getters[getterTypes.SUNGLASSES_LIST]
      }
    },
    methods: {
      addToShoppingCart (sunglasses) {
        this.$store.commit(mutationTypes.ADD_TO_SHOPPING_CART, sunglasses)
      }
    },
    created () {
      this.$store.dispatch(actionTypes.LOAD_SUNGLASSES)
    }
  }
</script>

<style scoped>
  .infinity {
    font-size: 1.3em;
    color: #42b983
  }
</style>
