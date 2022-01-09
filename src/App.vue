<template>
  <div id="app">
    <Navigation></Navigation>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  components: {
    Navigation
  }

}
</script>

<style>
#app {
  font-family: Verdana;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-white;
}
body {
  background-color: #0D1117;
  @apply pb-12
}
</style>
