<template>
  <div class="work">
    <div class="">
      <Projects></Projects>
      <ProjectsGrid></ProjectsGrid>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Projects from '@/components/Projects.vue'
import ProjectsGrid from '@/components/ProjectsGrid.vue'

export default {
  name: 'Work',
  components: {
    Projects,
    ProjectsGrid
  }
}
</script>

<style>
</style>
