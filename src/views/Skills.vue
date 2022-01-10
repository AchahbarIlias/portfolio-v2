<template>
  <div class="skills">
    <div class="">
      <SkillsHero></SkillsHero>
      <SkillsApplication></SkillsApplication>
      <SkillsUtils></SkillsUtils>
      <SkillsDevOps></SkillsDevOps>
      <SkillsBusiness></SkillsBusiness>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SkillsHero from '@/components/SkillsHero.vue'
import SkillsApplication from '@/components/SkillsApplication.vue'
import SkillsUtils from '@/components/SkillsUtils.vue'
import SkillsDevOps from '@/components/SkillsDevOps.vue'
import SkillsBusiness from '@/components/SkillsBusiness.vue'

export default {
  name: 'Skills',
  components: {
    SkillsHero,
    SkillsApplication,
    SkillsUtils,
    SkillsDevOps,
    SkillsBusiness,
  }
}
</script>

<style>
</style>
