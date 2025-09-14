<template>
  <div class="container">
    <!-- Lesson Header -->
    <div class="lesson-header">
      <h1 style="color: white">🧮 Конспект уроку: Раціональні дроби</h1>
      <div class="lesson-objective">
        <h3>🎯 Мета уроку:</h3>
        <p>З'ясувати відмінності між цілими та дробовими виразами, дати означення раціонального дробу та навчитися знаходити допустимі значення змінних.</p>
      </div>
    </div>

    <section id="section1" class="section section-1">
      <h2>1️⃣ Вирази: Цілі та Дробові</h2>

      <div class="intro-note">
        <p>У курсі алгебри 7 класу ми вже розглядали цілі вирази.</p>
      </div>

      <div class="definition-box">
        <strong>Цілі вирази</strong> — це вирази, що складені із чисел і змінних за допомогою дій додавання, віднімання, множення та ділення на відмінне від нуля число.
      </div>

      <div class="examples-grid">
        <div class="example-card">
          <span class="icon">🔢</span>
          <h4>Приклади цілих виразів</h4>
          <div class="math-examples">
            <div v-html="renderMath('x - y')"></div>
            <div v-html="renderMath('a + \\frac{b}{5}')"></div>
            <div v-html="renderMath('m^2 + 2m + n^2')"></div>
            <div v-html="renderMath('\\frac{1}{3}x - 4')"></div>
            <div v-html="renderMath('x : 5')"></div>
            <div class="note">або <span v-html="renderMath('\\frac{x}{5}')"></span></div>
          </div>
        </div>
      </div>

      <div class="definition-box">
        <strong>Дробові вирази</strong> відрізняються від цілих тим, що вони містять ділення на вираз зі змінними.
      </div>

      <div class="examples-grid">
        <div class="example-card">
          <span class="icon">➗</span>
          <h4>Приклади дробових виразів</h4>
          <div class="math-examples">
            <div v-html="renderMath('\\frac{2x + a}{b}')"></div>
            <div v-html="renderMath('(x - y) : (x + y)')"></div>
            <div v-html="renderMath('\\frac{a}{b - c}')"></div>
            <div v-html="renderMath('\\frac{5}{x}')"></div>
          </div>
        </div>
      </div>

      <div class="visual-grid">
        <div class="info-card">
          <span class="icon">🧮</span>
          <h4>Раціональні вирази</h4>
          <p>Спільна назва для цілих і дробових виразів</p>
        </div>
        <div class="info-card">
          <span class="icon">✅</span>
          <h4>Допустимі значення</h4>
          <p>Значення змінних, при яких вираз має зміст</p>
        </div>
        <div class="info-card">
          <span class="icon">🚫</span>
          <h4>Обмеження</h4>
          <p>Не допускається ділення на нуль</p>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>2️⃣ Раціональні вирази</h2>

      <div class="concept-box">
        <ul>
          <li>Цілі та дробові вирази разом називають <strong>раціональними виразами</strong>.</li>
          <li>Якщо в раціональному виразі замінити змінні числами, то отримаємо числовий вираз.</li>
          <li>Проте ця заміна можлива лише тоді, коли вона <strong>не приводить до ділення на нуль</strong>.</li>
        </ul>
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>3️⃣ Допустимі значення змінних</h2>

      <div class="definition-box">
        <strong>Означення:</strong> Допустимими значеннями змінних, що входять до раціонального виразу, називають усі значення змінних, при яких цей вираз має зміст.
      </div>

      <div class="rules-grid">
        <div class="rule-card">
          <span class="icon">✅</span>
          <h4>Для цілих виразів</h4>
          <p>Допустимими значеннями змінних є всі числа</p>
        </div>
        <div class="rule-card">
          <span class="icon">🚫</span>
          <h4>Для дробових виразів</h4>
          <p>Знаменник не може дорівнювати нулю</p>
        </div>
      </div>

      <div class="example-section">
        <h3>📚 Приклади</h3>

        <div class="example-box">
          <h4>Приклад 1:</h4>
          <p>У виразі <span v-html="renderMath('\\frac{2}{a - 1}')"></span> допустимими значеннями для змінної <span v-html="renderMath('a')"></span> є всі числа, крім <span v-html="renderMath('1')"></span>.</p>
          <p>При <span v-html="renderMath('a=1')"></span> вираз не має змісту, тобто числового значення цього виразу при <span v-html="renderMath('a=1')"></span> не існує.</p>
        </div>

        <div class="problem-box">
          <h4>Приклад 2:</h4>
          <p>Знайдіть допустимі значення змінної для виразу:</p>
          <div class="problem-formula">
            <div v-html="renderMath('\\frac{1}{x} + \\frac{3}{x - 5}')"></div>
          </div>

          <div class="solution-steps">
            <div class="step">
              <span class="step-number">1</span>
              <p>Дріб <span v-html="renderMath('\\frac{1}{x}')"></span> має зміст при всіх значеннях <span v-html="renderMath('x')"></span>, крім <span v-html="renderMath('x = 0')"></span>.</p>
            </div>
            <div class="step">
              <span class="step-number">2</span>
              <p>Дріб <span v-html="renderMath('\\frac{3}{x - 5}')"></span> має зміст при всіх значеннях <span v-html="renderMath('x')"></span>, крім <span v-html="renderMath('x = 5')"></span>.</p>
            </div>
            <div class="conclusion-step">
              <strong>Висновок:</strong> допустимими значеннями змінної є всі числа, відмінні від <span v-html="renderMath('0')"></span> і <span v-html="renderMath('5')"></span>.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>4️⃣ Раціональні дроби</h2>

      <div class="definition-box">
        <strong>Означення:</strong> Раціональний дріб — це дріб, чисельником і знаменником якого є многочлени.
      </div>

      <div class="note-box">
        <p>Нагадаємо, що числа й одночлени вважають окремими випадками многочленів.</p>
      </div>

      <div class="examples-grid">
        <div class="example-card">
          <span class="icon">🔢</span>
          <h4>Приклади раціональних дробів</h4>
          <div class="math-examples">
            <div v-html="renderMath('\\frac{x}{7}')"></div>
            <div v-html="renderMath('\\frac{x^2 + xy}{x}')"></div>
            <div v-html="renderMath('\\frac{1}{2a}')"></div>
            <div v-html="renderMath('\\frac{a+b}{5}')"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5">
      <h2>5️⃣ Окремий випадок раціональних виразів</h2>

      <div class="concept-box">
        <ul>
          <li>Раціональні дроби є окремим видом <strong>раціональних виразів</strong>.</li>
          <li>Вони можуть бути як <strong>цілими виразами</strong>, так і <strong>дробовими</strong>.</li>
        </ul>
      </div>
    </section>

    <section id="section6" class="section section-6">
      <h2>6️⃣ Знаменник раціонального дробу</h2>

      <div class="important-box">
        <ul>
          <li>Знаменник раціонального дробу <strong>не може бути нульовим многочленом</strong>, тобто многочленом, який тотожно дорівнює нулю.</li>
          <li>Допустимими значеннями змінних, що входять до раціонального дробу, є всі значення змінних, при яких значення знаменника дробу не дорівнює нулю.</li>
        </ul>
      </div>
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Розуміння раціональних дробів та їх властивостей є основою для розв'язування складних алгебраїчних рівнянь та нерівностей у старших класах.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const renderMath = (expression) => {
  try {
    return katex.renderToString(expression, {
      throwOnError: false,
      displayMode: false
    })
  } catch (error) {
    console.error('KaTeX rendering error:', error)
    return expression
  }
}

onMounted(() => {
  // Ensure KaTeX styles are loaded
  console.log('AlgebraLesson component mounted')
})
</script>

<style scoped>
.lesson-header {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
}

.lesson-header h1 {
  font-size: 2.2em;
  margin-bottom: 20px;
}

.lesson-objective {
  background: rgba(255,255,255,0.2);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

.lesson-objective h3 {
  margin-bottom: 10px;
  font-size: 1.3em;
}

.intro-note {
  background: #e3f2fd;
  padding: 15px;
  border-radius: 6px;
  margin: 20px 0;
  border-left: 4px solid #2196f3;
  font-style: italic;
}

.concept-box {
  background: #fff3e0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #ff9800;
}

.concept-box ul {
  margin: 0;
  padding-left: 20px;
}

.concept-box li {
  margin: 10px 0;
  line-height: 1.6;
}

.note-box {
  background: #f3e5f5;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
  border-left: 4px solid #9c27b0;
  font-style: italic;
}

.note {
  font-size: 0.9em;
  color: #666;
  margin-top: 5px;
}

.important-box {
  background: #ffebee;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #f44336;
}

.important-box ul {
  margin: 0;
  padding-left: 20px;
}

.important-box li {
  margin: 10px 0;
  line-height: 1.6;
}

.example-section {
  margin: 30px 0;
}

.problem-formula {
  text-align: center;
  font-size: 1.4em;
  margin: 20px 0;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px solid #dee2e6;
}

.conclusion-step {
  background: #d4edda;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
  border-left: 4px solid #28a745;
}

.concept-diagram {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
  margin: 25px 0;
}

.main-concept {
  text-align: center;
}

.main-concept h3 {
  font-size: 1.8em;
  margin-bottom: 25px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.subconcepts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.subconcept {
  background: rgba(255,255,255,0.2);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.subconcept h4 {
  margin: 10px 0;
  font-size: 1.2em;
}

.subconcept p {
  font-size: 0.9em;
  line-height: 1.5;
}

.nested-concept {
  background: rgba(255,255,255,0.3);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 3px solid rgba(255,255,255,0.5);
}

.nested-concept h5 {
  margin: 5px 0;
  font-size: 1em;
}

.nested-concept p {
  font-size: 0.85em;
  margin: 5px 0;
}

.section-diagram {
  background: #f8f9fa;
  border-left-color: #17a2b8;
}

.section {
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 6px;
  border-left: 4px solid #dee2e6;
}

.section-1 {
  background: #f8f9fa;
  border-left-color: #007bff;
}

.section-2 {
  background: #f8f9fa;
  border-left-color: #28a745;
}

.section-3 {
  background: #f8f9fa;
  border-left-color: #ffc107;
}

.section-4 {
  background: #f8f9fa;
  border-left-color: #dc3545;
}

.section-5 {
  background: #f8f9fa;
  border-left-color: #6f42c1;
}

.section h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255,255,255,0.5);
}

.section h3 {
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

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.example-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.example-card h4 {
  color: #495057;
  margin-bottom: 15px;
}

.math-examples {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.2em;
}

.math-examples > div {
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
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
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.info-card:hover {
  border-color: #dee2e6;
  transform: translateY(-2px);
}

.icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.rational-fraction-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
  color: white;
}

.rational-fraction-box .definition-box {
  background: rgba(255,255,255,0.95);
  color: #2c3e50;
}

.problem-box {
  background: white;
  padding: 25px;
  border-radius: 8px;
  margin: 20px 0;
  border: 2px solid #e3f2fd;
}

.solution-steps {
  margin-top: 20px;
}

.step {
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 6px;
}

.step-number {
  background: #007bff;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-weight: bold;
}

.construction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.construction-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.construction-card h4 {
  color: #495057;
  margin-bottom: 15px;
}

.property-box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
  color: white;
}

.main-formula {
  text-align: center;
  font-size: 1.3em;
  margin: 20px 0;
  padding: 15px;
  background: rgba(255,255,255,0.2);
  border-radius: 8px;
}

.operation-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.operation-card h4 {
  color: #495057;
  margin-bottom: 15px;
}

.sign-properties {
  background: #fff3cd;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #ffeaa7;
}

.sign-formulas {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.sign-formulas > div {
  text-align: center;
  font-size: 1.1em;
  padding: 8px;
  background: white;
  border-radius: 4px;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px 0;
}

.rule-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.rule-card h4 {
  color: #495057;
  margin-bottom: 15px;
}

.examples-section {
  margin: 30px 0;
}

.step-by-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.simplification {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.arrow {
  font-size: 1.5em;
  color: #6c757d;
}

.method-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
  color: white;
}

.transformation-steps {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.transformation-step {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255,255,255,0.2);
  padding: 15px;
  border-radius: 8px;
}

.result-step {
  text-align: center;
  font-size: 1.2em;
  background: rgba(255,255,255,0.3);
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
}

.common-denominator-section {
  margin: 30px 0;
}

.detailed-example {
  background: #e8f5e8;
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
  border: 2px solid #c3e6c3;
}

.example-solution {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
}

.problem {
  font-size: 1.3em;
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 2px solid #28a745;
}

.solution-arrow {
  font-size: 1.5em;
  color: #28a745;
  font-weight: bold;
}

.result {
  font-size: 1.2em;
  background: #d4edda;
  padding: 15px;
  border-radius: 8px;
  border: 2px solid #28a745;
}

.example-box {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
  border: 1px solid #ffeaa7;
  border-left: 4px solid #f39c12;
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

  .examples-grid, .visual-grid, .construction-grid, .rules-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .transformation-step {
    flex-direction: column;
    gap: 10px;
  }

  .section {
    padding: 20px;
  }
}
</style>