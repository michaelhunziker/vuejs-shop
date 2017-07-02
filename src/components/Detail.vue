D
<template>
  <div>
    <h2>{{ sunglasses.productName }}</h2>
    <button v-on:click="addToShoppingCart(sunglasses)">+</button>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapActions } from 'vuex'

  export default {
    name: 'detail',
    props: ['id'],
    data () {
      return {
        sunglasses: {}
      }
    },
    methods: {
      setSunglasses (sunglasses) {
        this.sunglasses = sunglasses
      },
      ...mapActions(['addToShoppingCart'])
    },
    beforeRouteEnter (to, from, next) {
      axios.get('http://localhost:3000/sunglasses/' + to.params.id)
        .then(response => {
          next(vm => vm.setSunglasses(response.data))
        }, response => {
          console.error(response)
        })
    },
    beforeRouteUpdate (to, from, next) {
      this.sunglasses = {}
      axios.get('http://localhost:3000/sunglasses/' + to.params.id)
        .then(response => {
          this.setSunglasses(response.data)
          next()
        }, response => {
          console.error(response)
        })
    }
  }
</script>

<style scoped>
</style>
