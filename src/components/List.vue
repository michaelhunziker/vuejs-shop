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

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'list',
    computed: {
      ...mapGetters(['sunglassesList'])

      // mapGetters is a shorthand for this:
      // sunglassesList () {
      // return this.$store.getters.sunglassesList
      // }
    },
    methods: {
      ...mapActions(['addToShoppingCart'])
    },
    created () {
      this.$store.dispatch('loadSunglasses')
    }
  }
</script>

<style scoped>
  .infinity {
    font-size: 1.3em;
    color: #42b983
  }
</style>
