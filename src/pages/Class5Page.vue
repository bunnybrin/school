<template>
  <div>
    <div class="container" style="margin-bottom: 0; border-radius: 15px 15px 0 0;">
      <h1>📚 5 клас</h1>
      <div class="subject-nav">
        <div class="subject-link active">💻 Комп'ютерна наука</div>
      </div>

      <div class="lesson-nav">
        <button
          @click="currentLesson = 'info'"
          :class="['lesson-btn', { active: currentLesson === 'info' }]"
        >
          📊 Урок 1: Інформація та її класифікація
        </button>
        <button
          @click="currentLesson = 'computer'"
          :class="['lesson-btn', { active: currentLesson === 'computer' }]"
        >
          💻 Урок 2: Складові комп'ютера
        </button>
        <button
          @click="currentLesson = 'os'"
          :class="['lesson-btn', { active: currentLesson === 'os' }]"
        >
          🖥️ Урок 3: Операційна система
        </button>
        <button
          @click="currentLesson = 'files'"
          :class="['lesson-btn', { active: currentLesson === 'files' }]"
        >
          📁 Урок 4: Файли, папки, операції над ними
        </button>
        <button
          @click="currentLesson = 'applications'"
          :class="['lesson-btn', { active: currentLesson === 'applications' }]"
        >
          🛠️ Урок 5: Прикладні комп'ютерні програми
        </button>
      </div>
    </div>

    <InformationAndMessages v-if="currentLesson === 'info'" />
    <ComputerComponentsLesson v-if="currentLesson === 'computer'" />
    <OperatingSystemLesson v-if="currentLesson === 'os'" />
    <FilesAndFoldersLesson v-if="currentLesson === 'files'" />
    <ApplicationSoftwareLesson v-if="currentLesson === 'applications'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InformationAndMessages from '../components/computerscience5/InformationAndMessages.vue'
import ComputerComponentsLesson from '../components/computerscience5/ComputerComponentsLesson.vue'
import OperatingSystemLesson from '../components/computerscience5/OperatingSystemLesson.vue'
import FilesAndFoldersLesson from '../components/computerscience5/FilesAndFoldersLesson.vue'
import ApplicationSoftwareLesson from '../components/computerscience5/ApplicationSoftwareLesson.vue'

const currentLesson = ref('info')
</script>

<style >
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