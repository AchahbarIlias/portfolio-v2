<template>
<div>
  <div class="py-6">
    <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full text-white">
      <div class="text-lg font-bold"><a href="/">Ilias Achahbar</a></div>
      <div class="hidden md:flex space-x-12 items-center text-md">
        <a href="/skills">My Bio</a>
        <a href="/work">My Work</a>
        <a href="/skills">My Skills</a>
        <a href=""><button class="bg-purple-300 px-6 py-2 font-bold">Hire Me</button></a>
      </div>
      <button v-on:click="toggleMenu" class="md:hidden flex flex-col space-y-1 w-8">
        <span class="bg-purple-300 w-full h-1"></span>
        <span class="bg-purple-300 w-full h-1"></span>
        <span class="bg-purple-300 w-full h-1"></span>
      </button>
    </div>

  </div>
      <div v-if="showMenu" class="md:hidden text-black space-y-4 flex flex-col bg-blue-100 items-center p-4">
          <a href="/">Home</a>
        <a href="/work">My Work</a>
        <a href="/about">About</a>
        <a href=""><button class="bg-purple-300 text-white px-6 py-2 font-bold">Hire Me</button></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>