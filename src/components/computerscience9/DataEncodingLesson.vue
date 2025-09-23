<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>1️⃣ Кодування та декодування даних</h2>

      <div class="definition-box">
        <strong>Кодування даних</strong> – це процес перетворення інформації з одного формату в інший для зберігання, передачі або обробки комп'ютером.
      </div>

      <div class="definition-box">
        <strong>Декодування</strong> – це зворотний процес відновлення вихідної інформації з закодованого формату.
      </div>

      <div class="visual-grid">
        <div class="info-card">
          <span class="icon">📝</span>
          <h4>Текстові дані</h4>
          <p>Символи, слова, речення</p>
        </div>
        <div class="info-card">
          <span class="icon">🎨</span>
          <h4>Графічні дані</h4>
          <p>Зображення, кольори, пікселі</p>
        </div>
        <div class="info-card">
          <span class="icon">🎵</span>
          <h4>Мультимедійні дані</h4>
          <p>Аудіо, відео, анімація</p>
        </div>
      </div>

      <div class="example-box">
        <strong>💡 Приклад:</strong> Літера "А" може бути закодована як число 65 в ASCII або як послідовність бітів 01000001.
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>2️⃣ Кодування текстових даних</h2>

      <div class="definition-box">
        <strong>ASCII</strong> (American Standard Code for Information Interchange) – стандарт кодування символів, що використовує 7 біт для представлення 128 символів.
      </div>

      <div class="encoding-demo">
        <h3>🔤 Інтерактивна таблиця ASCII</h3>
        <div class="text-encoder">
          <div class="input-group">
            <label>Введіть текст:</label>
            <input
              v-model="inputText"
              type="text"
              placeholder="Наприклад: Hello"
              maxlength="20"
            />
          </div>

          <div class="encoding-results">
            <div class="result-box">
              <h4>ASCII коди:</h4>
              <div class="code-display">
                {{ getAsciiCodes(inputText) }}
              </div>
            </div>

            <div class="result-box">
              <h4>Бінарне представлення:</h4>
              <div class="binary-display">
                {{ getBinaryRepresentation(inputText) }}
              </div>
            </div>
          </div>
        </div>

        <div class="ascii-table">
          <h4>Основні ASCII символи:</h4>
          <div class="ascii-grid">
            <div
              v-for="code in asciiCodes"
              :key="code"
              class="ascii-cell"
              @click="addCharToInput(String.fromCharCode(code))"
              :title="`Код: ${code}, Символ: ${String.fromCharCode(code)}`"
            >
              <div class="ascii-char">{{ String.fromCharCode(code) }}</div>
              <div class="ascii-code">{{ code }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="unicode-section">
        <h3>🌍 Unicode</h3>
        <div class="definition-box">
          <strong>Unicode</strong> – універсальний стандарт кодування, що підтримує всі мови світу та використовує до 32 біт на символ.
        </div>

        <div class="unicode-examples">
          <div class="unicode-card" v-for="example in unicodeExamples" :key="example.char">
            <span class="unicode-char">{{ example.char }}</span>
            <div class="unicode-info">
              <div>Символ: {{ example.name }}</div>
              <div>Код: U+{{ example.code }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>3️⃣ Кодування кольорів</h2>

      <div class="color-models">
        <h3>🎨 RGB модель</h3>
        <div class="definition-box">
          <strong>RGB</strong> (Red, Green, Blue) – адитивна модель кольору, де кожен колір представлений трьома значеннями від 0 до 255.
        </div>

        <div class="rgb-demo">
          <div class="color-controls">
            <div class="slider-group">
              <label>🔴 Червоний (R):</label>
              <input
                type="range"
                min="0"
                max="255"
                v-model="rgbColor.r"
                class="color-slider red"
              />
              <span class="value">{{ rgbColor.r }}</span>
            </div>

            <div class="slider-group">
              <label>🟢 Зелений (G):</label>
              <input
                type="range"
                min="0"
                max="255"
                v-model="rgbColor.g"
                class="color-slider green"
              />
              <span class="value">{{ rgbColor.g }}</span>
            </div>

            <div class="slider-group">
              <label>🔵 Синій (B):</label>
              <input
                type="range"
                min="0"
                max="255"
                v-model="rgbColor.b"
                class="color-slider blue"
              />
              <span class="value">{{ rgbColor.b }}</span>
            </div>
          </div>

          <div class="color-preview">
            <div
              class="color-swatch"
              :style="{ backgroundColor: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})` }"
            ></div>
            <div class="color-codes">
              <div><strong>RGB:</strong> {{ rgbColor.r }}, {{ rgbColor.g }}, {{ rgbColor.b }}</div>
              <div><strong>HEX:</strong> {{ getRgbHex() }}</div>
              <div><strong>Бінарно:</strong> {{ getRgbBinary() }}</div>
            </div>
          </div>
        </div>

        <h3>🖨️ CMYK модель</h3>
        <div class="definition-box">
          <strong>CMYK</strong> (Cyan, Magenta, Yellow, Key/Black) – субтрактивна модель для друку, де кожен компонент виражений у відсотках.
        </div>

        <div class="cmyk-demo">
          <div class="preset-colors">
            <div
              v-for="preset in colorPresets"
              :key="preset.name"
              class="preset-card"
              @click="applyCmykPreset(preset)"
            >
              <div
                class="preset-swatch"
                :style="{ backgroundColor: preset.hex }"
              ></div>
              <div class="preset-info">
                <div><strong>{{ preset.name }}</strong></div>
                <div>C:{{ preset.cmyk.c }}% M:{{ preset.cmyk.m }}% Y:{{ preset.cmyk.y }}% K:{{ preset.cmyk.k }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>4️⃣ Кодування файлів</h2>

      <div class="definition-box">
        Будь-який файл в комп'ютері представлений як послідовність байтів (групи з 8 бітів). Кожен байт може мати значення від 0 до 255.
      </div>

      <div class="file-upload-demo">
        <h3>📂 Завантажте файл для аналізу</h3>

        <div
          class="upload-zone"
          @drop="handleFileDrop"
          @dragover.prevent
          @dragenter.prevent
          :class="{ 'drag-over': isDragOver }"
          @dragenter="isDragOver = true"
          @dragleave="isDragOver = false"
        >
          <input
            type="file"
            ref="fileInput"
            @change="handleFileSelect"
            accept=".txt,.jpg,.png,.gif,.mp3,.pdf,.doc,.docx"
            style="display: none;"
          />
          <button @click="$refs.fileInput?.click()" class="upload-btn">
            📁 Оберіть файл
          </button>
          <p>або перетягніть файл сюди</p>
          <small>Підтримуються: текст, зображення, аудіо (до 1МБ)</small>

          <div v-if="uploadStatus" class="upload-status" :class="uploadStatus.type">
            {{ uploadStatus.message }}
          </div>
        </div>

        <div v-if="fileData" class="file-analysis">
          <div class="file-info">
            <h4>📄 Інформація про файл:</h4>
            <div><strong>Назва:</strong> {{ fileData.name }}</div>
            <div><strong>Розмір:</strong> {{ fileData.size }} байт</div>
            <div><strong>Тип:</strong> {{ fileData.type || 'Невідомий' }}</div>
          </div>

          <div class="binary-visualization">
            <h4>🔢 Перші 64 байти у різних форматах:</h4>

            <div class="format-tabs">
              <button
                v-for="format in binaryFormats"
                :key="format"
                @click="selectedFormat = format"
                :class="['format-btn', { active: selectedFormat === format }]"
              >
                {{ format }}
              </button>
            </div>

            <div class="binary-display">
              <div class="binary-content">
                {{ getFormattedBinary() }}
              </div>
            </div>
          </div>

          <div v-if="fileData.type?.startsWith('text/')" class="text-preview">
            <h4>📝 Попередній перегляд тексту:</h4>
            <div class="text-content">{{ textContent }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5">
      <h2>5️⃣ Практичні вправи</h2>

      <div class="decoder-tool">
        <h3>🔓 Інструмент декодування</h3>

        <div class="decoder-modes">
          <button
            v-for="mode in decoderModes"
            :key="mode.id"
            @click="decoderMode = mode.id"
            :class="['mode-btn', { active: decoderMode === mode.id }]"
          >
            {{ mode.name }}
          </button>
        </div>

        <div class="decoder-interface">
          <div class="input-section">
            <label>{{ getCurrentModeLabel() }}:</label>
            <textarea
              v-model="decodeInput"
              :placeholder="getCurrentModePlaceholder()"
              rows="4"
            ></textarea>
            <button @click="performDecode" class="decode-btn">🔍 Декодувати</button>
          </div>

          <div v-if="decodeResult" class="result-section">
            <h4>Результат:</h4>
            <div class="decode-output">{{ decodeResult }}</div>
          </div>
        </div>
      </div>

      <div class="practice-exercises">
        <h3>🎯 Завдання для практики</h3>

        <div class="exercise-list">
          <div v-for="(exercise, index) in practiceExercises" :key="index" class="exercise-card">
            <div class="exercise-question">
              <strong>Завдання {{ index + 1 }}:</strong> {{ exercise.question }}
            </div>
            <div class="exercise-hint">
              <small>💡 Підказка: {{ exercise.hint }}</small>
            </div>
            <div class="exercise-answer">
              <input
                v-model="exercise.userAnswer"
                type="text"
                :placeholder="exercise.placeholder"
              />
              <button @click="checkAnswer(index)" class="check-btn">
                ✓ Перевірити
              </button>
            </div>
            <div v-if="exercise.feedback" :class="['feedback', exercise.isCorrect ? 'correct' : 'incorrect']">
              {{ exercise.feedback }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Розуміння принципів кодування та декодування даних – це основа для роботи з цифровими технологіями та комп'ютерними науками.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Reactive data
const inputText = ref('Hello')
const rgbColor = ref({ r: 255, g: 0, b: 0 })
const fileData = ref(null)
const textContent = ref('')
const selectedFormat = ref('HEX')
const decoderMode = ref('ascii')
const decodeInput = ref('')
const decodeResult = ref('')
const isDragOver = ref(false)
const uploadStatus = ref(null)

// ASCII codes for display (printable characters)
const asciiCodes = Array.from({ length: 95 }, (_, i) => i + 32)

// Unicode examples
const unicodeExamples = ref([
  { char: 'А', name: 'Кирилиця А', code: '0410' },
  { char: 'ñ', name: 'Латиниця з тільдою', code: '00F1' },
  { char: '中', name: 'Китайський ієрогліф', code: '4E2D' },
  { char: '🌟', name: 'Зірка емодзі', code: '1F31F' },
  { char: '€', name: 'Знак євро', code: '20AC' },
])

// Color presets for CMYK
const colorPresets = ref([
  { name: 'Червоний', cmyk: { c: 0, m: 100, y: 100, k: 0 }, hex: '#FF0000' },
  { name: 'Синій', cmyk: { c: 100, m: 100, y: 0, k: 0 }, hex: '#0000FF' },
  { name: 'Жовтий', cmyk: { c: 0, m: 0, y: 100, k: 0 }, hex: '#FFFF00' },
  { name: 'Зелений', cmyk: { c: 100, m: 0, y: 100, k: 0 }, hex: '#00FF00' },
  { name: 'Чорний', cmyk: { c: 0, m: 0, y: 0, k: 100 }, hex: '#000000' },
])

// Binary formats
const binaryFormats = ['HEX', 'Десяткова', 'Двійкова']

// Decoder modes
const decoderModes = [
  { id: 'ascii', name: 'ASCII → Текст' },
  { id: 'binary', name: 'Двійкова → Текст' },
  { id: 'hex', name: 'HEX → Текст' },
]

// Practice exercises
const practiceExercises = ref([
  {
    question: 'Який ASCII код має символ "A"?',
    hint: 'Перевірте в таблиці ASCII вище',
    placeholder: 'Введіть число',
    answer: '65',
    userAnswer: '',
    feedback: '',
    isCorrect: false
  },
  {
    question: 'Перетворіть число 72 в ASCII символ',
    hint: 'Використайте таблицю ASCII',
    placeholder: 'Введіть символ',
    answer: 'H',
    userAnswer: '',
    feedback: '',
    isCorrect: false
  },
  {
    question: 'Яке HEX значення має білий колір в RGB?',
    hint: 'Білий = максимальні значення R, G, B',
    placeholder: 'Введіть HEX код',
    answer: '#FFFFFF',
    userAnswer: '',
    feedback: '',
    isCorrect: false
  }
])

// Methods
const getAsciiCodes = (text) => {
  return text.split('').map(char => char.charCodeAt(0)).join(', ')
}

const getBinaryRepresentation = (text) => {
  return text.split('').map(char =>
    char.charCodeAt(0).toString(2).padStart(8, '0')
  ).join(' ')
}

const addCharToInput = (char) => {
  if (inputText.value.length < 20) {
    inputText.value += char
  }
}

const getRgbHex = () => {
  const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase()
  return `#${toHex(rgbColor.value.r)}${toHex(rgbColor.value.g)}${toHex(rgbColor.value.b)}`
}

const getRgbBinary = () => {
  const toBinary = (n) => n.toString(2).padStart(8, '0')
  return `${toBinary(rgbColor.value.r)} ${toBinary(rgbColor.value.g)} ${toBinary(rgbColor.value.b)}`
}

const applyCmykPreset = (preset) => {
  // Convert hex to RGB for display
  const hex = preset.hex.substring(1)
  rgbColor.value = {
    r: parseInt(hex.substr(0, 2), 16),
    g: parseInt(hex.substr(2, 2), 16),
    b: parseInt(hex.substr(4, 2), 16)
  }
}

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    processFile(file)
  }
}

const handleFileDrop = (event) => {
  event.preventDefault()
  isDragOver.value = false
  const file = event.dataTransfer.files[0]
  if (file) {
    processFile(file)
  }
}

const processFile = (file) => {
  // Reset previous data
  fileData.value = null
  textContent.value = ''
  uploadStatus.value = null

  // Check file size
  if (file.size > 1048576) { // 1MB limit
    uploadStatus.value = {
      type: 'error',
      message: `Файл занадто великий: ${(file.size / 1048576).toFixed(1)}МБ. Максимум: 1МБ`
    }
    return
  }

  uploadStatus.value = {
    type: 'loading',
    message: 'Завантажую файл...'
  }

  // Set basic file info immediately
  fileData.value = {
    name: file.name,
    size: file.size,
    type: file.type || 'Невідомий',
    bytes: []
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const arrayBuffer = e.target.result
      const bytes = new Uint8Array(arrayBuffer)
      fileData.value.bytes = Array.from(bytes.slice(0, 64)) // First 64 bytes

      uploadStatus.value = {
        type: 'success',
        message: 'Файл успішно завантажено!'
      }

      // Clear status after 3 seconds
      setTimeout(() => {
        uploadStatus.value = null
      }, 3000)

      // If text file, show preview
      if (file.type?.startsWith('text/') || file.name.endsWith('.txt')) {
        const textReader = new FileReader()
        textReader.onload = (e) => {
          const content = e.target.result
          textContent.value = content.length > 200 ? content.substring(0, 200) + '...' : content
        }
        textReader.readAsText(file)
      }
    } catch (error) {
      console.error('Error processing file:', error)
      uploadStatus.value = {
        type: 'error',
        message: 'Помилка при обробці файлу'
      }
    }
  }

  reader.onerror = () => {
    uploadStatus.value = {
      type: 'error',
      message: 'Помилка при читанні файлу'
    }
  }

  reader.readAsArrayBuffer(file)
}

const getFormattedBinary = () => {
  if (!fileData.value?.bytes) return ''

  switch (selectedFormat.value) {
    case 'HEX':
      return fileData.value.bytes.map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' ')
    case 'Десяткова':
      return fileData.value.bytes.join(', ')
    case 'Двійкова':
      return fileData.value.bytes.map(b => b.toString(2).padStart(8, '0')).join(' ')
    default:
      return ''
  }
}

const getCurrentModeLabel = () => {
  const mode = decoderModes.find(m => m.id === decoderMode.value)
  return `Введіть ${mode.name.split(' → ')[0]} код`
}

const getCurrentModePlaceholder = () => {
  switch (decoderMode.value) {
    case 'ascii': return '72 101 108 108 111'
    case 'binary': return '01001000 01100101 01101100 01101100 01101111'
    case 'hex': return '48 65 6C 6C 6F'
    default: return ''
  }
}

const performDecode = () => {
  try {
    let result = ''
    const input = decodeInput.value.trim()

    switch (decoderMode.value) {
      case 'ascii':
        result = input.split(/\s+/).map(code => String.fromCharCode(parseInt(code))).join('')
        break
      case 'binary':
        result = input.split(/\s+/).map(bin => String.fromCharCode(parseInt(bin, 2))).join('')
        break
      case 'hex':
        result = input.split(/\s+/).map(hex => String.fromCharCode(parseInt(hex, 16))).join('')
        break
    }

    decodeResult.value = result || 'Помилка декодування'
  } catch (error) {
    decodeResult.value = 'Помилка: неправильний формат даних'
  }
}

const checkAnswer = (index) => {
  const exercise = practiceExercises.value[index]
  const userAnswer = exercise.userAnswer.trim().toUpperCase()
  const correctAnswer = exercise.answer.toUpperCase()

  exercise.isCorrect = userAnswer === correctAnswer
  exercise.feedback = exercise.isCorrect
    ? '✅ Правильно!'
    : `❌ Неправильно. Правильна відповідь: ${exercise.answer}`
}
</script>

<style scoped>
.section {
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 6px;
  border-left: 4px solid #dee2e6;
}

.section-1 {
  background: #f8f9fa;
  border-left-color: #6f42c1;
}

.section-2 {
  background: #f8f9fa;
  border-left-color: #20c997;
}

.section-3 {
  background: #f8f9fa;
  border-left-color: #fd7e14;
}

.section-4 {
  background: #f8f9fa;
  border-left-color: #dc3545;
}

.section-5 {
  background: #f8f9fa;
  border-left-color: #0d6efd;
}

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
  transition: transform 0.2s ease;
}

.info-card:hover {
  transform: translateY(-2px);
  border-color: #dee2e6;
}

.icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.example-box {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
  border: 1px solid #ffeaa7;
  border-left: 4px solid #f39c12;
}

/* Text encoding styles */
.encoding-demo {
  background: white;
  padding: 25px;
  border-radius: 8px;
  margin: 20px 0;
}

.text-encoder {
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #495057;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.2s ease;
}

.input-group input:focus {
  outline: none;
  border-color: #007bff;
}

.encoding-results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.result-box {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.result-box h4 {
  margin: 0 0 10px 0;
  color: #495057;
}

.code-display, .binary-display {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  min-height: 20px;
}

.ascii-table {
  margin-top: 30px;
}

.ascii-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 8px;
  margin-top: 15px;
}

.ascii-cell {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ascii-cell:hover {
  background: #e3f2fd;
  border-color: #2196f3;
  transform: scale(1.05);
}

.ascii-char {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
}

.ascii-code {
  font-size: 12px;
  color: #6c757d;
}

.unicode-section {
  margin-top: 30px;
}

.unicode-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.unicode-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 15px;
}

.unicode-char {
  font-size: 24px;
  min-width: 40px;
  text-align: center;
}

.unicode-info {
  font-size: 14px;
  color: #495057;
}

/* Color encoding styles */
.color-models {
  background: white;
  padding: 25px;
  border-radius: 8px;
}

.rgb-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
}

.slider-group {
  margin-bottom: 20px;
}

.slider-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.color-slider {
  width: calc(100% - 60px);
  margin-right: 10px;
}

.value {
  display: inline-block;
  width: 40px;
  text-align: center;
  font-weight: bold;
}

.color-preview {
  text-align: center;
}

.color-swatch {
  width: 150px;
  height: 150px;
  border-radius: 8px;
  margin: 0 auto 20px;
  border: 2px solid #dee2e6;
}

.color-codes {
  text-align: left;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
}

.color-codes div {
  margin-bottom: 5px;
}

.cmyk-demo {
  margin-top: 20px;
}

.preset-colors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.preset-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 15px;
}

.preset-card:hover {
  border-color: #007bff;
  transform: translateY(-2px);
}

.preset-swatch {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #dee2e6;
}

.preset-info {
  font-size: 14px;
}

/* File upload styles */
.file-upload-demo {
  background: white;
  padding: 25px;
  border-radius: 8px;
}

.upload-zone {
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  margin: 20px 0;
  transition: border-color 0.2s ease;
}

.upload-zone:hover {
  border-color: #007bff;
}

.upload-zone.drag-over {
  border-color: #28a745;
  background-color: #f8fff9;
}

.upload-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
}

.upload-btn:hover {
  background: #0056b3;
}

.upload-status {
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 6px;
  font-weight: 600;
  text-align: center;
}

.upload-status.loading {
  background: #e3f2fd;
  color: #1976d2;
  border: 1px solid #bbdefb;
}

.upload-status.success {
  background: #e8f5e8;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.upload-status.error {
  background: #ffebee;
  color: #c62828;
  border: 1px solid #ffcdd2;
}

.file-analysis {
  margin-top: 30px;
}

.file-info {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
}

.file-info div {
  margin-bottom: 5px;
}

.format-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.format-btn {
  background: #e9ecef;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.format-btn.active {
  background: #007bff;
  color: white;
}

.binary-display {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 20px;
}

.binary-content {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  word-break: break-all;
}

.text-preview .text-content {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  font-family: monospace;
  max-height: 150px;
  overflow-y: auto;
}

/* Decoder styles */
.decoder-tool {
  background: white;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.decoder-modes {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.mode-btn {
  background: #e9ecef;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mode-btn.active {
  background: #007bff;
  color: white;
}

.decoder-interface {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.input-section label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.input-section textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  resize: vertical;
  margin-bottom: 15px;
}

.decode-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.decode-btn:hover {
  background: #218838;
}

.result-section {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.decode-output {
  background: white;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  font-family: monospace;
  min-height: 60px;
}

/* Practice exercises */
.practice-exercises {
  background: white;
  padding: 25px;
  border-radius: 8px;
}

.exercise-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.exercise-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.exercise-question {
  margin-bottom: 10px;
  font-size: 16px;
}

.exercise-hint {
  margin-bottom: 15px;
  color: #6c757d;
}

.exercise-answer {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

.exercise-answer input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e9ecef;
  border-radius: 4px;
}

.check-btn {
  background: #17a2b8;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.check-btn:hover {
  background: #138496;
}

.feedback {
  padding: 10px;
  border-radius: 4px;
  font-weight: 600;
}

.feedback.correct {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.feedback.incorrect {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.conclusion {
  text-align: center;
  margin: 40px 0;
  padding: 20px;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  color: white;
}

.conclusion p {
  font-size: 1.1em;
}

@media (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  .encoding-results,
  .rgb-demo,
  .decoder-interface {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .exercise-answer {
    flex-direction: column;
    align-items: stretch;
  }

  .decoder-modes,
  .format-tabs {
    flex-direction: column;
  }
}
</style>