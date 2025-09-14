<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>1️⃣ Який чотирикутник називають паралелограмом?</h2>

      <div class="definition-box">
        <strong>Означення:</strong><br>
        Паралелограмом називають чотирикутник, у якого кожні дві протилежні сторони паралельні.
      </div>

      <div class="parallelogram-demo">
        <div class="visual-container">
          <svg width="400" height="300" viewBox="0 0 400 300" class="interactive-svg">
            <!-- Parallelogram ABCD -->
            <polygon points="100,80 280,80 240,180 60,180"
                    fill="rgba(111, 66, 193, 0.15)"
                    stroke="#6f42c1"
                    stroke-width="3"
                    class="parallelogram-shape" />

            <!-- Parallel marks for AB || CD -->
            <g class="parallel-marks">
              <line x1="160" y1="75" x2="170" y2="75" stroke="#dc3545" stroke-width="2" />
              <line x1="165" y1="70" x2="175" y2="70" stroke="#dc3545" stroke-width="2" />

              <line x1="130" y1="185" x2="140" y2="185" stroke="#dc3545" stroke-width="2" />
              <line x1="135" y1="190" x2="145" y2="190" stroke="#dc3545" stroke-width="2" />
            </g>

            <!-- Parallel marks for BC || AD -->
            <g class="parallel-marks">
              <line x1="265" y1="110" x2="270" y2="120" stroke="#007bff" stroke-width="2" />
              <line x1="270" y1="115" x2="275" y2="125" stroke="#007bff" stroke-width="2" />

              <line x1="75" y1="110" x2="80" y2="120" stroke="#007bff" stroke-width="2" />
              <line x1="80" y1="115" x2="85" y2="125" stroke="#007bff" stroke-width="2" />
            </g>

            <!-- Vertices -->
            <circle cx="100" cy="80" r="6" fill="#28a745"  />
            <circle cx="280" cy="80" r="6" fill="#28a745"  />
            <circle cx="240" cy="180" r="6" fill="#28a745"  />
            <circle cx="60" cy="180" r="6" fill="#28a745"  />

            <!-- Vertex labels -->
            <text x="90" y="70" font-size="18" font-weight="bold" fill="#2c3e50">A</text>
            <text x="285" y="70" font-size="18" font-weight="bold" fill="#2c3e50">B</text>
            <text x="245" y="200" font-size="18" font-weight="bold" fill="#2c3e50">C</text>
            <text x="45" y="200" font-size="18" font-weight="bold" fill="#2c3e50">D</text>

            <!-- Side labels -->
            <text x="185" y="70" font-size="14" fill="#dc3545" font-weight="600">AB</text>
            <text x="270" y="130" font-size="14" fill="#007bff" font-weight="600">BC</text>
            <text x="145" y="200" font-size="14" fill="#dc3545" font-weight="600">CD</text>
            <text x="70" y="130" font-size="14" fill="#007bff" font-weight="600">AD</text>
          </svg>
        </div>

        <div class="explanation-panel">
          <div class="property-card">
            <div class="property-header">
              <span class="icon">↔️</span>
              <h3>Паралельні сторони</h3>
            </div>
            <div class="property-content">
              <div class="parallel-pair">
                <span class="math-expression">AB \parallel CD</span>
                <span class="parallel-indicator red"></span>
              </div>
              <div class="parallel-pair">
                <span class="math-expression">BC \parallel AD</span>
                <span class="parallel-indicator blue"></span>
              </div>
            </div>
          </div>

          <div class="example-box">
            <strong>💡 Приклад:</strong> У паралелограмі <span class="math-expression">ABCD</span> сторони <span class="math-expression">AB</span> паралельні <span class="math-expression">CD</span> та <span class="math-expression">BC</span> паралельні <span class="math-expression">AD</span>.
          </div>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>2️⃣ Властивість протилежних сторін паралелограма</h2>

      <div class="theorem-box">
        <div class="theorem-header">
          <span class="icon">📐</span>
          <strong>Теорема 2.1:</strong> Протилежні сторони паралелограма рівні.
        </div>
      </div>

      <div class="proof-section">
        <h3 class="proof-title">📝 Доведення</h3>

        <div class="proof-visual">
          <svg width="350" height="280" viewBox="0 0 350 280" class="interactive-svg">
            <!-- Parallelogram ABCD -->
            <polygon points="80,80 240,80 200,180 40,180"
                    fill="rgba(32, 201, 151, 0.1)"
                    stroke="#20c997"
                    stroke-width="2"
                    class="parallelogram-shape" />

            <!-- Diagonal AC -->
            <line x1="80" y1="80" x2="200" y2="180"
                  stroke="#fd7e14"
                  stroke-width="3"
                  stroke-dasharray="5,5"
                   />

            <!-- Triangle ABC highlighting -->
            <polygon points="80,80 240,80 200,180"
                    fill="rgba(253, 126, 20, 0.15)"
                    stroke="#fd7e14"
                    stroke-width="2"
                    stroke-dasharray="3,3"
                    class="triangle-highlight" />

            <!-- Triangle CDA highlighting -->
            <polygon points="200,180 40,180 80,80"
                    fill="rgba(220, 53, 69, 0.15)"
                    stroke="#dc3545"
                    stroke-width="2"
                    stroke-dasharray="3,3"
                    class="triangle-highlight" />

            <!-- Vertices -->
            <circle cx="80" cy="80" r="6" fill="#28a745"  />
            <circle cx="240" cy="80" r="6" fill="#28a745"  />
            <circle cx="200" cy="180" r="6" fill="#28a745"  />
            <circle cx="40" cy="180" r="6" fill="#28a745"  />

            <!-- Vertex labels -->
            <text x="70" y="70" font-size="16" font-weight="bold" fill="#2c3e50">A</text>
            <text x="245" y="70" font-size="16" font-weight="bold" fill="#2c3e50">B</text>
            <text x="205" y="200" font-size="16" font-weight="bold" fill="#2c3e50">C</text>
            <text x="25" y="200" font-size="16" font-weight="bold" fill="#2c3e50">D</text>

            <!-- Diagonal label -->
            <text x="135" y="125" font-size="14" fill="#fd7e14" font-weight="600">AC</text>

            <!-- Angle marks -->
            <g class="angle-marks">
              <!-- Angle BCA -->
              <path d="M 185,165 A 15,15 0 0,0 195,150" fill="none" stroke="#007bff" stroke-width="2"/>
              <text x="190" y="160" font-size="10" fill="#007bff">∠BCA</text>

              <!-- Angle DAC -->
              <path d="M 95,80 A 15,15 0 0,0 85,95" fill="none" stroke="#007bff" stroke-width="2"/>
              <text x="90" y="95" font-size="10" fill="#007bff">∠DAC</text>
            </g>
          </svg>
        </div>

        <div class="proof-steps">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <p>Нехай дано паралелограм <span class="math-expression">ABCD</span></p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <p>Проведемо діагональ <span class="math-expression">AC</span></p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <p>Розглянемо трикутники <span class="math-expression">ABC</span> і <span class="math-expression">CDA</span></p>
              <div class="triangles-comparison">
                <div class="triangle-info">
                  <span class="triangle-label orange"><span class="math-expression">\triangle ABC</span></span>
                </div>
                <div class="triangle-info">
                  <span class="triangle-label red"><span class="math-expression">\triangle CDA</span></span>
                </div>
              </div>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-content">
              <p>У цих трикутниках:</p>
              <ul class="proof-conditions">
                <li><span class="math-expression">AC</span> — спільна сторона</li>
                <li><span class="math-expression">\angle BCA = \angle DAC</span> (різносторонні при <span class="math-expression">BC \parallel AD</span> та січній <span class="math-expression">AC</span>)</li>
                <li><span class="math-expression">\angle BAC = \angle DCA</span> (різносторонні при <span class="math-expression">AB \parallel CD</span> та січній <span class="math-expression">AC</span>)</li>
              </ul>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-content">
              <p>Трикутники <span class="math-expression">ABC</span> і <span class="math-expression">CDA</span> рівні за другою ознакою рівності трикутників</p>
              <div class="conclusion-box">
                <strong><span class="math-expression">\triangle ABC = \triangle CDA</span></strong>
              </div>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">6</div>
            <div class="step-content">
              <p>Із рівності трикутників випливає:</p>
              <div class="formula-result">
                <span class="math-expression math-display">AB = CD, \quad BC = AD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>3️⃣ Властивість протилежних кутів паралелограма</h2>

      <div class="theorem-box">
        <div class="theorem-header">
          <span class="icon">📐</span>
          <strong>Теорема 2.2:</strong> Протилежні кути паралелограма рівні.
        </div>
      </div>

      <div class="angles-demo">
        <div class="visual-container">
          <svg width="400" height="300" viewBox="0 0 400 300" class="interactive-svg">
            <!-- Parallelogram ABCD -->
            <polygon points="100,80 280,80 240,180 60,180"
                    fill="rgba(0, 123, 255, 0.1)"
                    stroke="#007bff"
                    stroke-width="3"
                    class="parallelogram-shape" />

            <!-- Angle A highlighting -->
            <path d="M 120,80 A 20,20 0 0,1 100,100" fill="rgba(40, 167, 69, 0.3)" stroke="#28a745" stroke-width="2"/>

            <!-- Angle C highlighting -->
            <path d="M 220,180 A 20,20 0 0,1 240,160" fill="rgba(40, 167, 69, 0.3)" stroke="#28a745" stroke-width="2"/>

            <!-- Angle B highlighting -->
            <path d="M 280,100 A 20,20 0 0,1 260,80" fill="rgba(220, 53, 69, 0.3)" stroke="#dc3545" stroke-width="2"/>

            <!-- Angle D highlighting -->
            <path d="M 60,160 A 20,20 0 0,1 80,180" fill="rgba(220, 53, 69, 0.3)" stroke="#dc3545" stroke-width="2"/>

            <!-- Vertices -->
            <circle cx="100" cy="80" r="6" fill="#28a745"  />
            <circle cx="280" cy="80" r="6" fill="#dc3545"  />
            <circle cx="240" cy="180" r="6" fill="#28a745"  />
            <circle cx="60" cy="180" r="6" fill="#dc3545"  />

            <!-- Vertex labels -->
            <text x="85" y="70" font-size="18" font-weight="bold" fill="#2c3e50">A</text>
            <text x="285" y="70" font-size="18" font-weight="bold" fill="#2c3e50">B</text>
            <text x="245" y="200" font-size="18" font-weight="bold" fill="#2c3e50">C</text>
            <text x="45" y="200" font-size="18" font-weight="bold" fill="#2c3e50">D</text>

            <!-- Angle labels -->
            <text x="110" y="95" font-size="14" fill="#28a745" font-weight="600">∠A</text>
            <text x="265" y="95" font-size="14" fill="#dc3545" font-weight="600">∠B</text>
            <text x="225" y="165" font-size="14" fill="#28a745" font-weight="600">∠C</text>
            <text x="75" y="165" font-size="14" fill="#dc3545" font-weight="600">∠D</text>
          </svg>
        </div>

        <div class="angles-explanation">
          <div class="angle-pairs">
            <div class="angle-pair green">
              <div class="pair-header">
                <span class="icon">🟢</span>
                <span>Протилежні кути</span>
              </div>
              <div class="formula-display"><span class="math-expression">\angle A = \angle C</span></div>
            </div>

            <div class="angle-pair red">
              <div class="pair-header">
                <span class="icon">🔴</span>
                <span>Протилежні кути</span>
              </div>
              <div class="formula-display"><span class="math-expression">\angle B = \angle D</span></div>
            </div>
          </div>

          <div class="proof-brief">
            <h4>💡 Коротке доведення:</h4>
            <p>Із доведення Теореми 2.1 маємо: <span class="math-expression">\triangle ABC = \triangle CDA</span></p>
            <p>Тому безпосередньо: <span class="math-expression">\angle B = \angle D</span> та <span class="math-expression">\angle A = \angle C</span></p>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>4️⃣ Властивість діагоналей паралелограма</h2>

      <div class="theorem-box">
        <div class="theorem-header">
          <span class="icon">📐</span>
          <strong>Теорема 2.3:</strong> Діагоналі паралелограма точкою перетину діляться навпіл.
        </div>
      </div>

      <div class="diagonals-demo">
        <div class="visual-container">
          <svg width="400" height="320" viewBox="0 0 400 320" class="interactive-svg">
            <!-- Parallelogram ABCD -->
            <polygon points="100,80 280,80 240,200 60,200"
                    fill="rgba(253, 126, 20, 0.1)"
                    stroke="#fd7e14"
                    stroke-width="3"
                    class="parallelogram-shape" />

            <!-- Diagonal AC -->
            <line x1="100" y1="80" x2="240" y2="200"
                  stroke="#007bff"
                  stroke-width="4"
                   />

            <!-- Diagonal BD -->
            <line x1="280" y1="80" x2="60" y2="200"
                  stroke="#dc3545"
                  stroke-width="4"
                   />

            <!-- Intersection point O -->
            <circle cx="170" cy="140" r="8" fill="#ffc107"  />
            <text x="180" y="135" font-size="16" font-weight="bold" fill="#2c3e50">O</text>

            <!-- Equal segments markers -->
            <!-- AO = OC -->
            <line x1="130" y1="105" x2="140" y2="115" stroke="#007bff" stroke-width="3" />
            <line x1="200" y1="165" x2="210" y2="175" stroke="#007bff" stroke-width="3" />

            <!-- BO = OD -->
            <line x1="230" y1="105" x2="220" y2="115" stroke="#dc3545" stroke-width="3" />
            <line x1="110" y1="165" x2="100" y2="175" stroke="#dc3545" stroke-width="3" />

            <!-- Vertices -->
            <circle cx="100" cy="80" r="6" fill="#28a745"  />
            <circle cx="280" cy="80" r="6" fill="#28a745"  />
            <circle cx="240" cy="200" r="6" fill="#28a745"  />
            <circle cx="60" cy="200" r="6" fill="#28a745"  />

            <!-- Vertex labels -->
            <text x="85" y="70" font-size="18" font-weight="bold" fill="#2c3e50">A</text>
            <text x="285" y="70" font-size="18" font-weight="bold" fill="#2c3e50">B</text>
            <text x="245" y="220" font-size="18" font-weight="bold" fill="#2c3e50">C</text>
            <text x="45" y="220" font-size="18" font-weight="bold" fill="#2c3e50">D</text>

            <!-- Diagonal labels -->
            <text x="160" y="125" font-size="14" fill="#007bff" font-weight="600">AC</text>
            <text x="180" y="105" font-size="14" fill="#dc3545" font-weight="600">BD</text>

            <!-- Segment labels -->
            <text x="130" y="115" font-size="12" fill="#007bff">AO</text>
            <text x="200" y="175" font-size="12" fill="#007bff">OC</text>
            <text x="220" y="115" font-size="12" fill="#dc3545">BO</text>
            <text x="110" y="175" font-size="12" fill="#dc3545">OD</text>
          </svg>
        </div>

        <div class="diagonals-explanation">
          <div class="properties-grid">
            <div class="property-card">
              <div class="property-icon blue">📏</div>
              <div class="property-content">
                <h4>Діагональ <span class="math-expression">AC</span></h4>
                <div class="formula-display"><span class="math-expression">AO = OC</span></div>
              </div>
            </div>

            <div class="property-card">
              <div class="property-icon red">📏</div>
              <div class="property-content">
                <h4>Діагональ <span class="math-expression">BD</span></h4>
                <div class="formula-display"><span class="math-expression">BO = OD</span></div>
              </div>
            </div>
          </div>

          <div class="intersection-info">
            <div class="info-card">
              <span class="icon">🎯</span>
              <h4>Точка перетину</h4>
              <p>Діагоналі <span class="math-expression">AC</span> і <span class="math-expression">BD</span> перетинаються в точці <span class="math-expression">O</span>, яка ділить кожну діагональ навпіл</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5">
      <h2>5️⃣ Висота паралелограма</h2>

      <div class="definition-box">
        <strong>Означення:</strong><br>
        Висотою паралелограма називають перпендикуляр, опущений з будь-якої точки прямої, яка містить сторону паралелограма, на пряму, що містить протилежну сторону.
      </div>

      <div class="heights-demo">
        <div class="visual-container">
          <svg width="450" height="350" viewBox="0 0 450 350" class="interactive-svg">
            <!-- Extended lines for parallelogram sides -->
            <line x1="50" y1="120" x2="350" y2="120" stroke="#e9ecef" stroke-width="2" stroke-dasharray="5,5" />
            <line x1="60" y1="50" x2="260" y2="250" stroke="#e9ecef" stroke-width="2" stroke-dasharray="5,5" />

            <!-- Parallelogram ABCD -->
            <polygon points="100,120 300,120 260,220 60,220"
                    fill="rgba(111, 66, 193, 0.1)"
                    stroke="#6f42c1"
                    stroke-width="3"
                    class="parallelogram-shape" />

            <!-- Heights to sides BC and AD -->
            <line x1="140" y1="120" x2="140" y2="221"
                  stroke="#28a745"
                  stroke-width="3"
                   />
            <line x1="220" y1="280" x2="220" y2="220"
                  stroke="#28a745"
                  stroke-width="3"
                   />

            <!-- Heights to sides AB and CD -->
            <line x1="80" y1="170" x2="280" y2="170"
                  stroke="#dc3545"
                  stroke-width="3"
                   />
            <line x1="330" y1="70" x2="230" y2="70"
                  stroke="#dc3545"
                  stroke-width="3"
                   />

            <!-- Right angle markers -->
            <g class="right-angle-markers">
              <!-- For green heights -->
              <path d="M 135,120 L 135,115 L 145,115" fill="none" stroke="#28a745" stroke-width="2"/>
              <path d="M 215,220 L 215,225 L 225,225" fill="none" stroke="#28a745" stroke-width="2"/>

              <!-- For red heights -->
              <path d="M 180,165 L 180,170 L 175,170" fill="none" stroke="#dc3545" stroke-width="2"/>
              <path d="M 230,75 L 230,70 L 235,70" fill="none" stroke="#dc3545" stroke-width="2"/>
            </g>

            <!-- Height points -->
            <circle cx="140" cy="60" r="4" fill="#007bff"  />
            <circle cx="220" cy="280" r="4" fill="#007bff"  />
            <circle cx="80" cy="170" r="4" fill="#007bff"  />
            <circle cx="330" cy="70" r="4" fill="#007bff"  />

            <!-- Point labels -->
            <text x="125" y="55" font-size="12" fill="#007bff" font-weight="600">F</text>
            <text x="205" y="295" font-size="12" fill="#007bff" font-weight="600">E</text>
            <text x="65" y="165" font-size="12" fill="#007bff" font-weight="600">K</text>
            <text x="335" y="65" font-size="12" fill="#007bff" font-weight="600">M</text>

            <!-- Vertices -->
            <circle cx="100" cy="120" r="6" fill="#ffc107"  />
            <circle cx="300" cy="120" r="6" fill="#ffc107"  />
            <circle cx="260" cy="220" r="6" fill="#ffc107"  />
            <circle cx="60" cy="220" r="6" fill="#ffc107"  />

            <!-- Vertex labels -->
            <text x="85" y="110" font-size="18" font-weight="bold" fill="#2c3e50">A</text>
            <text x="305" y="110" font-size="18" font-weight="bold" fill="#2c3e50">B</text>
            <text x="265" y="240" font-size="18" font-weight="bold" fill="#2c3e50">C</text>
            <text x="45" y="240" font-size="18" font-weight="bold" fill="#2c3e50">D</text>

            <!-- Height labels -->
            <text x="145" y="95" font-size="12" fill="#28a745" font-weight="600">AF</text>
            <text x="225" y="245" font-size="12" fill="#28a745" font-weight="600">CE</text>
            <text x="125" y="180" font-size="12" fill="#dc3545" font-weight="600">AK</text>
            <text x="275" y="80" font-size="12" fill="#dc3545" font-weight="600">BM</text>
          </svg>
        </div>

        <div class="heights-explanation">
          <div class="heights-properties">
            <div class="property-group">
              <div class="group-header green">
                <span class="icon">📏</span>
                <h4>Висоти до сторін <span class="math-expression">BC</span> і <span class="math-expression">AD</span></h4>
              </div>
              <div class="formula-display"><span class="math-expression">AF = QE</span></div>
              <p>Всі висоти, проведені до однієї пари паралельних сторін, рівні</p>
            </div>

            <div class="property-group">
              <div class="group-header red">
                <span class="icon">📏</span>
                <h4>Висоти до сторін <span class="math-expression">AB</span> і <span class="math-expression">CD</span></h4>
              </div>
              <div class="formula-display"><span class="math-expression">BM = PN = CK</span></div>
              <p>Усі точки однієї з двох паралельних прямих рівновіддалені від другої прямої</p>
            </div>
          </div>

          <div class="example-box">
            <strong>💡 Важлива властивість:</strong> Усі точки однієї з двох паралельних прямих рівновіддалені від другої прямої, тому всі висоти, проведені до однієї пари паралельних сторін, рівні.
          </div>
        </div>
      </div>
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Паралелограм має важливі властивості: протилежні сторони рівні, протилежні кути рівні, діагоналі точкою перетину діляться навпіл. Розуміння цих властивостей є основою для вивчення інших видів чотирикутників.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Render all math expressions on component mount
onMounted(() => {
  // Find all elements with math content and render them
  const mathElements = document.querySelectorAll('.math-expression')
  mathElements.forEach(element => {
    const expression = element.textContent
    try {
      katex.render(expression, element, {
        throwOnError: false,
        displayMode: element.classList.contains('math-display')
      })
    } catch (error) {
      console.error('KaTeX rendering error:', error)
    }
  })
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section {
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 12px;
  border-left: 6px solid #dee2e6;
  background: #f8f9fa;
  transition: all 0.3s ease;
}

.section-1 {
  border-left-color: #6f42c1;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.section-2 {
  border-left-color: #20c997;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
}

.section-3 {
  border-left-color: #007bff;
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
}

.section-4 {
  border-left-color: #fd7e14;
  background: linear-gradient(135deg, #f8f9fa 0%, #fff3e0 100%);
}

.section-5 {
  border-left-color: #dc3545;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffebee 100%);
}

.section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 3px solid rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  gap: 10px;
}

.section h3 {
  color: #34495e;
  font-size: 1.4em;
  margin: 25px 0 15px 0;
}

/* Definition and theorem boxes */
.definition-box {
  background: linear-gradient(135deg, white 0%, #f8f9fa 100%);
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
  border: 2px solid #e9ecef;
  border-left: 6px solid #6c757d;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  font-size: 1.1em;
  line-height: 1.6;
}

.theorem-box {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 25px 0;
  border: 2px solid #f39c12;
  box-shadow: 0 4px 6px rgba(243, 156, 18, 0.1);
}

.theorem-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1em;
  color: #2c3e50;
}

/* Interactive SVG styling */
.interactive-svg {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Layout components */
.parallelogram-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
  align-items: start;
}

.visual-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.explanation-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.property-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  border: 2px solid #e9ecef;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
}

.property-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.property-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.parallel-pair {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 6px;
}

.parallel-indicator {
  width: 20px;
  height: 4px;
  border-radius: 2px;
}

.parallel-indicator.red {
  background: #dc3545;
}

.parallel-indicator.blue {
  background: #007bff;
}

/* Formula styling */
.formula-inline {
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
  font-weight: 600;
  color: #2c3e50;
  background: rgba(255,255,255,0.8);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
}

.formula-display {
  font-family: 'Times New Roman', serif;
  font-size: 1.3em;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  background: rgba(255,255,255,0.9);
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid #e9ecef;
  margin: 10px 0;
}

.formula-result {
  font-family: 'Times New Roman', serif;
  font-size: 1.4em;
  font-weight: bold;
  color: #28a745;
  text-align: center;
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #28a745;
  margin: 15px 0;
}

/* Proof section styling */
.proof-section {
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin: 25px 0;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.proof-title {
  color: #2c3e50;
  font-size: 1.3em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e9ecef;
}

.proof-visual {
  display: flex;
  justify-content: center;
  margin: 25px 0;
}

.proof-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #007bff;
}

.step-number {
  background: #007bff;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1em;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.proof-conditions {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.proof-conditions li {
  background: white;
  padding: 8px 12px;
  margin: 5px 0;
  border-radius: 6px;
  border-left: 3px solid #20c997;
}

.triangles-comparison {
  display: flex;
  gap: 15px;
  margin: 10px 0;
}

.triangle-info {
  flex: 1;
  text-align: center;
}

.triangle-label {
  padding: 8px 15px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1.1em;
}

.triangle-label.orange {
  background: rgba(253, 126, 20, 0.2);
  color: #fd7e14;
  border: 2px solid #fd7e14;
}

.triangle-label.red {
  background: rgba(220, 53, 69, 0.2);
  color: #dc3545;
  border: 2px solid #dc3545;
}

.conclusion-box {
  background: #d1ecf1;
  border: 2px solid #bee5eb;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  font-size: 1.2em;
  color: #0c5460;
  margin: 15px 0;
}

/* Angles demo */
.angles-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
  align-items: start;
}

.angles-explanation {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.angle-pairs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.angle-pair {
  background: white;
  border-radius: 10px;
  padding: 20px;
  border: 2px solid;
}

.angle-pair.green {
  border-color: #28a745;
  background: linear-gradient(135deg, white 0%, rgba(40, 167, 69, 0.05) 100%);
}

.angle-pair.red {
  border-color: #dc3545;
  background: linear-gradient(135deg, white 0%, rgba(220, 53, 69, 0.05) 100%);
}

.pair-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-weight: 600;
}

.proof-brief {
  background: #fff3cd;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #ffc107;
}

/* Diagonals demo */
.diagonals-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
  align-items: start;
}

.diagonals-explanation {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.properties-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.property-icon {
  font-size: 2em;
  margin-bottom: 10px;
}

.property-icon.blue {
  color: #007bff;
}

.property-icon.red {
  color: #dc3545;
}


.intersection-info {
  background: white;
  border-radius: 10px;
  padding: 20px;
  border: 2px solid #ffc107;
}

.info-card {
  text-align: center;
}

.info-card .icon {
  font-size: 2em;
  margin-bottom: 10px;
  display: block;
}

/* Heights demo */
.heights-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
  align-items: start;
}

.heights-explanation {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.heights-properties {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.property-group {
  background: white;
  border-radius: 10px;
  padding: 20px;
  border: 2px solid #e9ecef;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-weight: 600;
}

.group-header.green {
  color: #28a745;
}

.group-header.red {
  color: #dc3545;
}


/* Example and conclusion boxes */
.example-box {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  border: 2px solid #f39c12;
  border-left: 6px solid #f39c12;
  box-shadow: 0 4px 8px rgba(243, 156, 18, 0.1);
  font-size: 1em;
  line-height: 1.5;
}

.conclusion {
  text-align: center;
  margin: 50px 0;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.conclusion h3 {
  color: white;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.conclusion p {
  font-size: 1.1em;
  line-height: 1.6;
}

/* Icon styling */
.icon {
  font-size: 1.5em;
  display: inline-block;
}

/* Responsive design */
@media (max-width: 1024px) {
  .parallelogram-demo,
  .angles-demo,
  .diagonals-demo,
  .heights-demo {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .triangles-comparison {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  .section {
    padding: 20px;
    margin-bottom: 30px;
  }

  .section h2 {
    font-size: 1.5em;
  }

  .interactive-svg {
    max-width: 100%;
    height: auto;
  }

  .proof-steps {
    gap: 15px;
  }

  .step-item {
    padding: 15px;
  }

  .step-number {
    width: 30px;
    height: 30px;
    font-size: 1em;
  }

  .properties-grid {
    grid-template-columns: 1fr;
  }

  .angle-pairs {
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 15px;
  }

  .definition-box,
  .theorem-box {
    padding: 15px;
    font-size: 1em;
  }

  .formula-display {
    font-size: 1.1em;
    padding: 8px 12px;
  }

  .step-item {
    flex-direction: column;
    gap: 10px;
  }

  .step-number {
    align-self: flex-start;
  }

  .visual-container {
    padding: 10px;
  }

  .property-card,
  .property-group {
    padding: 15px;
  }
}


/* Math expression styles */
.math-expression {
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
  color: #2c3e50;
  display: inline-block;
  margin: 0 2px;
}

.math-display {
  display: block;
  text-align: center;
  margin: 15px 0;
  font-size: 1.3em;
}

/* KaTeX overrides */
.katex {
  font-size: 1.1em !important;
}

.katex-display {
  margin: 1em 0;
}

/* Print styles */
@media print {
  .section {
    page-break-inside: avoid;
    background: white !important;
    border: 1px solid #000;
  }

  .interactive-svg {
    box-shadow: none;
  }

  .conclusion {
    background: #f8f9fa !important;
    color: #000 !important;
  }

  .math-expression {
    color: #000 !important;
  }
}
</style>