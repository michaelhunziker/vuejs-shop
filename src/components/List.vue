<template>
  <div>
    <h1>l<span class="infinity">&infin;</span>king good!</h1>
    <h2>sunglasses</h2>
    <div v-for="sunglass in sunglasses">
      <router-link :to="{ name: 'detail', params: { productId: sunglass.productId }}">User</router-link>
      <button v-on:click="add()">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        sunglasses: [
          {
            productId: 123,
            productName: 'Ray Ban Aviator',
            price: 351
          },
          {
            productId: 234,
            productName: 'Oakley Jawbreaker',
            price: 210.50
          }

        ]
      }
    },
    methods: {
      add () {
        alert('adding fancy sunglasses!')
      }
    }
  }
</script>

<style scoped>
  .infinity {
    font-size: 1.3em;
    color: #42b983
  }
</style>
