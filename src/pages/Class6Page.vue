<template>
  <div class="container">
    <h1>💻 6 клас</h1>
    <div class="subject-nav">
      <div class="subject-link active">💻 Комп'ютерна наука</div>
    </div>

    <div class="lesson-navigation">
      <div
        class="lesson-card"
        :class="{ active: currentLesson === 'devices' }"
        @click="currentLesson = 'devices'"
      >
        <span class="lesson-icon">📱</span>
        <h3>Цифрові пристрої</h3>
        <p>Вивчаємо цифрові пристрої, їх класифікацію та принципи роботи</p>
      </div>

<!--      <div-->
<!--        class="lesson-card"-->
<!--        :class="{ active: currentLesson === 'security' }"-->
<!--        @click="currentLesson = 'security'"-->
<!--      >-->
<!--        <span class="lesson-icon">🔒</span>-->
<!--        <h3>Цифрова безпека</h3>-->
<!--        <p>Цифровий слід, ризики та заходи безпеки в інтернеті</p>-->
<!--      </div>-->

      <div
        class="lesson-card"
        :class="{ active: currentLesson === 'technologies' }"
        @click="currentLesson = 'technologies'"
      >
        <span class="lesson-icon">🚀</span>
        <h3>Цифрові технології</h3>
        <p>Використання цифрових технологій у житті та освіті</p>
      </div>
    </div>

    <div class="lesson-content">
      <DigitalDevicesLesson v-if="currentLesson === 'devices'" />
      <DigitalSecurityLesson v-if="currentLesson === 'security'" />
      <DigitalTechnologiesLesson v-if="currentLesson === 'technologies'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DigitalDevicesLesson from '../components/computerscience6/DigitalDevicesLesson.vue'
import DigitalSecurityLesson from '../components/computerscience6/DigitalSecurityLesson.vue'
import DigitalTechnologiesLesson from '../components/computerscience6/DigitalTechnologiesLesson.vue'

const currentLesson = ref('devices')
</script>

<style scoped>

.lesson-navigation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  padding: 20px;
  margin-bottom: 20px;
}

.lesson-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.lesson-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.lesson-card.active {
  border-color: #667eea;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);
}

.lesson-icon {
  font-size: 4em;
  display: block;
  margin-bottom: 20px;
}

.lesson-card h3 {
  color: #2c3e50;
  margin: 0 0 15px 0;
  font-size: 1.4em;
}

.lesson-card p {
  color: #7f8c8d;
  margin: 0;
  line-height: 1.5;
}

.lesson-card.active h3 {
  color: #667eea;
}

.lesson-content {
  background: transparent;
  min-height: 200px;
}

@media (max-width: 768px) {
  .lesson-navigation {
    grid-template-columns: 1fr;
    padding: 15px;
    gap: 15px;
  }

  .lesson-card {
    padding: 20px;
  }

  .lesson-icon {
    font-size: 3em;
  }

  h1 {
    font-size: 2em;
    padding: 20px;
  }
}
</style>