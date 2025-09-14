<template>
  <div class="algebra-container">
    <div class="container">
      <div class="lessons-header">
        <h1>🧮 Алгебра - 8 клас</h1>
        <p>Оберіть урок для вивчення:</p>
      </div>

      <div class="lessons-nav">
        <button
          v-for="lesson in lessons"
          :key="lesson.id"
          @click="currentLesson = lesson.id"
          class="lesson-button"
          :class="{ active: currentLesson === lesson.id }"
        >
          <span class="lesson-icon">{{ lesson.icon }}</span>
          <span class="lesson-title">{{ lesson.title }}</span>
          <span class="lesson-subtitle">{{ lesson.subtitle }}</span>
        </button>
      </div>
    </div>

    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AlgebraLesson from './AlgebraLesson.vue'
import IdenticalTransformationsLesson from './IdenticalTransformationsLesson.vue'

const lessons = [
  {
    id: 'rational-fractions',
    title: 'Раціональні дроби',
    subtitle: 'Означення та допустимі значення',
    icon: '🔢',
    component: AlgebraLesson
  },
  {
    id: 'identical-transformations',
    title: 'Тотожні перетворення',
    subtitle: 'Раціональних виразів',
    icon: '🔄',
    component: IdenticalTransformationsLesson
  }
]

const currentLesson = ref('identical-transformations') // Start with the new lesson

const currentComponent = computed(() => {
  const lesson = lessons.find(l => l.id === currentLesson.value)
  return lesson ? lesson.component : AlgebraLesson
})
</script>

<style scoped>
.algebra-container {
  min-height: 100vh;
}

.lessons-header {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  margin-bottom: 30px;
}

.lessons-header h1 {
  color: white;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.lessons-header p {
  font-size: 1.2em;
  opacity: 0.9;
}

.lessons-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  padding: 0 20px;
}

.lesson-button {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.lesson-button:hover {
  border-color: #667eea;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.2);
}

.lesson-button.active {
  border-color: #667eea;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}

.lesson-icon {
  font-size: 3em;
  margin-bottom: 10px;
}

.lesson-title {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 5px;
}

.lesson-subtitle {
  font-size: 1em;
  opacity: 0.8;
}

.lesson-button.active .lesson-subtitle {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .lessons-nav {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0 10px;
  }

  .lesson-button {
    padding: 20px;
  }

  .lesson-icon {
    font-size: 2.5em;
  }

  .lesson-title {
    font-size: 1.1em;
  }

  .lesson-subtitle {
    font-size: 0.9em;
  }

  .lessons-header h1 {
    font-size: 2em;
  }

  .lessons-header p {
    font-size: 1em;
  }
}
</style>