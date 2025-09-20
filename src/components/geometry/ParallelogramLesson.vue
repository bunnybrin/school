<template>
  <div class="parallelogram-lesson">
    <div class="lesson-content">
      <!-- Визначення -->
      <section class="content-section">
        <h2>🔍 Визначення</h2>
        <div class="definition-box">
          <p><strong>Паралелограм</strong> — це чотирикутник, у якого кожні дві протилежні сторони паралельні.</p>
          <div class="parallelogram-visual">
            <canvas ref="definitionCanvas" width="300" height="200"></canvas>
          </div>
        </div>
      </section>

      <!-- Властивості -->
      <section class="content-section">
        <h2>⭐ Властивості паралелограма</h2>
        <div class="properties-grid">
          <div class="property-card" @click="highlightProperty('sides')">
            <h3>📏 Сторони</h3>
            <p>Протилежні сторони паралелограма рівні</p>
            <div class="formula">AB = CD, BC = AD</div>
          </div>

          <div class="property-card" @click="highlightProperty('angles')">
            <h3>📐 Кути</h3>
            <p>Протилежні кути паралелограма рівні</p>
            <div class="formula">∠A = ∠C, ∠B = ∠D</div>
            <div class="formula">∠A + ∠B = 180°</div>
          </div>

          <div class="property-card" @click="highlightProperty('diagonals')">
            <h3>📍 Діагоналі</h3>
            <p>Діагоналі точкою перетину діляться навпіл</p>
            <div class="formula">AO = OC, BO = OD</div>
          </div>
        </div>

        <div class="interactive-parallelogram">
          <canvas ref="propertiesCanvas" width="400" height="300"></canvas>
          <p class="hint">💡 Клікни на властивості вище, щоб побачити їх на малюнку!</p>
        </div>
      </section>

      <!-- Висота -->
      <section class="content-section">
        <h2>📏 Висота паралелограма</h2>
        <div class="height-explanation">
          <p><strong>Висота паралелограма</strong> — це перпендикуляр, опущений з будь-якої точки прямої, що містить одну сторону, на пряму, яка містить протилежну сторону.</p>
          <canvas ref="heightCanvas" width="350" height="250"></canvas>
        </div>
      </section>

      <!-- Ознаки -->
      <section class="content-section">
        <h2>✅ Ознаки паралелограма</h2>
        <p class="intro-text">Ознаки допомагають визначити, чи є чотирикутник паралелограмом:</p>

        <div class="signs-list">
          <div class="sign-item">
            <div class="sign-number">1️⃣</div>
            <div class="sign-content">
              <p>Якщо в чотирикутнику кожні дві протилежні сторони рівні</p>
            </div>
          </div>

          <div class="sign-item">
            <div class="sign-number">2️⃣</div>
            <div class="sign-content">
              <p>Якщо в чотирикутнику дві протилежні сторони рівні та паралельні</p>
            </div>
          </div>

          <div class="sign-item">
            <div class="sign-number">3️⃣</div>
            <div class="sign-content">
              <p>Якщо в чотирикутнику діагоналі точкою перетину діляться навпіл</p>
            </div>
          </div>

          <div class="sign-item">
            <div class="sign-number">4️⃣</div>
            <div class="sign-content">
              <p>Якщо в чотирикутнику кожні два протилежні кути рівні</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Види паралелограмів -->
      <section class="content-section">
        <h2>🔺 Види паралелограмів</h2>
        <div class="types-grid">
          <div class="type-card">
            <h3>⬜ Прямокутник</h3>
            <p>Паралелограм з прямими кутами</p>
            <canvas ref="rectangleCanvas" width="150" height="100"></canvas>
          </div>

          <div class="type-card">
            <h3>🔷 Ромб</h3>
            <p>Паралелограм з рівними сторонами</p>
            <canvas ref="rhombusCanvas" width="150" height="100"></canvas>
          </div>

          <div class="type-card">
            <h3>◾ Квадрат</h3>
            <p>Прямокутник з рівними сторонами</p>
            <canvas ref="squareCanvas" width="150" height="100"></canvas>
          </div>
        </div>
      </section>


      <!-- Підсумок -->
      <section class="content-section summary">
        <h2>📝 Підсумок</h2>
        <div class="summary-box">
          <p><strong>Запам'ятай:</strong></p>
          <ul>
            <li>🔸 Паралелограм — чотирикутник з паралельними протилежними сторонами</li>
            <li>🔸 Протилежні сторони та кути рівні</li>
            <li>🔸 Діагоналі діляться навпіл точкою перетину</li>
            <li>🔸 Прямокутник, ромб і квадрат — окремі види паралелограма</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const definitionCanvas = ref(null)
const propertiesCanvas = ref(null)
const heightCanvas = ref(null)
const rectangleCanvas = ref(null)
const rhombusCanvas = ref(null)
const squareCanvas = ref(null)

const currentHighlight = ref('')

function drawParallelogram(canvas, options = {}) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = options.strokeColor || '#2563eb'
  ctx.fillStyle = options.fillColor || 'rgba(37, 99, 235, 0.1)'
  ctx.lineWidth = 2

  const centerX = width / 2
  const centerY = height / 2
  const w = options.width || 80
  const h = options.height || 50
  const skew = options.skew || 20

  // Координати вершин
  const points = [
    [centerX - w/2 - skew/2, centerY - h/2], // A
    [centerX + w/2 - skew/2, centerY - h/2], // B
    [centerX + w/2 + skew/2, centerY + h/2], // C
    [centerX - w/2 + skew/2, centerY + h/2]  // D
  ]

  // Малюємо паралелограм
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1])
  }
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  // Підписи вершин
  ctx.fillStyle = '#1f2937'
  ctx.font = '14px Arial'
  ctx.fillText('A', points[0][0] - 15, points[0][1] - 5)
  ctx.fillText('B', points[1][0] + 5, points[1][1] - 5)
  ctx.fillText('C', points[2][0] + 5, points[2][1] + 15)
  ctx.fillText('D', points[3][0] - 15, points[3][1] + 15)

  return points
}

function drawParallelogramWithProperties(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const points = drawParallelogram(canvas, {
    width: 120,
    height: 80,
    skew: 30,
    strokeColor: '#2563eb',
    fillColor: 'rgba(37, 99, 235, 0.1)'
  })

  // Виділяємо властивості залежно від вибору
  if (currentHighlight.value === 'sides') {
    // Виділяємо протилежні сторони
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 4

    // AB та CD
    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])
    ctx.lineTo(points[1][0], points[1][1])
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(points[2][0], points[2][1])
    ctx.lineTo(points[3][0], points[3][1])
    ctx.stroke()

  } else if (currentHighlight.value === 'angles') {
    // Позначаємо кути
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 2

    // Малюємо дуги для кутів A та C
    drawAngleArc(ctx, points[0], points[3], points[1], 20)
    drawAngleArc(ctx, points[2], points[1], points[3], 20)

  } else if (currentHighlight.value === 'diagonals') {
    // Діагоналі
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 3

    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])
    ctx.lineTo(points[2][0], points[2][1])
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(points[1][0], points[1][1])
    ctx.lineTo(points[3][0], points[3][1])
    ctx.stroke()

    // Точка перетину
    const centerX = (points[0][0] + points[2][0]) / 2
    const centerY = (points[0][1] + points[2][1]) / 2

    ctx.fillStyle = '#dc2626'
    ctx.beginPath()
    ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = '#1f2937'
    ctx.font = '12px Arial'
    ctx.fillText('O', centerX + 8, centerY - 8)
  }
}

function drawAngleArc(ctx, vertex, side1, side2, radius) {
  const angle1 = Math.atan2(side1[1] - vertex[1], side1[0] - vertex[0])
  const angle2 = Math.atan2(side2[1] - vertex[1], side2[0] - vertex[0])

  ctx.beginPath()
  ctx.arc(vertex[0], vertex[1], radius, angle1, angle2)
  ctx.stroke()
}

function drawHeight(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const points = drawParallelogram(canvas, {
    width: 100,
    height: 60,
    skew: 25
  })

  // Висота
  ctx.strokeStyle = '#dc2626'
  ctx.lineWidth = 2
  ctx.setLineDash([5, 5])

  const heightX = points[0][0] + 30
  ctx.beginPath()
  ctx.moveTo(heightX, points[0][1])
  ctx.lineTo(heightX, points[3][1])
  ctx.stroke()

  // Позначка прямого кута
  ctx.setLineDash([])
  ctx.strokeRect(heightX - 8, points[3][1] - 8, 8, 8)

  // Підпис
  ctx.fillStyle = '#dc2626'
  ctx.font = '12px Arial'
  ctx.fillText('h', heightX + 5, (points[0][1] + points[3][1]) / 2)
}

function drawRectangle(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = '#059669'
  ctx.fillStyle = 'rgba(5, 150, 105, 0.1)'
  ctx.lineWidth = 2

  const centerX = width / 2
  const centerY = height / 2
  const w = 60
  const h = 40

  ctx.fillRect(centerX - w/2, centerY - h/2, w, h)
  ctx.strokeRect(centerX - w/2, centerY - h/2, w, h)

  // Позначки прямих кутів
  ctx.strokeStyle = '#059669'
  const corner = 8
  ctx.strokeRect(centerX - w/2, centerY - h/2, corner, corner)
  ctx.strokeRect(centerX + w/2 - corner, centerY - h/2, corner, corner)
  ctx.strokeRect(centerX + w/2 - corner, centerY + h/2 - corner, corner, corner)
  ctx.strokeRect(centerX - w/2, centerY + h/2 - corner, corner, corner)
}

function drawRhombus(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = '#7c3aed'
  ctx.fillStyle = 'rgba(124, 58, 237, 0.1)'
  ctx.lineWidth = 2

  const centerX = width / 2
  const centerY = height / 2
  const size = 35

  const points = [
    [centerX, centerY - size],
    [centerX + size, centerY],
    [centerX, centerY + size],
    [centerX - size, centerY]
  ]

  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1])
  }
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  // Позначки рівних сторін
  ctx.strokeStyle = '#7c3aed'
  ctx.lineWidth = 1
  for (let i = 0; i < 4; i++) {
    const x1 = points[i][0]
    const y1 = points[i][1]
    const x2 = points[(i + 1) % 4][0]
    const y2 = points[(i + 1) % 4][1]

    const midX = (x1 + x2) / 2
    const midY = (y1 + y2) / 2

    ctx.beginPath()
    ctx.arc(midX, midY, 2, 0, 2 * Math.PI)
    ctx.fill()
  }
}

function drawSquare(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = '#dc2626'
  ctx.fillStyle = 'rgba(220, 38, 38, 0.1)'
  ctx.lineWidth = 2

  const centerX = width / 2
  const centerY = height / 2
  const size = 50

  ctx.fillRect(centerX - size/2, centerY - size/2, size, size)
  ctx.strokeRect(centerX - size/2, centerY - size/2, size, size)

  // Позначки прямих кутів
  const corner = 8
  ctx.strokeRect(centerX - size/2, centerY - size/2, corner, corner)
  ctx.strokeRect(centerX + size/2 - corner, centerY - size/2, corner, corner)
  ctx.strokeRect(centerX + size/2 - corner, centerY + size/2 - corner, corner, corner)
  ctx.strokeRect(centerX - size/2, centerY + size/2 - corner, corner, corner)

  // Позначки рівних сторін
  ctx.strokeStyle = '#dc2626'
  ctx.lineWidth = 1
  const sides = [
    [[centerX - size/2, centerY - size/2], [centerX + size/2, centerY - size/2]],
    [[centerX + size/2, centerY - size/2], [centerX + size/2, centerY + size/2]],
    [[centerX + size/2, centerY + size/2], [centerX - size/2, centerY + size/2]],
    [[centerX - size/2, centerY + size/2], [centerX - size/2, centerY - size/2]]
  ]

  sides.forEach(side => {
    const midX = (side[0][0] + side[1][0]) / 2
    const midY = (side[0][1] + side[1][1]) / 2

    ctx.beginPath()
    ctx.arc(midX, midY, 2, 0, 2 * Math.PI)
    ctx.fill()
  })
}

function highlightProperty(property) {
  currentHighlight.value = property
  drawParallelogramWithProperties(propertiesCanvas.value)
}

onMounted(async () => {
  await nextTick()

  if (definitionCanvas.value) {
    drawParallelogram(definitionCanvas.value)
  }

  if (propertiesCanvas.value) {
    drawParallelogramWithProperties(propertiesCanvas.value)
  }

  if (heightCanvas.value) {
    drawHeight(heightCanvas.value)
  }

  if (rectangleCanvas.value) {
    drawRectangle(rectangleCanvas.value)
  }

  if (rhombusCanvas.value) {
    drawRhombus(rhombusCanvas.value)
  }

  if (squareCanvas.value) {
    drawSquare(squareCanvas.value)
  }
})
</script>

<style scoped>
.parallelogram-lesson {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
}

.lesson-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.lesson-header h1 {
  font-size: 3rem;
  color: #1e293b;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.lesson-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  margin: 0.5rem 0 0 0;
}

.lesson-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.content-section {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
}

.content-section h2 {
  color: #1e293b;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 0.5rem;
}

.definition-box {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #3b82f6;
}

.definition-box p {
  font-size: 1.1rem;
  margin: 0;
  color: #334155;
}

.parallelogram-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.property-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.property-card:hover {
  border-color: #3b82f6;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
}

.property-card h3 {
  color: #1e293b;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.property-card p {
  color: #475569;
  margin: 0 0 0.5rem 0;
}

.formula {
  background: #e0f2fe;
  padding: 0.5rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: #0369a1;
  margin: 0.25rem 0;
}

.interactive-parallelogram {
  text-align: center;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px dashed #cbd5e1;
}

.hint {
  color: #64748b;
  font-style: italic;
  margin: 1rem 0 0 0;
}

.height-explanation {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}

.height-explanation p {
  color: #334155;
  font-size: 1.1rem;
}

.signs-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sign-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #f8fafc;
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #10b981;
}

.sign-number {
  font-size: 1.5rem;
  min-width: 40px;
}

.sign-content p {
  margin: 0;
  color: #334155;
}

.intro-text {
  color: #475569;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.type-card {
  text-align: center;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.type-card:hover {
  border-color: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.type-card h3 {
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.type-card p {
  color: #64748b;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.application-box {
  background: #fffbeb;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #f59e0b;
}

.application-box p {
  color: #92400e;
  margin: 0 0 1rem 0;
  font-weight: 500;
}

.application-box ul {
  color: #78350f;
  margin: 0;
  padding-left: 1.5rem;
}

.application-box li {
  margin: 0.5rem 0;
}

.summary {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border: 2px solid #10b981;
}

.summary h2 {
  color: #047857;
  border-bottom-color: #10b981;
}

.summary-box {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #a7f3d0;
}

.summary-box p {
  color: #047857;
  font-weight: bold;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.summary-box ul {
  color: #065f46;
  margin: 0;
  padding-left: 1.5rem;
}

.summary-box li {
  margin: 0.5rem 0;
  font-weight: 500;
}

canvas {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
}

@media (max-width: 768px) {
  .parallelogram-lesson {
    padding: 1rem;
  }

  .lesson-header h1 {
    font-size: 2rem;
  }

  .definition-box,
  .height-explanation {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .properties-grid {
    grid-template-columns: 1fr;
  }

  .types-grid {
    grid-template-columns: 1fr;
  }
}
</style>