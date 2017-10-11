<template>
  <div>
    <h2>{{ sunglasses.productName }}</h2>
    <div>
      {{sunglasses.description}}
    </div>
    <div>
      <button v-on:click="addToShoppingCart(sunglasses)">+</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mutationTypes } from '@/store/types'

  export default {
    name: 'detail',
    props: ['id'],
    data () {
      return {
        sunglasses: {}
      }
    },
    methods: {
      addToShoppingCart () {
        this.$store.commit(mutationTypes.ADD_TO_SHOPPING_CART, this.sunglasses)
      }
    },
    beforeRouteEnter (to, from, next) {
      axios.get('http://localhost:3000/sunglasses/' + to.params.id)
        .then(response => {
          next(vm => { vm.sunglasses = response.data })
        }, response => {
          console.error(response)
        })
    }
    // TODO: Implement beforeRouteUpdate: See https://router.vuejs.org/en/advanced/navigation-guards.html
  }
</script>

<style scoped>
</style>
