<template>

  <div class="lesson-nav">
    <button
        @click="currentLesson = 'algebra'"
        :class="['lesson-btn', { active: currentLesson === 'algebra' }]"
    >
      📊 Algebra
    </button>
    <button
        @click="currentLesson = 'geometry'"
        :class="['lesson-btn', { active: currentLesson === 'geometry' }]"
    >
      📁 Geometry
    </button>
  </div>
  <GeometrySolutions v-if="currentLesson === 'geometry'"/>
  <AlgebraSolutions v-if="currentLesson === 'algebra'"/>
</template>


<script setup lang="ts">
import GeometrySolutions from "./GeometrySolutions.vue";
import AlgebraSolutions from "./AlgebraSolutions.vue";
import { ref } from "vue";

const currentLesson = ref('algebra')
</script>


<style scoped>

</style>