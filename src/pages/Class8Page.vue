<template>
  <div>
    <div class="container" style="margin-bottom: 0; border-radius: 15px 15px 0 0;">
      <div class="subject-nav">
        <div class="subject-group">
          <div class="subject-main">📐 Геометрія</div>
          <div class="subject-submenu">
            <router-link
              :to="'/8-class/geometry'"
              class="subject-link"
              :class="{ active: currentSubject === 'geometry' }"
            >
              🎯 Інтерактивні чотирикутники
            </router-link>
            <router-link
              :to="'/8-class/geometry-theory'"
              class="subject-link"
              :class="{ active: currentSubject === 'geometry-theory' }"
            >
              📚 Теорія чотирикутників
            </router-link>
            <router-link
              :to="'/8-class/geometry-parallelogram'"
              class="subject-link"
              :class="{ active: currentSubject === 'geometry-parallelogram' }"
            >
              📐 Паралелограми та їх властивості
            </router-link>
            <router-link
              :to="'/8-class/geometry-rectangle'"
              class="subject-link"
              :class="{ active: currentSubject === 'geometry-rectangle' }"
            >
              ⬜ Прямокутники та їх властивості
            </router-link>
            <router-link
              :to="'/8-class/geometry-square'"
              class="subject-link"
              :class="{ active: currentSubject === 'geometry-square' }"
            >
              🟩 Квадрат: властивості та ознаки
            </router-link>
            <router-link
              :to="'/8-class/geometry-rhombus'"
              class="subject-link"
              :class="{ active: currentSubject === 'geometry-rhombus' }"
            >
              🔷 Ромб: властивості та ознаки
            </router-link>
          </div>
        </div>
        <router-link
          :to="'/8-class/algebra'"
          class="subject-link main-subject"
          :class="{ active: currentSubject === 'algebra' }"
        >
          🧮 Алгебра
        </router-link>
        <router-link
          :to="'/8-class/computer-science'"
          class="subject-link main-subject"
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
import QuadrilateralsTheoryLesson from '../components/geometry8/QuadrilateralsTheoryLesson.vue'
import ParallelogramLesson from '../components/geometry/ParallelogramLesson.vue'
import RectangleLesson from '../components/geometry/RectangleLesson.vue'
import SquareLesson from '../components/geometry/SquareLesson.vue'
import RhombusLesson from '../components/geometry/RhombusLesson.vue'
import AlgebraLessons from '../components/algebra8/AlgebraLessons.vue'
import BinaryCodingLesson from '../components/computerscience8/BinaryCodingLesson.vue'

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
    case 'geometry-theory':
      return QuadrilateralsTheoryLesson
    case 'geometry-parallelogram':
      return ParallelogramLesson
    case 'geometry-rectangle':
      return RectangleLesson
    case 'geometry-square':
      return SquareLesson
    case 'geometry-rhombus':
      return RhombusLesson
    case 'algebra':
      return AlgebraLessons
    case 'computer-science':
      return BinaryCodingLesson
    default:
      return GeometryLesson
  }
})
</script>