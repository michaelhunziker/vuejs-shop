<template>
  <div>
    <h1>vue.shop - for a better l<span class="infinity">&infin;</span>k!</h1>
    <h2>sunglasses</h2>
    <div v-for="sunglass in sunglasses">
      {{sunglass.model}} {{sunglass.price.toFixed(2)}} CHF
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
            model: 'Ray Ban Aviator',
            price: 351
          },
          {
            model: 'Oakley Jawbreaker',
            price: 210.50
          }

        ]
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
