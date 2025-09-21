<template>
  <div class="lesson-container">
    <h1 class="lesson-title">
      🟩 Квадрат: визначення, властивості та ознаки
    </h1>

    <section class="definition-section">
      <h2>📖 Визначення квадрата</h2>
      <div class="definition-card">
        <p class="definition-text">
          <strong>Квадрат</strong> — це окремий вид паралелограма, який поєднує властивості прямокутника та ромба.
        </p>

        <div class="equivalent-definitions">
          <h3>🔄 Еквівалентні визначення:</h3>
          <div class="definition-item">
            <span class="emoji">📐</span>
            <span>Квадратом називають <strong>прямокутник</strong>, у якого всі сторони рівні</span>
          </div>
          <div class="definition-item">
            <span class="emoji">💎</span>
            <span>Квадрат — це <strong>ромб</strong>, у якого всі кути рівні (прямі)</span>
          </div>
          <div class="definition-item">
            <span class="emoji">🔗</span>
            <span>Чотирикутник, який одночасно є <strong>ромбом і прямокутником</strong>, є квадратом</span>
          </div>
        </div>
      </div>
    </section>

    <section class="visual-section">
      <h2>🎨 Інтерактивна візуалізація</h2>
      <div class="canvas-container">
        <canvas
          ref="squareCanvas"
          width="600"
          height="400"
          @click="handleCanvasClick"
          @mousemove="handleMouseMove"
        ></canvas>
        <div class="canvas-info" v-if="hoverInfo">
          {{ hoverInfo }}
        </div>
      </div>

      <div class="controls">
        <button @click="showAngles = !showAngles" :class="{ active: showAngles }">
          📐 Показати кути
        </button>
        <button @click="showDiagonals = !showDiagonals" :class="{ active: showDiagonals }">
          ↗️ Показати діагоналі
        </button>
        <button @click="showSides = !showSides" :class="{ active: showSides }">
          📏 Показати сторони
        </button>
      </div>
    </section>

    <section class="properties-section">
      <h2>⭐ Властивості квадрата</h2>
      <p class="intro-text">
        Оскільки квадрат є одночасно прямокутником і ромбом, він має властивості обох фігур:
      </p>

      <div class="properties-grid">
        <div class="property-card angles" @click="highlightProperty('angles')">
          <h3>📐 Кути</h3>
          <p>Усі кути квадрата прямі (90°)</p>
        </div>

        <div class="property-card sides" @click="highlightProperty('sides')">
          <h3>📏 Сторони</h3>
          <p>Усі сторони квадрата рівні</p>
        </div>

        <div class="property-card diagonals" @click="highlightProperty('diagonals')">
          <h3>↗️ Діагоналі</h3>
          <ul>
            <li>рівні (як у прямокутника)</li>
            <li>взаємно перпендикулярні (як у ромба)</li>
            <li>точкою перетину діляться навпіл</li>
            <li>є бісектрисами кутів квадрата</li>
          </ul>
        </div>

        <div class="property-card circles" @click="highlightProperty('circles')">
          <h3>⭕ Кола</h3>
          <p>Навколо будь-якого квадрата можна описати коло, і в будь-який квадрат можна вписати коло</p>
        </div>
      </div>
    </section>

    <section class="recognition-section">
      <h2>🔍 Ознаки квадрата</h2>
      <p class="intro-text">
        <strong>Ознаки</strong> — це умови, за яких чотирикутник є квадратом.
      </p>

      <div class="recognition-cards">
        <div class="recognition-card">
          <h3>📐 Для паралелограма:</h3>
          <p>Якщо діагоналі паралелограма рівні та перпендикулярні, то цей паралелограм є квадратом</p>
        </div>

        <div class="recognition-card">
          <h3>⬜ Для прямокутника:</h3>
          <ul>
            <li>Якщо дві сусідні сторони прямокутника рівні, то він є квадратом</li>
            <li>Якщо діагональ прямокутника ділить його кут навпіл, то він є квадратом</li>
            <li>Якщо в прямокутник можна вписати коло, то він є квадратом</li>
          </ul>
        </div>

        <div class="recognition-card">
          <h3>💎 Для ромба:</h3>
          <ul>
            <li>Якщо один із кутів ромба прямий, то цей ромб є квадратом</li>
            <li>Якщо діагоналі ромба рівні, то він є квадратом</li>
            <li>Якщо навколо ромба можна описати коло, то він є квадратом</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="quiz-section">
      <h2>🧩 Інтерактивні завдання</h2>
      <div class="quiz-container">
        <div class="quiz-question" v-for="(question, index) in quizQuestions" :key="index">
          <h3>{{ question.question }}</h3>
          <div class="quiz-options">
            <button
              v-for="(option, optIndex) in question.options"
              :key="optIndex"
              @click="selectAnswer(index, optIndex)"
              :class="{
                correct: question.answered && optIndex === question.correct,
                incorrect: question.answered && optIndex === question.selected && optIndex !== question.correct,
                selected: question.selected === optIndex
              }"
              :disabled="question.answered"
            >
              {{ option }}
            </button>
          </div>
          <div v-if="question.answered" class="explanation">
            <p><strong>Пояснення:</strong> {{ question.explanation }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const squareCanvas = ref(null)
const showAngles = ref(false)
const showDiagonals = ref(false)
const showSides = ref(false)
const hoverInfo = ref('')
const highlightedProperty = ref('')

const quizQuestions = ref([
  {
    question: "Яка основна відмінність квадрата від прямокутника?",
    options: [
      "У квадрата всі кути прямі",
      "У квадрата всі сторони рівні",
      "У квадрата діагоналі рівні",
      "У квадрата протилежні сторони паралельні"
    ],
    correct: 1,
    explanation: "Квадрат відрізняється від прямокутника тим, що всі його сторони рівні, тоді як у прямокутника рівні лише протилежні сторони.",
    answered: false,
    selected: null
  },
  {
    question: "Які властивості мають діагоналі квадрата?",
    options: [
      "Тільки рівні",
      "Тільки перпендикулярні",
      "Рівні та перпендикулярні",
      "Не мають особливих властивостей"
    ],
    correct: 2,
    explanation: "Діагоналі квадрата є одночасно рівними (як у прямокутника) та взаємно перпендикулярними (як у ромба).",
    answered: false,
    selected: null
  },
  {
    question: "За якою ознакою ромб стає квадратом?",
    options: [
      "Коли всі сторони рівні",
      "Коли діагоналі перпендикулярні",
      "Коли один з кутів прямий",
      "Коли діагоналі діляться навпіл"
    ],
    correct: 2,
    explanation: "Ромб стає квадратом, коли один з його кутів стає прямим. У такому випадку всі кути стануть прямими.",
    answered: false,
    selected: null
  }
])

let ctx = null
let square = null

onMounted(() => {
  nextTick(() => {
    if (squareCanvas.value) {
      ctx = squareCanvas.value.getContext('2d')
      initializeSquare()
      draw()
    }
  })
})

function initializeSquare() {
  const centerX = 300
  const centerY = 200
  const sideLength = 120

  square = {
    vertices: [
      { x: centerX - sideLength/2, y: centerY - sideLength/2 },
      { x: centerX + sideLength/2, y: centerY - sideLength/2 },
      { x: centerX + sideLength/2, y: centerY + sideLength/2 },
      { x: centerX - sideLength/2, y: centerY + sideLength/2 }
    ],
    center: { x: centerX, y: centerY },
    sideLength: sideLength
  }
}

function draw() {
  if (!ctx || !square) return

  ctx.clearRect(0, 0, 600, 400)

  // Draw square
  ctx.strokeStyle = highlightedProperty.value === 'sides' ? '#ff6b6b' : '#2c3e50'
  ctx.lineWidth = highlightedProperty.value === 'sides' ? 4 : 2
  ctx.beginPath()
  ctx.moveTo(square.vertices[0].x, square.vertices[0].y)
  for (let i = 1; i < square.vertices.length; i++) {
    ctx.lineTo(square.vertices[i].x, square.vertices[i].y)
  }
  ctx.closePath()
  ctx.stroke()

  // Fill square
  ctx.fillStyle = 'rgba(52, 152, 219, 0.2)'
  ctx.fill()

  // Draw vertices
  ctx.fillStyle = '#e74c3c'
  square.vertices.forEach(vertex => {
    ctx.beginPath()
    ctx.arc(vertex.x, vertex.y, 4, 0, 2 * Math.PI)
    ctx.fill()
  })

  // Draw angles if enabled
  if (showAngles.value || highlightedProperty.value === 'angles') {
    drawAngles()
  }

  // Draw diagonals if enabled
  if (showDiagonals.value || highlightedProperty.value === 'diagonals') {
    drawDiagonals()
  }

  // Draw side measurements if enabled
  if (showSides.value || highlightedProperty.value === 'sides') {
    drawSideMeasurements()
  }

  // Draw circles if highlighted
  if (highlightedProperty.value === 'circles') {
    drawCircles()
  }
}

function drawAngles() {
  ctx.strokeStyle = '#e74c3c'
  ctx.lineWidth = 2

  square.vertices.forEach((vertex, i) => {
    const prev = square.vertices[(i - 1 + 4) % 4]
    const next = square.vertices[(i + 1) % 4]

    const angle1 = Math.atan2(prev.y - vertex.y, prev.x - vertex.x)
    const angle2 = Math.atan2(next.y - vertex.y, next.x - vertex.x)

    ctx.beginPath()
    ctx.arc(vertex.x, vertex.y, 20, angle1, angle2)
    ctx.stroke()

    // Draw 90° text
    const textX = vertex.x + (i < 2 ? -25 : 25)
    const textY = vertex.y + (i % 3 === 0 ? -10 : 25)
    ctx.fillStyle = '#e74c3c'
    ctx.font = '12px Arial'
    ctx.fillText('90°', textX, textY)
  })
}

function drawDiagonals() {
  ctx.strokeStyle = '#9b59b6'
  ctx.lineWidth = 2
  ctx.setLineDash([5, 5])

  // Draw diagonals
  ctx.beginPath()
  ctx.moveTo(square.vertices[0].x, square.vertices[0].y)
  ctx.lineTo(square.vertices[2].x, square.vertices[2].y)
  ctx.moveTo(square.vertices[1].x, square.vertices[1].y)
  ctx.lineTo(square.vertices[3].x, square.vertices[3].y)
  ctx.stroke()

  ctx.setLineDash([])

  // Draw center point
  ctx.fillStyle = '#9b59b6'
  ctx.beginPath()
  ctx.arc(square.center.x, square.center.y, 3, 0, 2 * Math.PI)
  ctx.fill()

  // Draw perpendicular mark
  const markSize = 8
  ctx.strokeStyle = '#9b59b6'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(square.center.x - markSize, square.center.y - markSize)
  ctx.lineTo(square.center.x - markSize + 4, square.center.y - markSize)
  ctx.lineTo(square.center.x - markSize + 4, square.center.y - markSize + 4)
  ctx.stroke()
}

function drawSideMeasurements() {
  ctx.fillStyle = '#27ae60'
  ctx.font = '14px Arial'

  const sideLength = square.sideLength
  const measurements = [
    { x: square.center.x, y: square.vertices[0].y - 15, text: `${sideLength}` },
    { x: square.vertices[1].x + 15, y: square.center.y, text: `${sideLength}` },
    { x: square.center.x, y: square.vertices[2].y + 25, text: `${sideLength}` },
    { x: square.vertices[3].x - 25, y: square.center.y, text: `${sideLength}` }
  ]

  measurements.forEach(measurement => {
    ctx.fillText(measurement.text, measurement.x, measurement.y)
  })
}

function drawCircles() {
  // Circumscribed circle
  ctx.strokeStyle = '#f39c12'
  ctx.lineWidth = 2
  ctx.setLineDash([3, 3])
  const circumRadius = square.sideLength * Math.sqrt(2) / 2
  ctx.beginPath()
  ctx.arc(square.center.x, square.center.y, circumRadius, 0, 2 * Math.PI)
  ctx.stroke()

  // Inscribed circle
  ctx.strokeStyle = '#16a085'
  const inscribedRadius = square.sideLength / 2
  ctx.beginPath()
  ctx.arc(square.center.x, square.center.y, inscribedRadius, 0, 2 * Math.PI)
  ctx.stroke()

  ctx.setLineDash([])
}

function handleCanvasClick(event) {
  const rect = squareCanvas.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Check if clicked on vertex
  for (let vertex of square.vertices) {
    const distance = Math.sqrt((x - vertex.x) ** 2 + (y - vertex.y) ** 2)
    if (distance < 10) {
      hoverInfo.value = 'Вершина квадрата - тут кут 90°'
      return
    }
  }

  // Check if clicked on center
  const centerDistance = Math.sqrt((x - square.center.x) ** 2 + (y - square.center.y) ** 2)
  if (centerDistance < 10) {
    hoverInfo.value = 'Центр квадрата - точка перетину діагоналей'
    return
  }

  hoverInfo.value = ''
}

function handleMouseMove(event) {
  const rect = squareCanvas.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Check if hovering over different parts
  for (let vertex of square.vertices) {
    const distance = Math.sqrt((x - vertex.x) ** 2 + (y - vertex.y) ** 2)
    if (distance < 15) {
      hoverInfo.value = 'Вершина квадрата - кут 90°'
      return
    }
  }

  const centerDistance = Math.sqrt((x - square.center.x) ** 2 + (y - square.center.y) ** 2)
  if (centerDistance < 15) {
    hoverInfo.value = 'Центр квадрата - перетин діагоналей'
    return
  }

  hoverInfo.value = ''
}

function highlightProperty(property) {
  highlightedProperty.value = highlightedProperty.value === property ? '' : property
  draw()
}

function selectAnswer(questionIndex, optionIndex) {
  const question = quizQuestions.value[questionIndex]
  question.selected = optionIndex
  question.answered = true
}
</script>

<style scoped>
.lesson-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.lesson-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.definition-section, .properties-section, .recognition-section, .quiz-section, .visual-section {
  margin-bottom: 3rem;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.definition-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 1rem;
}

.definition-text {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.equivalent-definitions h3 {
  margin-bottom: 1rem;
  text-align: center;
}

.definition-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.definition-item .emoji {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.canvas-container {
  position: relative;
  text-align: center;
  margin: 2rem 0;
}

canvas {
  border: 2px solid #ecf0f1;
  border-radius: 10px;
  cursor: pointer;
  background: white;
}

.canvas-info {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  pointer-events: none;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.controls button {
  padding: 10px 20px;
  border: 2px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.controls button:hover {
  background: #3498db;
  color: white;
  transform: translateY(-2px);
}

.controls button.active {
  background: #3498db;
  color: white;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.property-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.property-card.angles {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.property-card.sides {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.property-card.diagonals {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.property-card.circles {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.property-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.property-card ul {
  list-style: none;
  padding: 0;
}

.property-card li {
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.property-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  font-weight: bold;
}

.recognition-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.recognition-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 5px solid #3498db;
}

.recognition-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.recognition-card ul {
  list-style: none;
  padding: 0;
}

.recognition-card li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: #34495e;
}

.recognition-card li::before {
  content: "👉";
  position: absolute;
  left: 0;
}

.intro-text {
  font-size: 1.1rem;
  color: #34495e;
  text-align: center;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.quiz-container {
  margin-top: 1.5rem;
}

.quiz-question {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
}

.quiz-question h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.quiz-options {
  display: grid;
  gap: 0.5rem;
}

.quiz-options button {
  padding: 12px 20px;
  border: 2px solid #ecf0f1;
  background: white;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.quiz-options button:hover:not(:disabled) {
  border-color: #3498db;
  background: #ebf3fd;
}

.quiz-options button.correct {
  background: #d4edda;
  border-color: #27ae60;
  color: #155724;
}

.quiz-options button.incorrect {
  background: #f8d7da;
  border-color: #e74c3c;
  color: #721c24;
}

.quiz-options button.selected:not(.correct):not(.incorrect) {
  background: #3498db;
  color: white;
}

.explanation {
  margin-top: 1rem;
  padding: 1rem;
  background: #e8f5e8;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.explanation p {
  margin: 0;
  color: #155724;
}

h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
}

@media (max-width: 768px) {
  .lesson-container {
    padding: 1rem;
  }

  .lesson-title {
    font-size: 2rem;
  }

  .properties-grid {
    grid-template-columns: 1fr;
  }

  .recognition-cards {
    grid-template-columns: 1fr;
  }

  canvas {
    max-width: 100%;
    height: auto;
  }

  .controls {
    flex-wrap: wrap;
  }

  .controls button {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
}
</style>