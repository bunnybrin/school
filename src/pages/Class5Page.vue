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
      </div>
    </div>

    <ComputerScienceLesson5 v-if="currentLesson === 'info'" />
    <ComputerComponentsLesson v-if="currentLesson === 'computer'" />
    <OperatingSystemLesson v-if="currentLesson === 'os'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ComputerScienceLesson5 from '../components/computerscience5/ComputerScienceLesson5.vue'
import ComputerComponentsLesson from '../components/computerscience5/ComputerComponentsLesson.vue'
import OperatingSystemLesson from '../components/computerscience5/OperatingSystemLesson.vue'

const currentLesson = ref('info')
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f8f9fa;
  min-height: 100vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9ecef;
}

.header h1 {
  color: #2c3e50;
  font-size: 2.2em;
  margin-bottom: 10px;
  font-weight: 600;
}

.subtitle {
  color: #7f8c8d;
  font-size: 1.2em;
  font-style: italic;
}

.nav-menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.nav-btn {
  background: #6c757d;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  font-size: 14px;
}

.nav-btn:hover {
  background: #5a6268;
}

.back-btn {
  background: #6c757d !important;
  margin-bottom: 20px;
}

.back-btn:hover {
  background: #5a6268 !important;
}

.section {
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 6px;
  border-left: 4px solid #dee2e6;
}

.section-1 { background: #f8f9fa; border-left-color: #6f42c1; }
.section-2 { background: #f8f9fa; border-left-color: #20c997; }
.section-3 { background: #f8f9fa; border-left-color: #fd7e14; }
.section-4 { background: #f8f9fa; border-left-color: #dc3545; }

.section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255,255,255,0.5);
}

.section h3 {
  color: #34495e;
  font-size: 1.3em;
  margin: 20px 0 10px 0;
}

.definition-box {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
  border-left: 4px solid #6c757d;
}

.definition-box strong {
  color: #2c3e50;
}

.visual-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.info-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.info-card:hover {
  border-color: #dee2e6;
}

.icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.senses-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin: 20px 0;
}

.sense-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.sense-card:hover {
  border-color: #dee2e6;
}

.classification-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.classification-table th {
  background: #6c757d;
  color: white;
  padding: 15px;
  text-align: left;
}

.classification-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ecf0f1;
}

.classification-table tr:hover {
  background: #f8f9fa;
}

.example-box {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
  border: 1px solid #ffeaa7;
  border-left: 4px solid #f39c12;
}

.tech-devices {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.device-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
  flex: 1;
  min-width: 150px;
  border: 1px solid #e9ecef;
}

.device-card:hover {
  border-color: #dee2e6;
}

@media (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  .header h1 {
    font-size: 2em;
  }

  .senses-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .nav-menu {
    flex-direction: column;
  }
}

.highlight {
  background: #e2f3ff;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 600;
  color: #0056b3;
}

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