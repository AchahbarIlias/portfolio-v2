<template>
<div>
  <div class="py-6 animate-moveintobottom">
    <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full text-white">
      <div class="text-lg font-bold "><router-link :to="{ name: 'Home'}">Ilias Achahbar</router-link></div>
      <div class="hidden md:flex space-x-12 items-center text-md">
        <router-link class="hover:text-purple-200" :to="{ name: 'Bio'}">My Bio</router-link>
        <router-link class="hover:text-purple-200" :to="{ name: 'Work'}">My Work</router-link>
        <router-link class="hover:text-purple-200" :to="{ name: 'Skills'}">My Skills</router-link>
        <button type="button" class="text-white bg-purple-300 hover:bg-purple-400 hover:text-white font-medium rounded-sm text-sm p-2.5 text-center inline-flex items-center mr-2">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  Hire Me
</button>
      </div>
      <button v-on:click="toggleMenu" class="md:hidden flex flex-col space-y-1 w-8">
        <span class="bg-purple-300 w-full h-1"></span>
        <span class="bg-purple-300 w-full h-1"></span>
        <span class="bg-purple-300 w-full h-1"></span>
      </button>
    </div>

  </div>
      <div v-if="showMenu" class="md:hidden text-black space-y-4 flex flex-col bg-white items-center p-4">
        <router-link class="hover:text-purple-200" :to="{ name: 'Bio'}">My Bio</router-link>
        <router-link class="hover:text-purple-200" :to="{ name: 'Work'}">My Work</router-link>
        <router-link class="hover:text-purple-200" :to="{ name: 'Skills'}">My Skills</router-link>
                <button type="button" class="text-white bg-purple-300 hover:bg-purple-400 hover:text-white font-medium rounded-sm text-sm p-2.5 text-center inline-flex items-center mr-2">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  Hire Me
</button>
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