<template>
  <div class="container mt-16 flex md:flex-row flex-col justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full md:space-y-0 space-y-8">
    <div class="flex flex-col flex-wrap justify-center md:items-start items-center md:justify-start max-w-xl mt-0 md:my-36 md:space-y-4 space-y-8">
      <div class="flex justify-between space-x-4 text-3xl"><h2>My name is </h2><p class="text-purple-300">Ilias</p></div>
      <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Web<br>
        Developer
      </h1>
      <p class="flex  md:text-left text-center">Like to think that web development is like a lego set for adults</p>
      <a href="">
        <button class="bg-purple-300 px-6 py-2 font-bold">Explore</button>
      </a>
    </div>
      <img class="md:w-4/12 w-9/12 border-purple-200 border-2" src="../assets/me.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>

</style>
