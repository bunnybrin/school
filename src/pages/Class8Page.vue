<template>
  <div>
    <div class="container" style="margin-bottom: 0; border-radius: 15px 15px 0 0;">
      <div class="subject-nav">
        <router-link 
          :to="'/8-class/geometry'" 
          class="subject-link"
          :class="{ active: currentSubject === 'geometry' }"
        >
          📐 Геометрія
        </router-link>
        <router-link 
          :to="'/8-class/algebra'" 
          class="subject-link"
          :class="{ active: currentSubject === 'algebra' }"
        >
          🧮 Алгебра
        </router-link>
        <router-link 
          :to="'/8-class/computer-science'" 
          class="subject-link"
          :class="{ active: currentSubject === 'computer-science' }"
        >
          💻 Комп'ютерна наука
        </router-link>
      </div>
    </div>
    
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import GeometryLesson from '../components/geometry/GeometryLesson.vue'

const props = defineProps({
  subject: {
    type: String,
    default: 'geometry'
  }
})

const route = useRoute()

const currentSubject = computed(() => {
  return props.subject || route.path.split('/').pop() || 'geometry'
})

const currentComponent = computed(() => {
  switch (currentSubject.value) {
    case 'geometry':
      return GeometryLesson
    case 'algebra':
      return 'div' // Placeholder
    case 'computer-science':
      return 'div' // Placeholder
    default:
      return GeometryLesson
  }
})
</script>