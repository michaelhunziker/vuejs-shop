D
<template>
  <div>
    <h2>{{ sunglasses.productName }}</h2>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'detail',
    props: ['id'],
    data () {
      return {
        sunglasses: {}
      }
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
    },
    methods: {
      setSunglasses (sunglasses) {
        this.sunglasses = sunglasses
      }
    }
  }
</script>

<style scoped>
</style>
