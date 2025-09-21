<template>
  <div class="rhombus-lesson">
    <div class="lesson-content">
      <!-- Визначення -->
      <section class="content-section">
        <h2>🔍 Визначення</h2>
        <div class="definition-box">
          <p><strong>Ромб</strong> — це паралелограм, у якого всі сторони рівні.</p>
          <div class="rhombus-visual">
            <canvas ref="definitionCanvas" width="300" height="200"></canvas>
          </div>
        </div>
      </section>

      <!-- Властивості -->
      <section class="content-section">
        <h2>⭐ Властивості ромба</h2>
        <div class="properties-info">
          <p class="properties-note">Оскільки ромб є паралелограмом, він має всі властивості паралелограма, а також особливі властивості:</p>
        </div>

        <div class="properties-grid">
          <div class="property-card" @click="highlightProperty('sides')">
            <h3>📏 Сторони</h3>
            <p>Всі сторони ромба рівні</p>
            <div class="formula">AB = BC = CD = AD</div>
          </div>

          <div class="property-card" @click="highlightProperty('angles')">
            <h3>📐 Кути</h3>
            <p>Протилежні кути ромба рівні</p>
            <div class="formula">∠A = ∠C, ∠B = ∠D</div>
          </div>

          <div class="property-card" @click="highlightProperty('diagonals-perpendicular')">
            <h3>⊥ Діагоналі перпендикулярні</h3>
            <p>Діагоналі ромба перпендикулярні</p>
            <div class="formula">AC ⊥ BD</div>
          </div>

          <div class="property-card" @click="highlightProperty('diagonals-bisect')">
            <h3>📍 Діагоналі діляться навпіл</h3>
            <p>Діагоналі точкою перетину діляться навпіл</p>
            <div class="formula">AO = OC, BO = OD</div>
          </div>

          <div class="property-card" @click="highlightProperty('angle-bisectors')">
            <h3>🔄 Бісектриси кутів</h3>
            <p>Діагоналі ромба є бісектрисами його кутів</p>
            <div class="formula">∠BAC = ∠CAD</div>
          </div>

          <div class="property-card" @click="highlightProperty('heights')">
            <h3>📏 Висоти</h3>
            <p>Всі висоти ромба рівні</p>
            <div class="formula">h₁ = h₂ = h₃ = h₄</div>
          </div>
        </div>

        <div class="interactive-rhombus">
          <canvas ref="propertiesCanvas" width="400" height="300"></canvas>
          <p class="hint">💡 Клікни на властивості вище, щоб побачити їх на малюнку!</p>
        </div>
      </section>

      <!-- Теорема про властивості -->
      <section class="content-section">
        <h2>📖 Теорема 5.1</h2>
        <div class="theorem-box">
          <p><strong>Теорема:</strong> Діагоналі ромба перпендикулярні і є бісектрисами його кутів.</p>
          <div class="proof-section">
            <h4>Доведення:</h4>
            <p>Трикутник ABC (утворений двома сусідніми сторонами ромба і діагоналлю) є рівнобедреним, оскільки всі сторони ромба рівні.</p>
            <p>Відрізок BO (частина другої діагоналі) є медіаною цього трикутника, а отже — і його висотою та бісектрисою.</p>
            <canvas ref="theoremCanvas" width="350" height="250"></canvas>
          </div>
        </div>
      </section>

      <!-- Ознаки -->
      <section class="content-section">
        <h2>✅ Ознаки ромба</h2>
        <p class="intro-text">Ознаки допомагають визначити, чи є паралелограм ромбом:</p>

        <div class="signs-list">
          <div class="sign-item theorem">
            <div class="sign-number">📖</div>
            <div class="sign-content">
              <h4>Теорема 5.2</h4>
              <p>Якщо діагоналі паралелограма перпендикулярні, то цей паралелограм — ромб</p>
            </div>
          </div>

          <div class="sign-item theorem">
            <div class="sign-number">📖</div>
            <div class="sign-content">
              <h4>Теорема 5.3</h4>
              <p>Якщо діагональ паралелограма є бісектрисою його кута, то цей паралелограм — ромб</p>
            </div>
          </div>

          <div class="sign-item">
            <div class="sign-number">1️⃣</div>
            <div class="sign-content">
              <p>Якщо дві сусідні сторони паралелограма рівні, то він є ромбом</p>
            </div>
          </div>

          <div class="sign-item">
            <div class="sign-number">2️⃣</div>
            <div class="sign-content">
              <p>Чотирикутник, усі сторони якого рівні, є ромбом</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Зв'язок з іншими фігурами -->
      <section class="content-section">
        <h2>🔗 Зв'язок з іншими фігурами</h2>
        <div class="relationships-grid">
          <div class="relationship-card">
            <h3>◾ Квадрат</h3>
            <p>Квадрат — це окремий вид ромба (ромб із усіма кутами прямими)</p>
            <canvas ref="squareCanvas" width="150" height="100"></canvas>
            <div class="relationship-note">
              <p><strong>Правило:</strong> Якщо один із кутів ромба прямий, то цей ромб є квадратом</p>
            </div>
          </div>

          <div class="relationship-card">
            <h3>🔄 Вписане коло</h3>
            <p>У будь-який ромб можна вписати коло</p>
            <canvas ref="inscribedCircleCanvas" width="150" height="100"></canvas>
          </div>

          <div class="relationship-card">
            <h3>🚫 Описане коло</h3>
            <p>Навколо ромба (який не є квадратом) не можна описати коло</p>
            <canvas ref="circumscribedCanvas" width="150" height="100"></canvas>
          </div>
        </div>
      </section>

      <!-- Підсумок -->
      <section class="content-section summary">
        <h2>📝 Підсумок</h2>
        <div class="summary-box">
          <p><strong>Запам'ятай:</strong></p>
          <ul>
            <li>🔸 Ромб — паралелограм з усіма рівними сторонами</li>
            <li>🔸 Діагоналі ромба перпендикулярні і є бісектрисами кутів</li>
            <li>🔸 Всі висоти ромба рівні</li>
            <li>🔸 Квадрат — це окремий вид ромба</li>
            <li>🔸 У ромб можна вписати коло</li>
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
const theoremCanvas = ref(null)
const squareCanvas = ref(null)
const inscribedCircleCanvas = ref(null)
const circumscribedCanvas = ref(null)

const currentHighlight = ref('')

function drawRhombus(canvas, options = {}) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = options.strokeColor || '#7c3aed'
  ctx.fillStyle = options.fillColor || 'rgba(124, 58, 237, 0.1)'
  ctx.lineWidth = options.lineWidth || 2

  const centerX = width / 2
  const centerY = height / 2
  const w = options.width || 60
  const h = options.height || 40

  // Координати вершин ромба
  const points = [
    [centerX, centerY - h], // A (верх)
    [centerX + w, centerY], // B (право)
    [centerX, centerY + h], // C (низ)
    [centerX - w, centerY]  // D (ліво)
  ]

  // Малюємо ромб
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1])
  }
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  // Підписи вершин
  if (options.showLabels !== false) {
    ctx.fillStyle = '#1f2937'
    ctx.font = '14px Arial'
    ctx.fillText('A', points[0][0] - 8, points[0][1] - 10)
    ctx.fillText('B', points[1][0] + 10, points[1][1] + 5)
    ctx.fillText('C', points[2][0] - 8, points[2][1] + 20)
    ctx.fillText('D', points[3][0] - 20, points[3][1] + 5)
  }

  return points
}

function drawRhombusWithProperties(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const points = drawRhombus(canvas, {
    width: 80,
    height: 60,
    strokeColor: '#7c3aed',
    fillColor: 'rgba(124, 58, 237, 0.1)'
  })

  const centerX = (points[0][0] + points[2][0]) / 2
  const centerY = (points[0][1] + points[2][1]) / 2

  // Виділяємо властивості залежно від вибору
  if (currentHighlight.value === 'sides') {
    // Виділяємо всі сторони
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 4

    for (let i = 0; i < 4; i++) {
      ctx.beginPath()
      ctx.moveTo(points[i][0], points[i][1])
      ctx.lineTo(points[(i + 1) % 4][0], points[(i + 1) % 4][1])
      ctx.stroke()
    }

    // Позначки рівних сторін
    ctx.fillStyle = '#dc2626'
    for (let i = 0; i < 4; i++) {
      const x1 = points[i][0]
      const y1 = points[i][1]
      const x2 = points[(i + 1) % 4][0]
      const y2 = points[(i + 1) % 4][1]

      const midX = (x1 + x2) / 2
      const midY = (y1 + y2) / 2

      ctx.beginPath()
      ctx.arc(midX, midY, 3, 0, 2 * Math.PI)
      ctx.fill()
    }

  } else if (currentHighlight.value === 'angles') {
    // Позначаємо кути
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 2

    // Малюємо дуги для протилежних кутів
    drawAngleArc(ctx, points[0], points[3], points[1], 25)
    drawAngleArc(ctx, points[2], points[1], points[3], 25)

  } else if (currentHighlight.value === 'diagonals-perpendicular') {
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

    // Позначка прямого кута
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 2
    const size = 15
    ctx.strokeRect(centerX - size/2, centerY - size/2, size, size)

  } else if (currentHighlight.value === 'diagonals-bisect') {
    // Діагоналі з точкою перетину
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
    ctx.fillStyle = '#dc2626'
    ctx.beginPath()
    ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = '#1f2937'
    ctx.font = '12px Arial'
    ctx.fillText('O', centerX + 8, centerY - 8)

  } else if (currentHighlight.value === 'angle-bisectors') {
    // Діагоналі як бісектриси
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 3

    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])
    ctx.lineTo(points[2][0], points[2][1])
    ctx.stroke()

    // Позначаємо рівні кути
    drawAngleArc(ctx, points[0], points[3], points[2], 20, '#dc2626')
    drawAngleArc(ctx, points[0], points[2], points[1], 20, '#dc2626')

  } else if (currentHighlight.value === 'heights') {
    // Висоти
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 2
    ctx.setLineDash([5, 5])

    // Висота до кожної сторони
    const heights = [
      { from: [centerX, points[0][1]], to: [centerX, points[2][1]] },
      { from: [points[1][0], centerY], to: [points[3][0], centerY] }
    ]

    heights.forEach(h => {
      ctx.beginPath()
      ctx.moveTo(h.from[0], h.from[1])
      ctx.lineTo(h.to[0], h.to[1])
      ctx.stroke()
    })

    ctx.setLineDash([])
  }
}

function drawAngleArc(ctx, vertex, side1, side2, radius, color = '#dc2626') {
  const angle1 = Math.atan2(side1[1] - vertex[1], side1[0] - vertex[0])
  const angle2 = Math.atan2(side2[1] - vertex[1], side2[0] - vertex[0])

  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.arc(vertex[0], vertex[1], radius, angle1, angle2)
  ctx.stroke()
}

function drawTheoremDemo(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const points = drawRhombus(canvas, {
    width: 70,
    height: 50,
    strokeColor: '#7c3aed'
  })

  const centerX = width / 2
  const centerY = height / 2

  // Виділяємо трикутник ABC
  ctx.fillStyle = 'rgba(220, 38, 38, 0.2)'
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  ctx.lineTo(points[1][0], points[1][1])
  ctx.lineTo(points[2][0], points[2][1])
  ctx.fill()

  // Діагоналі
  ctx.strokeStyle = '#dc2626'
  ctx.lineWidth = 2

  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  ctx.lineTo(points[2][0], points[2][1])
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(points[1][0], points[1][1])
  ctx.lineTo(centerX, centerY)
  ctx.stroke()

  // Позначка прямого кута
  const size = 12
  ctx.strokeRect(centerX - size/2, centerY - size/2, size, size)

  // Підписи
  ctx.fillStyle = '#1f2937'
  ctx.font = '12px Arial'
  ctx.fillText('O', centerX + 8, centerY - 8)
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
}

function drawInscribedCircle(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const points = drawRhombus(canvas, {
    width: 50,
    height: 35,
    showLabels: false
  })

  // Вписане коло
  ctx.strokeStyle = '#10b981'
  ctx.fillStyle = 'rgba(16, 185, 129, 0.1)'
  ctx.lineWidth = 2

  const centerX = width / 2
  const centerY = height / 2
  const radius = 25

  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
}

function drawCircumscribedDemo(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  const points = drawRhombus(canvas, {
    width: 50,
    height: 35,
    showLabels: false
  })

  // Пунктирне коло навколо (неможливе)
  ctx.strokeStyle = '#ef4444'
  ctx.setLineDash([5, 5])
  ctx.lineWidth = 2

  const centerX = width / 2
  const centerY = height / 2
  const radius = 45

  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
  ctx.stroke()

  // Хрестик - неможливо
  ctx.setLineDash([])
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(centerX - 10, centerY - 10)
  ctx.lineTo(centerX + 10, centerY + 10)
  ctx.moveTo(centerX + 10, centerY - 10)
  ctx.lineTo(centerX - 10, centerY + 10)
  ctx.stroke()
}

function highlightProperty(property) {
  currentHighlight.value = property
  drawRhombusWithProperties(propertiesCanvas.value)
}

onMounted(async () => {
  await nextTick()

  if (definitionCanvas.value) {
    drawRhombus(definitionCanvas.value)
  }

  if (propertiesCanvas.value) {
    drawRhombusWithProperties(propertiesCanvas.value)
  }

  if (theoremCanvas.value) {
    drawTheoremDemo(theoremCanvas.value)
  }

  if (squareCanvas.value) {
    drawSquare(squareCanvas.value)
  }

  if (inscribedCircleCanvas.value) {
    drawInscribedCircle(inscribedCircleCanvas.value)
  }

  if (circumscribedCanvas.value) {
    drawCircumscribedDemo(circumscribedCanvas.value)
  }
})
</script>

<style scoped>
.rhombus-lesson {
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
  border-bottom: 3px solid #7c3aed;
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
  border-left: 5px solid #7c3aed;
}

.definition-box p {
  font-size: 1.1rem;
  margin: 0;
  color: #334155;
}

.rhombus-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.properties-info {
  margin-bottom: 1.5rem;
}

.properties-note {
  color: #475569;
  font-size: 1rem;
  margin: 0;
  font-style: italic;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  border-color: #7c3aed;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(124, 58, 237, 0.15);
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
  background: #ede9fe;
  padding: 0.5rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: #6d28d9;
  margin: 0.25rem 0;
}

.interactive-rhombus {
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

.theorem-box {
  background: #fef3c7;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #f59e0b;
}

.theorem-box p {
  color: #92400e;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.proof-section {
  margin-top: 1rem;
}

.proof-section h4 {
  color: #78350f;
  margin: 0 0 1rem 0;
}

.proof-section p {
  color: #78350f;
  margin: 0.5rem 0;
  font-size: 1rem;
}

.proof-section canvas {
  margin-top: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

.sign-item.theorem {
  border-left-color: #f59e0b;
  background: #fef3c7;
}

.sign-number {
  font-size: 1.5rem;
  min-width: 40px;
}

.sign-content p {
  margin: 0;
  color: #334155;
}

.sign-content h4 {
  margin: 0 0 0.5rem 0;
  color: #92400e;
  font-size: 1.1rem;
}

.intro-text {
  color: #475569;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.relationships-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.relationship-card {
  text-align: center;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.relationship-card:hover {
  border-color: #7c3aed;
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

.relationship-note {
  background: #fef3c7;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.relationship-note p {
  color: #92400e;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
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
  .rhombus-lesson {
    padding: 1rem;
  }

  .definition-box {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .properties-grid {
    grid-template-columns: 1fr;
  }

  .relationships-grid {
    grid-template-columns: 1fr;
  }
}
</style>