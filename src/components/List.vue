<template>
  <div>
    <h1>l<span class="infinity">&infin;</span>king good!</h1>
    <h2>sunglasses</h2>
    <div v-for="sunglasses in sunglassesList">
      <router-link :to="{ name: 'detail', params: { id: sunglasses.id }}">{{sunglasses.productName}}</router-link>
      <button v-on:click="add()">+</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'list',
    data () {
      return {
        sunglassesList: null
      }
    },
    methods: {
      add () {
        alert('adding fancy sunglasses!')
      }
    },
    created () {
      axios.get('http://localhost:3000/sunglasses')
        .then(response => {
          this.sunglassesList = response.data
        }, response => {
          console.error(response)
        })
    }
  }
</script>

<style scoped>
  .infinity {
    font-size: 1.3em;
    color: #42b983
  }
</style>
