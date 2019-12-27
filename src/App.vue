<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/layout/Footer.vue'


export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
