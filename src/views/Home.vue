<template>
  <div class="home">
    <div class="">
      <Hero></Hero>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>

<style>
</style>
