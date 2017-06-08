<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
  import ShoppingCart from './components/ShoppingCart'
  export default {
    components: {ShoppingCart},
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
