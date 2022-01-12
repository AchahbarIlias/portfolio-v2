<template>
  <div class="container mt-16 flex md:flex-row flex-col justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full md:space-y-0 space-y-8">
    <div class="flex flex-col flex-wrap justify-center md:items-start items-center md:justify-start max-w-xl mt-0 md:my-36 md:space-y-4 space-y-8">
      <div class="flex justify-between space-x-4 text-3xl"><h2>My name is </h2><p class="text-purple-300">Ilias</p></div>
      <h1 class="animate-moveintoright font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Web<br>
        Developer
      </h1>
      <p class="flex  md:text-left text-center">Like to think that web development is like a lego set for adults</p>
                <button type="button" class="animate-pulse-slow text-white bg-purple-300 hover:bg-purple-400 hover:text-white font-bold rounded-sm text-sm p-2.5 text-center inline-flex items-center mr-2">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  EXPLORE
</button>
    </div>
      <img class="md:w-4/12 w-9/12 border-purple-200 animate-moveintoleft" src="../assets/me.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>

</style>
