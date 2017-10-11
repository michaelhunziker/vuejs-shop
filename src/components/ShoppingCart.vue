<template>
  <div class="shopping-cart">
    <h3>Shopping Cart</h3>
    <div v-for="sunglasses in shoppingCartList">
      {{sunglasses.productName}}
      <button v-on:click="removeFromShoppingCart(sunglasses)">-</button>
    </div>
  </div>
</template>

<script>

  import { getterTypes, mutationTypes } from '@/store/types'

  export default {
    computed: {
      shoppingCartList () {
        return this.$store.getters[getterTypes.SHOPPING_CART_LIST]
      }
    },
    methods: {
      removeFromShoppingCart (sunglasses) {
        this.$store.commit(mutationTypes.REMOVE_FROM_SHOPPING_CART, sunglasses)
      }
    }
  }
</script>

<style scoped>
  .shopping-cart {
    position: absolute;
    top: 0;
    right: 0;
  }

</style>
