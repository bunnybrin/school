<template>
  <div class="square-lesson">
    <div class="lesson-content">
      <!-- Визначення -->
      <section class="content-section">
        <h2>🔍 Визначення квадрата</h2>
        <div class="definitions-container">
          <div class="definition-box">
            <p><strong>Квадрат</strong> — це прямокутник, у якого всі сторони рівні.</p>
            <canvas ref="definition1Canvas" width="200" height="150"></canvas>
          </div>

          <div class="definition-box">
            <p><strong>Квадрат</strong> — це ромб, у якого всі кути прямі.</p>
            <canvas ref="definition2Canvas" width="200" height="150"></canvas>
          </div>

          <div class="definition-box special">
            <p><strong>Квадрат</strong> — це чотирикутник, який одночасно є і ромбом, і прямокутником.</p>
            <canvas ref="definition3Canvas" width="200" height="150"></canvas>
          </div>
        </div>
      </section>

      <!-- Властивості -->
      <section class="content-section">
        <h2>⭐ Властивості квадрата</h2>
        <p class="intro-text">Оскільки квадрат є одночасно і прямокутником, і ромбом, він має всі властивості цих фігур:</p>

        <div class="properties-grid">
          <div class="property-card" @click="highlightProperty('angles')">
            <h3>📐 Кути</h3>
            <p>Усі кути квадрата прямі</p>
            <div class="formula">∠A = ∠B = ∠C = ∠D = 90°</div>
          </div>

          <div class="property-card" @click="highlightProperty('sides')">
            <h3>📏 Сторони</h3>
            <p>Усі сторони квадрата рівні</p>
            <div class="formula">AB = BC = CD = DA</div>
          </div>

          <div class="property-card" @click="highlightProperty('diagonals')">
            <h3>📍 Діагоналі</h3>
            <p>Діагоналі рівні, перпендикулярні, діляться навпіл та є бісектрисами кутів</p>
            <div class="formula">AC = BD, AC ⟂ BD</div>
          </div>

          <div class="property-card" @click="highlightProperty('circles')">
            <h3>⭕ Кола</h3>
            <p>Навколо квадрата можна описати коло і в квадрат можна вписати коло</p>
          </div>
        </div>

        <div class="interactive-square">
          <canvas ref="propertiesCanvas" width="400" height="400"></canvas>
          <p class="hint">💡 Клікни на властивості вище, щоб побачити їх на малюнку!</p>
        </div>
      </section>

      <!-- Ознаки квадрата -->
      <section class="content-section">
        <h2>✅ Ознаки квадрата</h2>
        <p class="intro-text">Ознаки допомагають визначити, чи є чотирикутник квадратом:</p>

        <div class="signs-container">
          <div class="signs-category">
            <h3>🔷 Ознаки для паралелограма</h3>
            <div class="sign-item">
              <div class="sign-number">1️⃣</div>
              <div class="sign-content">
                <p>Якщо діагоналі паралелограма рівні та перпендикулярні, то цей паралелограм є квадратом</p>
              </div>
            </div>
          </div>

          <div class="signs-category">
            <h3>⬜ Ознаки для прямокутника</h3>
            <div class="sign-item">
              <div class="sign-number">2️⃣</div>
              <div class="sign-content">
                <p>Якщо дві сусідні сторони прямокутника рівні, то цей прямокутник є квадратом</p>
              </div>
            </div>
            <div class="sign-item">
              <div class="sign-number">3️⃣</div>
              <div class="sign-content">
                <p>Якщо діагональ прямокутника ділить його кут навпіл, то цей прямокутник є квадратом</p>
              </div>
            </div>
            <div class="sign-item">
              <div class="sign-number">4️⃣</div>
              <div class="sign-content">
                <p>Якщо в прямокутник можна вписати коло, то він є квадратом</p>
              </div>
            </div>
          </div>

          <div class="signs-category">
            <h3>🔶 Ознаки для ромба</h3>
            <div class="sign-item">
              <div class="sign-number">5️⃣</div>
              <div class="sign-content">
                <p>Якщо один із кутів ромба прямий, то цей ромб є квадратом</p>
              </div>
            </div>
            <div class="sign-item">
              <div class="sign-number">6️⃣</div>
              <div class="sign-content">
                <p>Якщо діагоналі ромба рівні, то він є квадратом</p>
              </div>
            </div>
            <div class="sign-item">
              <div class="sign-number">7️⃣</div>
              <div class="sign-content">
                <p>Якщо навколо ромба можна описати коло, то він є квадратом</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Вписане та описане кола -->
      <section class="content-section">
        <h2>⭕ Вписане та описане кола</h2>
        <div class="circles-explanation">
          <div class="circle-demo">
            <h3>Описане коло</h3>
            <p>Коло, що проходить через всі вершини квадрата</p>
            <canvas ref="circumscribedCanvas" width="200" height="200"></canvas>
            <div class="formula">R = a√2/2</div>
          </div>

          <div class="circle-demo">
            <h3>Вписане коло</h3>
            <p>Коло, що дотикається до всіх сторін квадрата</p>
            <canvas ref="inscribedCanvas" width="200" height="200"></canvas>
            <div class="formula">r = a/2</div>
          </div>
        </div>
      </section>

      <!-- Підсумок -->
      <section class="content-section summary">
        <h2>📝 Підсумок</h2>
        <div class="summary-box">
          <p><strong>Запам'ятай:</strong></p>
          <ul>
            <li>🔸 Квадрат поєднує властивості прямокутника та ромба</li>
            <li>🔸 Усі сторони рівні, усі кути прямі</li>
            <li>🔸 Діагоналі рівні, перпендикулярні та є бісектрисами кутів</li>
            <li>🔸 Навколо квадрата можна описати коло і в квадрат можна вписати коло</li>
            <li>🔸 Існує 7 основних ознак для розпізнавання квадрата</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const definition1Canvas = ref(null)
const definition2Canvas = ref(null)
const definition3Canvas = ref(null)
const propertiesCanvas = ref(null)
const circumscribedCanvas = ref(null)
const inscribedCanvas = ref(null)

const currentHighlight = ref('')

function drawSquare(canvas, options = {}) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = options.strokeColor || '#059669'
  ctx.fillStyle = options.fillColor || 'rgba(5, 150, 105, 0.1)'
  ctx.lineWidth = options.lineWidth || 2

  const centerX = width / 2
  const centerY = height / 2
  const size = options.size || 60

  const points = [
    [centerX - size/2, centerY - size/2], // A
    [centerX + size/2, centerY - size/2], // B
    [centerX + size/2, centerY + size/2], // C
    [centerX - size/2, centerY + size/2]  // D
  ]

  // Малюємо квадрат
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1])
  }
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  if (options.showLabels !== false) {
    // Підписи вершин
    ctx.fillStyle = '#1f2937'
    ctx.font = '14px Arial'
    ctx.fillText('A', points[0][0] - 15, points[0][1] - 5)
    ctx.fillText('B', points[1][0] + 5, points[1][1] - 5)
    ctx.fillText('C', points[2][0] + 5, points[2][1] + 15)
    ctx.fillText('D', points[3][0] - 15, points[3][1] + 15)
  }

  return points
}

function drawRectangleToSquare(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const centerX = width / 2
  const centerY = height / 2

  // Спочатку прямокутник
  ctx.strokeStyle = '#6b7280'
  ctx.fillStyle = 'rgba(107, 114, 128, 0.1)'
  ctx.lineWidth = 1
  ctx.setLineDash([5, 5])
  ctx.fillRect(centerX - 50, centerY - 30, 100, 60)
  ctx.strokeRect(centerX - 50, centerY - 30, 100, 60)

  // Потім квадрат
  ctx.setLineDash([])
  drawSquare(canvas, { size: 60, strokeColor: '#059669' })

  // Стрілка
  ctx.strokeStyle = '#059669'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(centerX + 55, centerY)
  ctx.lineTo(centerX + 70, centerY)
  ctx.stroke()

  // Головка стрілки
  ctx.beginPath()
  ctx.moveTo(centerX + 65, centerY - 5)
  ctx.lineTo(centerX + 70, centerY)
  ctx.lineTo(centerX + 65, centerY + 5)
  ctx.stroke()

  ctx.fillStyle = '#059669'
  ctx.font = '10px Arial'
  ctx.fillText('усі сторони рівні', centerX + 75, centerY)
}

function drawRhombusToSquare(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const centerX = width / 2
  const centerY = height / 2

  // Спочатку ромб
  ctx.strokeStyle = '#6b7280'
  ctx.fillStyle = 'rgba(107, 114, 128, 0.1)'
  ctx.lineWidth = 1
  ctx.setLineDash([5, 5])

  const rhombPoints = [
    [centerX, centerY - 40],
    [centerX + 35, centerY],
    [centerX, centerY + 40],
    [centerX - 35, centerY]
  ]

  ctx.beginPath()
  ctx.moveTo(rhombPoints[0][0], rhombPoints[0][1])
  for (let i = 1; i < rhombPoints.length; i++) {
    ctx.lineTo(rhombPoints[i][0], rhombPoints[i][1])
  }
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  // Потім квадрат
  ctx.setLineDash([])
  drawSquare(canvas, { size: 60, strokeColor: '#059669' })

  // Стрілка
  ctx.strokeStyle = '#059669'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(centerX + 45, centerY)
  ctx.lineTo(centerX + 60, centerY)
  ctx.stroke()

  // Головка стрілки
  ctx.beginPath()
  ctx.moveTo(centerX + 55, centerY - 5)
  ctx.lineTo(centerX + 60, centerY)
  ctx.lineTo(centerX + 55, centerY + 5)
  ctx.stroke()

  ctx.fillStyle = '#059669'
  ctx.font = '10px Arial'
  ctx.fillText('усі кути прямі', centerX + 65, centerY)
}

function drawCombination(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const centerX = width / 2
  const centerY = height / 2

  // Прямокутник
  ctx.strokeStyle = '#3b82f6'
  ctx.fillStyle = 'rgba(59, 130, 246, 0.1)'
  ctx.lineWidth = 2
  ctx.fillRect(centerX - 80, centerY - 25, 60, 50)
  ctx.strokeRect(centerX - 80, centerY - 25, 60, 50)

  ctx.fillStyle = '#3b82f6'
  ctx.font = '12px Arial'
  ctx.fillText('Прямокутник', centerX - 80, centerY - 35)

  // Ромб
  ctx.strokeStyle = '#7c3aed'
  ctx.fillStyle = 'rgba(124, 58, 237, 0.1)'

  const rhombPoints = [
    [centerX + 50, centerY - 25],
    [centerX + 75, centerY],
    [centerX + 50, centerY + 25],
    [centerX + 25, centerY]
  ]

  ctx.beginPath()
  ctx.moveTo(rhombPoints[0][0], rhombPoints[0][1])
  for (let i = 1; i < rhombPoints.length; i++) {
    ctx.lineTo(rhombPoints[i][0], rhombPoints[i][1])
  }
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  ctx.fillStyle = '#7c3aed'
  ctx.fillText('Ромб', centerX + 35, centerY - 35)

  // Квадрат внизу
  drawSquare(canvas, {
    size: 50,
    strokeColor: '#059669',
    fillColor: 'rgba(5, 150, 105, 0.2)'
  })

  ctx.fillStyle = '#059669'
  ctx.font = '14px Arial'
  ctx.fillText('КВАДРАТ', centerX - 30, centerY + 45)

  // Стрілки
  ctx.strokeStyle = '#059669'
  ctx.lineWidth = 2

  // Від прямокутника
  ctx.beginPath()
  ctx.moveTo(centerX - 40, centerY - 10)
  ctx.lineTo(centerX - 15, centerY - 5)
  ctx.stroke()

  // Від ромба
  ctx.beginPath()
  ctx.moveTo(centerX + 35, centerY + 10)
  ctx.lineTo(centerX + 15, centerY + 5)
  ctx.stroke()
}

function drawSquareWithProperties(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const points = drawSquare(canvas, {
    size: 120,
    strokeColor: '#059669',
    fillColor: 'rgba(5, 150, 105, 0.1)'
  })

  if (currentHighlight.value === 'angles') {
    // Позначаємо прямі кути
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 2
    const corner = 12

    points.forEach(point => {
      ctx.strokeRect(point[0] - corner/2, point[1] - corner/2, corner, corner)
    })

  } else if (currentHighlight.value === 'sides') {
    // Виділяємо всі сторони
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 4

    for (let i = 0; i < points.length; i++) {
      const next = (i + 1) % points.length
      ctx.beginPath()
      ctx.moveTo(points[i][0], points[i][1])
      ctx.lineTo(points[next][0], points[next][1])
      ctx.stroke()
    }

    // Позначки рівності
    ctx.fillStyle = '#dc2626'
    for (let i = 0; i < points.length; i++) {
      const next = (i + 1) % points.length
      const midX = (points[i][0] + points[next][0]) / 2
      const midY = (points[i][1] + points[next][1]) / 2

      ctx.beginPath()
      ctx.arc(midX, midY, 3, 0, 2 * Math.PI)
      ctx.fill()
    }

  } else if (currentHighlight.value === 'diagonals') {
    // Діагоналі
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 3

    // AC
    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])
    ctx.lineTo(points[2][0], points[2][1])
    ctx.stroke()

    // BD
    ctx.beginPath()
    ctx.moveTo(points[1][0], points[1][1])
    ctx.lineTo(points[3][0], points[3][1])
    ctx.stroke()

    // Центр перетину
    const centerX = (points[0][0] + points[2][0]) / 2
    const centerY = (points[0][1] + points[2][1]) / 2

    ctx.fillStyle = '#dc2626'
    ctx.beginPath()
    ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI)
    ctx.fill()

    // Позначка перпендикулярності
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 1
    ctx.strokeRect(centerX - 6, centerY - 6, 12, 12)

    ctx.fillStyle = '#1f2937'
    ctx.font = '12px Arial'
    ctx.fillText('O', centerX + 8, centerY - 8)

  } else if (currentHighlight.value === 'circles') {
    // Описане коло
    const centerX = width / 2
    const centerY = height / 2
    const circumRadius = 120 * Math.sqrt(2) / 2

    ctx.strokeStyle = '#3b82f6'
    ctx.setLineDash([5, 5])
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(centerX, centerY, circumRadius, 0, 2 * Math.PI)
    ctx.stroke()

    // Вписане коло
    ctx.strokeStyle = '#f59e0b'
    ctx.beginPath()
    ctx.arc(centerX, centerY, 60, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.setLineDash([])
  }
}

function drawCircumscribedCircle(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const centerX = width / 2
  const centerY = height / 2
  const size = 60
  const radius = size * Math.sqrt(2) / 2

  // Описане коло
  ctx.strokeStyle = '#3b82f6'
  ctx.setLineDash([3, 3])
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
  ctx.stroke()

  ctx.setLineDash([])

  // Квадрат
  drawSquare(canvas, {
    size: size,
    strokeColor: '#059669',
    showLabels: false
  })

  // Радіус
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(centerX, centerY)
  ctx.lineTo(centerX + size/2, centerY - size/2)
  ctx.stroke()

  ctx.fillStyle = '#3b82f6'
  ctx.font = '12px Arial'
  ctx.fillText('R', centerX + 15, centerY - 15)
}

function drawInscribedCircle(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const centerX = width / 2
  const centerY = height / 2
  const size = 80
  const radius = size / 2

  // Квадрат
  drawSquare(canvas, {
    size: size,
    strokeColor: '#059669',
    showLabels: false
  })

  // Вписане коло
  ctx.strokeStyle = '#f59e0b'
  ctx.setLineDash([3, 3])
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
  ctx.stroke()

  ctx.setLineDash([])

  // Радіус
  ctx.strokeStyle = '#f59e0b'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(centerX, centerY)
  ctx.lineTo(centerX, centerY - radius)
  ctx.stroke()

  ctx.fillStyle = '#f59e0b'
  ctx.font = '12px Arial'
  ctx.fillText('r', centerX + 5, centerY - radius/2)
}

function highlightProperty(property) {
  currentHighlight.value = property
  drawSquareWithProperties(propertiesCanvas.value)
}

onMounted(async () => {
  await nextTick()

  if (definition1Canvas.value) {
    drawRectangleToSquare(definition1Canvas.value)
  }

  if (definition2Canvas.value) {
    drawRhombusToSquare(definition2Canvas.value)
  }

  if (definition3Canvas.value) {
    drawCombination(definition3Canvas.value)
  }

  if (propertiesCanvas.value) {
    drawSquareWithProperties(propertiesCanvas.value)
  }

  if (circumscribedCanvas.value) {
    drawCircumscribedCircle(circumscribedCanvas.value)
  }

  if (inscribedCanvas.value) {
    drawInscribedCircle(inscribedCanvas.value)
  }
})
</script>

<style scoped>
.square-lesson {
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
  border-bottom: 3px solid #059669;
  padding-bottom: 0.5rem;
}

.definitions-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.definition-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #059669;
  text-align: center;
}

.definition-box.special {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border: 2px solid #059669;
  border-left: 5px solid #059669;
}

.definition-box p {
  font-size: 1.1rem;
  margin: 0;
  color: #334155;
  font-weight: 500;
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
  border-color: #059669;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(5, 150, 105, 0.15);
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
  color: #059669;
  margin: 0.25rem 0;
}

.interactive-square {
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

.intro-text {
  color: #475569;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.signs-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.signs-category {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 5px solid #059669;
}

.signs-category h3 {
  color: #1e293b;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
}

.sign-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  margin: 0.5rem 0;
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

.circles-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.circle-demo {
  text-align: center;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.circle-demo h3 {
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.circle-demo p {
  color: #64748b;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
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
  .square-lesson {
    padding: 1rem;
  }

  .definitions-container {
    grid-template-columns: 1fr;
  }

  .definition-box.special {
    grid-column: 1;
  }

  .properties-grid {
    grid-template-columns: 1fr;
  }

  .circles-explanation {
    grid-template-columns: 1fr;
  }
}
</style>