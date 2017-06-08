<template>
  <div class="shopping-cart">
    <h3>Shopping Cart</h3>
    <div v-for="product in shoppingCartList">
      {{product.productName}}
      <button v-on:click="removeFromShoppingCart(product)">-</button>
    </div>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['shoppingCartList'])
    },
    methods: {
      ...mapActions(['removeFromShoppingCart'])
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
