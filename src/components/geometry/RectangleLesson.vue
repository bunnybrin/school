<template>
  <div class="rectangle-lesson">
    <div class="lesson-content">
      <!-- Визначення -->
      <section class="content-section">
        <h2>🔍 Визначення</h2>
        <div class="definition-box">
          <p><strong>Прямокутник</strong> — це паралелограм, у якого всі кути прямі.</p>
          <div class="rectangle-visual">
            <canvas ref="definitionCanvas" width="300" height="200"></canvas>
          </div>
        </div>
      </section>

      <!-- Властивості -->
      <section class="content-section">
        <h2>⭐ Властивості прямокутника</h2>
        <p class="intro-text">Прямокутник має всі властивості паралелограма та свої особливі властивості:</p>

        <div class="properties-grid">
          <div class="property-card" @click="highlightProperty('sides')">
            <h3>📏 Сторони</h3>
            <p>Протилежні сторони прямокутника рівні</p>
            <div class="formula">AB = CD, BC = AD</div>
          </div>

          <div class="property-card" @click="highlightProperty('angles')">
            <h3>📐 Кути</h3>
            <p>Всі кути прямокутника прямі</p>
            <div class="formula">∠A = ∠B = ∠C = ∠D = 90°</div>
          </div>

          <div class="property-card" @click="highlightProperty('diagonals')">
            <h3>📍 Діагоналі</h3>
            <p>Діагоналі рівні та діляться навпіл точкою перетину</p>
            <div class="formula">AC = BD, AO = OC = BO = OD</div>
          </div>

          <div class="property-card" @click="highlightProperty('center')">
            <h3>⭕ Центр</h3>
            <p>Точка перетину діагоналей рівновіддалена від усіх вершин</p>
            <div class="formula">OA = OB = OC = OD</div>
          </div>
        </div>

        <div class="interactive-rectangle">
          <canvas ref="propertiesCanvas" width="400" height="300"></canvas>
          <p class="hint">💡 Клікни на властивості вище, щоб побачити їх на малюнку!</p>
        </div>
      </section>

      <!-- Ознаки -->
      <section class="content-section">
        <h2>✅ Ознаки прямокутника</h2>
        <p class="intro-text">Ознаки допомагають визначити, чи є паралелограм прямокутником:</p>

        <div class="signs-list">
          <div class="sign-item">
            <div class="sign-number">1️⃣</div>
            <div class="sign-content">
              <p><strong>Теорема 4.2:</strong> Якщо один із кутів паралелограма прямий, то цей паралелограм — прямокутник</p>
            </div>
          </div>

          <div class="sign-item">
            <div class="sign-number">2️⃣</div>
            <div class="sign-content">
              <p><strong>Теорема 4.3:</strong> Якщо діагоналі паралелограма рівні, то цей паралелограм — прямокутник</p>
            </div>
          </div>

          <div class="sign-item">
            <div class="sign-number">3️⃣</div>
            <div class="sign-content">
              <p>Якщо в чотирикутнику всі кути прямі, то цей чотирикутник — прямокутник</p>
            </div>
          </div>

          <div class="sign-item">
            <div class="sign-number">4️⃣</div>
            <div class="sign-content">
              <p>Якщо діагоналі паралелограма утворюють рівні кути з однією зі сторін, то цей паралелограм — прямокутник</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Зв'язок з іншими фігурами -->
      <section class="content-section">
        <h2>🔗 Зв'язок з іншими фігурами</h2>
        <div class="relationship-grid">
          <div class="relationship-card">
            <h3>🔷 Паралелограм</h3>
            <p>Прямокутник — це особливий випадок паралелограма</p>
            <canvas ref="parallelogramCanvas" width="150" height="100"></canvas>
            <div class="formula">Всі прямокутники є паралелограмами</div>
          </div>

          <div class="relationship-card highlight">
            <h3>⬜ Прямокутник</h3>
            <p>Паралелограм з усіма прямими кутами</p>
            <canvas ref="rectangleCanvas" width="150" height="100"></canvas>
            <div class="formula">∠ = 90°, діагоналі рівні</div>
          </div>

          <div class="relationship-card">
            <h3>◾ Квадрат</h3>
            <p>Прямокутник з усіма рівними сторонами</p>
            <canvas ref="squareCanvas" width="150" height="100"></canvas>
            <div class="formula">Всі квадрати є прямокутниками</div>
          </div>
        </div>

        <div class="special-property">
          <h3>🎯 Спеціальна властивість</h3>
          <p><strong>Якщо в прямокутник можна вписати коло, то цей прямокутник є квадратом.</strong></p>
          <canvas ref="inscribedCircleCanvas" width="300" height="200"></canvas>
        </div>
      </section>


      <!-- Підсумок -->
      <section class="content-section summary">
        <h2>📝 Підсумок</h2>
        <div class="summary-box">
          <p><strong>Запам'ятай:</strong></p>
          <ul>
            <li>🔸 Прямокутник — паралелограм з усіма прямими кутами</li>
            <li>🔸 Усі властивості паралелограма + діагоналі рівні</li>
            <li>🔸 Точка перетину діагоналей — центр прямокутника</li>
            <li>🔸 Квадрат — окремий випадок прямокутника</li>
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
const parallelogramCanvas = ref(null)
const rectangleCanvas = ref(null)
const squareCanvas = ref(null)
const inscribedCircleCanvas = ref(null)
const medianCanvas = ref(null)

const currentHighlight = ref('')

function drawRectangle(canvas, options = {}) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = options.strokeColor || '#2563eb'
  ctx.fillStyle = options.fillColor || 'rgba(37, 99, 235, 0.1)'
  ctx.lineWidth = 2

  const centerX = width / 2
  const centerY = height / 2
  const w = options.width || 100
  const h = options.height || 60

  // Координати вершин
  const points = [
    [centerX - w/2, centerY - h/2], // A
    [centerX + w/2, centerY - h/2], // B
    [centerX + w/2, centerY + h/2], // C
    [centerX - w/2, centerY + h/2]  // D
  ]

  // Малюємо прямокутник
  ctx.beginPath()
  ctx.rect(centerX - w/2, centerY - h/2, w, h)
  ctx.fill()
  ctx.stroke()

  // Підписи вершин
  if (!options.hideLabels) {
    ctx.fillStyle = '#1f2937'
    ctx.font = '14px Arial'
    ctx.fillText('A', points[0][0] - 15, points[0][1] - 5)
    ctx.fillText('B', points[1][0] + 5, points[1][1] - 5)
    ctx.fillText('C', points[2][0] + 5, points[2][1] + 15)
    ctx.fillText('D', points[3][0] - 15, points[3][1] + 15)
  }

  // Позначки прямих кутів
  if (options.showRightAngles) {
    ctx.strokeStyle = options.strokeColor || '#2563eb'
    const corner = 8
    ctx.strokeRect(points[0][0], points[0][1], corner, corner)
    ctx.strokeRect(points[1][0] - corner, points[1][1], corner, corner)
    ctx.strokeRect(points[2][0] - corner, points[2][1] - corner, corner, corner)
    ctx.strokeRect(points[3][0], points[3][1] - corner, corner, corner)
  }

  return points
}

function drawRectangleWithProperties(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const points = drawRectangle(canvas, {
    width: 140,
    height: 90,
    strokeColor: '#2563eb',
    fillColor: 'rgba(37, 99, 235, 0.1)',
    showRightAngles: true
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

    // BC та AD
    ctx.strokeStyle = '#16a34a'
    ctx.beginPath()
    ctx.moveTo(points[1][0], points[1][1])
    ctx.lineTo(points[2][0], points[2][1])
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(points[3][0], points[3][1])
    ctx.lineTo(points[0][0], points[0][1])
    ctx.stroke()

  } else if (currentHighlight.value === 'angles') {
    // Виділяємо всі прямі кути
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 3
    const corner = 12

    ctx.strokeRect(points[0][0], points[0][1], corner, corner)
    ctx.strokeRect(points[1][0] - corner, points[1][1], corner, corner)
    ctx.strokeRect(points[2][0] - corner, points[2][1] - corner, corner, corner)
    ctx.strokeRect(points[3][0], points[3][1] - corner, corner, corner)

    // Підписи кутів
    ctx.fillStyle = '#dc2626'
    ctx.font = '12px Arial'
    ctx.fillText('90°', points[0][0] + 15, points[0][1] + 15)
    ctx.fillText('90°', points[1][0] - 25, points[1][1] + 15)
    ctx.fillText('90°', points[2][0] - 25, points[2][1] - 5)
    ctx.fillText('90°', points[3][0] + 15, points[3][1] - 5)

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

    // Підписи довжин
    ctx.fillStyle = '#dc2626'
    ctx.fillText('AC = BD', centerX + 15, centerY + 15)

  } else if (currentHighlight.value === 'center') {
    // Центр та відстані до вершин
    const centerX = (points[0][0] + points[2][0]) / 2
    const centerY = (points[0][1] + points[2][1]) / 2

    // Діагоналі пунктиром
    ctx.strokeStyle = '#94a3b8'
    ctx.lineWidth = 1
    ctx.setLineDash([5, 5])

    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])
    ctx.lineTo(points[2][0], points[2][1])
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(points[1][0], points[1][1])
    ctx.lineTo(points[3][0], points[3][1])
    ctx.stroke()

    ctx.setLineDash([])

    // Відстані від центру до вершин
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 2

    points.forEach(point => {
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(point[0], point[1])
      ctx.stroke()
    })

    // Центр
    ctx.fillStyle = '#dc2626'
    ctx.beginPath()
    ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = '#1f2937'
    ctx.font = '12px Arial'
    ctx.fillText('O', centerX + 8, centerY - 8)
  }
}

function drawParallelogram(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = '#7c3aed'
  ctx.fillStyle = 'rgba(124, 58, 237, 0.1)'
  ctx.lineWidth = 2

  const centerX = width / 2
  const centerY = height / 2
  const w = 60
  const h = 40
  const skew = 15

  // Координати вершин паралелограма
  const points = [
    [centerX - w/2 - skew/2, centerY - h/2],
    [centerX + w/2 - skew/2, centerY - h/2],
    [centerX + w/2 + skew/2, centerY + h/2],
    [centerX - w/2 + skew/2, centerY + h/2]
  ]

  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1])
  }
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
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
  const markSize = 3

  // Верхня сторона
  ctx.beginPath()
  ctx.moveTo(centerX - markSize, centerY - size/2 - 5)
  ctx.lineTo(centerX + markSize, centerY - size/2 - 5)
  ctx.stroke()

  // Права сторона
  ctx.beginPath()
  ctx.moveTo(centerX + size/2 + 5, centerY - markSize)
  ctx.lineTo(centerX + size/2 + 5, centerY + markSize)
  ctx.stroke()

  // Нижня сторона
  ctx.beginPath()
  ctx.moveTo(centerX - markSize, centerY + size/2 + 5)
  ctx.lineTo(centerX + markSize, centerY + size/2 + 5)
  ctx.stroke()

  // Ліва сторона
  ctx.beginPath()
  ctx.moveTo(centerX - size/2 - 5, centerY - markSize)
  ctx.lineTo(centerX - size/2 - 5, centerY + markSize)
  ctx.stroke()
}

function drawInscribedCircle(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const centerX = width / 2
  const centerY = height / 2
  const size = 80

  // Квадрат
  ctx.strokeStyle = '#2563eb'
  ctx.fillStyle = 'rgba(37, 99, 235, 0.1)'
  ctx.lineWidth = 2
  ctx.fillRect(centerX - size/2, centerY - size/2, size, size)
  ctx.strokeRect(centerX - size/2, centerY - size/2, size, size)

  // Вписане коло
  ctx.strokeStyle = '#dc2626'
  ctx.fillStyle = 'rgba(220, 38, 38, 0.1)'
  ctx.beginPath()
  ctx.arc(centerX, centerY, size/2, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()

  // Підпис
  ctx.fillStyle = '#1f2937'
  ctx.font = '12px Arial'
  ctx.fillText('Коло можна вписати', centerX - 50, centerY + size/2 + 20)
  ctx.fillText('тільки в квадрат!', centerX - 40, centerY + size/2 + 35)
}

function drawMedian(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const centerX = width / 2
  const centerY = height / 2
  const w = 100
  const h = 70

  // Прямокутний трикутник
  const points = [
    [centerX - w/2, centerY + h/2], // A (прямий кут)
    [centerX + w/2, centerY + h/2], // B
    [centerX - w/2, centerY - h/2]  // C
  ]

  ctx.strokeStyle = '#2563eb'
  ctx.fillStyle = 'rgba(37, 99, 235, 0.1)'
  ctx.lineWidth = 2

  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  ctx.lineTo(points[1][0], points[1][1])
  ctx.lineTo(points[2][0], points[2][1])
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  // Позначка прямого кута
  const corner = 10
  ctx.strokeRect(points[0][0], points[0][1] - corner, corner, corner)

  // Медіана до гіпотенузи
  const midX = (points[1][0] + points[2][0]) / 2
  const midY = (points[1][1] + points[2][1]) / 2

  ctx.strokeStyle = '#dc2626'
  ctx.lineWidth = 3
  ctx.setLineDash([])
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  ctx.lineTo(midX, midY)
  ctx.stroke()

  // Позначки рівних відрізків гіпотенузи
  ctx.strokeStyle = '#16a34a'
  ctx.lineWidth = 2

  // Перша половина
  ctx.beginPath()
  ctx.arc((points[1][0] + midX) / 2, (points[1][1] + midY) / 2, 3, 0, 2 * Math.PI)
  ctx.fill()

  // Друга половина
  ctx.beginPath()
  ctx.arc((points[2][0] + midX) / 2, (points[2][1] + midY) / 2, 3, 0, 2 * Math.PI)
  ctx.fill()

  // Підписи
  ctx.fillStyle = '#1f2937'
  ctx.font = '12px Arial'
  ctx.fillText('A', points[0][0] - 15, points[0][1] + 15)
  ctx.fillText('B', points[1][0] + 5, points[1][1] + 15)
  ctx.fillText('C', points[2][0] - 15, points[2][1] - 5)
  ctx.fillText('M', midX + 5, midY - 5)

  ctx.fillStyle = '#dc2626'
  ctx.fillText('m', points[0][0] - 20, (points[0][1] + midY) / 2)
  ctx.fillText('c/2', midX + 10, midY + 15)
}

function highlightProperty(property) {
  currentHighlight.value = property
  drawRectangleWithProperties(propertiesCanvas.value)
}

onMounted(async () => {
  await nextTick()

  if (definitionCanvas.value) {
    drawRectangle(definitionCanvas.value, { showRightAngles: true })
  }

  if (propertiesCanvas.value) {
    drawRectangleWithProperties(propertiesCanvas.value)
  }

  if (parallelogramCanvas.value) {
    drawParallelogram(parallelogramCanvas.value)
  }

  if (rectangleCanvas.value) {
    drawRectangle(rectangleCanvas.value, {
      width: 60,
      height: 40,
      showRightAngles: true,
      hideLabels: true
    })
  }

  if (squareCanvas.value) {
    drawSquare(squareCanvas.value)
  }

  if (inscribedCircleCanvas.value) {
    drawInscribedCircle(inscribedCircleCanvas.value)
  }

  if (medianCanvas.value) {
    drawMedian(medianCanvas.value)
  }
})
</script>

<style scoped>
.rectangle-lesson {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
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

.rectangle-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-text {
  color: #475569;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
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

.interactive-rectangle {
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

.relationship-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.relationship-card {
  text-align: center;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.relationship-card.highlight {
  border-color: #3b82f6;
  background: #eff6ff;
  transform: scale(1.05);
}

.relationship-card:hover {
  border-color: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.relationship-card h3 {
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.relationship-card p {
  color: #64748b;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.special-property {
  background: #fffbeb;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #f59e0b;
  text-align: center;
}

.special-property h3 {
  color: #92400e;
  margin: 0 0 1rem 0;
}

.special-property p {
  color: #78350f;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.median-explanation {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}

.median-explanation p {
  color: #334155;
  font-size: 1.1rem;
  margin: 0 0 1rem 0;
}

.formula-box {
  background: #f0f9ff;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #0ea5e9;
}

.formula-box .formula {
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
}

.formula-box p {
  margin: 0;
  font-size: 0.9rem;
  color: #0369a1;
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
  .rectangle-lesson {
    padding: 1rem;
  }

  .definition-box,
  .median-explanation {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .properties-grid {
    grid-template-columns: 1fr;
  }

  .relationship-grid {
    grid-template-columns: 1fr;
  }
}
</style>