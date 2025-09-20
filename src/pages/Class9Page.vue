<template>
  <div>
    <div class="container" style="margin-bottom: 0; border-radius: 15px 15px 0 0;">
      <h1>🧮 9 клас</h1>
      <div class="subject-nav">
        <div class="subject-link active">💻 Комп'ютерна наука</div>
      </div>

      <div class="lesson-nav">
        <button
          @click="currentLesson = 'informatics'"
          :class="['lesson-btn', { active: currentLesson === 'informatics' }]"
        >
          📘 Урок 1: Інформатика як наука
        </button>
        <button
          @click="currentLesson = 'operating-systems'"
          :class="['lesson-btn', { active: currentLesson === 'operating-systems' }]"
        >
          🖥️ Урок 2: Операційні системи
        </button>
      </div>
    </div>

    <InformaticsAsScience v-if="currentLesson === 'informatics'" />
    <OperatingSystemLesson v-else />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InformaticsAsScience from '../components/computerscience9/InformaticsAsScience.vue'
import OperatingSystemLesson from '../components/computerscience5/OperatingSystemLesson.vue'

const currentLesson = ref('informatics')
</script>

<style scoped>
.lesson-nav {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.lesson-btn {
  background: #e9ecef;
  color: #495057;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  flex: 1;
  min-width: 200px;
}

.lesson-btn:hover {
  background: #dee2e6;
  transform: translateY(-1px);
}

.lesson-btn.active {
  background: #007bff;
  color: white;
}

.lesson-btn.active:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .lesson-nav {
    flex-direction: column;
    gap: 10px;
  }

  .lesson-btn {
    min-width: auto;
  }
}
</style>