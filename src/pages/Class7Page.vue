<template>
  <div class="container class-7">
    <h1>🔬 7 клас</h1>
    <div class="subject-nav">
      <div class="subject-link active">💻 Комп'ютерна наука</div>
    </div>

    <div class="lesson-navigation">
      <div
          class="lesson-card"
          :class="{ active: currentLesson === 'cloud' }"
          @click="currentLesson = 'cloud'"
      >
        <span class="lesson-icon">☁️</span>
        <h3>Хмарні сервіси</h3>
        <p>Що таке хмарні технології, які бувають сервіси та як працювати з Google Диском</p>
      </div>

      <div
          class="lesson-card"
          :class="{ active: currentLesson === 'search' }"
          @click="currentLesson = 'search'"
      >
        <span class="lesson-icon">🔍</span>
        <h3>Пошук в Інтернеті</h3>
        <p>Інструменти пошуку Google, фільтри та налаштування для ефективного пошуку інформації</p>
      </div>

      <div
          class="lesson-card"
          :class="{ active: currentLesson === 'advanced' }"
          @click="currentLesson = 'advanced'"
      >
        <span class="lesson-icon">🎯</span>
        <h3>Розширений пошук</h3>
        <p>Критерії розширеного пошуку, оператори та техніки для точного знаходження потрібної інформації</p>
      </div>

      <div
          class="lesson-card"
          :class="{ active: currentLesson === 'sources' }"
          @click="currentLesson = 'sources'"
      >
        <span class="lesson-icon">📚</span>
        <h3>Джерела та закладки</h3>
        <p>Створення списків джерел, організація закладок та ефективне управління інформацією</p>
      </div>

      <div
          class="lesson-card"
          :class="{ active: currentLesson === 'factcheck' }"
          @click="currentLesson = 'factcheck'"
      >
        <span class="lesson-icon">✅</span>
        <h3>Перевірка достовірності</h3>
        <p>Фактчекінг, правило трьох джерел та навички критичного мислення в цифровій епосі</p>
      </div>

      <div
          class="lesson-card"
          :class="{ active: currentLesson === 'email' }"
          @click="currentLesson = 'email'"
      >
        <span class="lesson-icon">📧</span>
        <h3>Електронне листування</h3>
        <p>Основи роботи з електронною поштою, етикет листування та правила безпечного спілкування</p>
      </div>
    </div>

    <div class="lesson-content">
      <CloudServicesLesson v-if="currentLesson === 'cloud'"/>
      <InternetSearchLesson v-if="currentLesson === 'search'"/>
      <AdvancedSearchLesson v-if="currentLesson === 'advanced'"/>
      <SourcesAndBookmarksLesson v-if="currentLesson === 'sources'"/>
      <FactCheckingLesson v-if="currentLesson === 'factcheck'"/>
      <EmailCommunicationLesson v-if="currentLesson === 'email'"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CloudServicesLesson from '../components/computerscience7/CloudServicesLesson.vue'
import InternetSearchLesson from '../components/computerscience7/InternetSearchLesson.vue'
import AdvancedSearchLesson from '../components/computerscience7/AdvancedSearchLesson.vue'
import SourcesAndBookmarksLesson from '../components/computerscience7/SourcesAndBookmarksLesson.vue'
import FactCheckingLesson from '../components/computerscience7/FactCheckingLesson.vue'
import EmailCommunicationLesson from '../components/computerscience7/EmailCommunicationLesson.vue'

const currentLesson = ref('cloud')
</script>

<style scoped>

.lesson-navigation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  font-size: 0.95em;
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