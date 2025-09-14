<template>
  <div class="container">
    <!-- Lesson Header -->
    <div class="lesson-header">
      <h1 style="color: white">🧮 Конспект уроку: Тотожні перетворення раціональних виразів</h1>
      <div class="lesson-objective">
        <h3>🎯 Мета уроку:</h3>
        <p>Поглибити розуміння тотожно рівних виразів та тотожностей, а також вивчити основну властивість раціонального дробу.</p>
      </div>
    </div>

    <section id="section1" class="section section-1">
      <h2>1️⃣ Які вирази називають тотожно рівними?</h2>

      <div class="definition-box">
        <strong>Означення:</strong> Вирази, відповідні значення яких рівні при будь-яких допустимих значеннях змінних, що в них входять, називають <strong>тотожно рівними</strong>.
      </div>

      <div class="example-section">
        <h3>📚 Приклад тотожності</h3>
        <div class="example-box">
          <p>Рівність <span v-html="renderMath('3a \\cdot 5 = 15a')"></span> є тотожністю, оскільки вона виконується при будь-яких значеннях <span v-html="renderMath('a')"></span>.</p>
        </div>
      </div>

      <div class="concept-box">
        <h4>🔍 Уточнення про допустимі значення</h4>
        <p>Рівність може бути тотожно рівною, навіть якщо вона виконується не при будь-яких значеннях змінних, а лише при <strong>допустимих значеннях</strong>.</p>
      </div>

      <div class="detailed-example">
        <h4>📋 Приклад з обмеженнями</h4>
        <div class="problem-formula">
          <div v-html="renderMath('\\frac{a^2 - 4}{a - 2} = a+2')"></div>
        </div>
        <div class="explanation-box">
          <p>Ця рівність є тотожністю, оскільки вона виконується при всіх допустимих значеннях <span v-html="renderMath('a')"></span>, тобто при всіх <span v-html="renderMath('a')"></span>, крім <span v-html="renderMath('a = 2')"></span>.</p>
        </div>
      </div>

      <div class="visual-grid">
        <div class="info-card">
          <span class="icon">✅</span>
          <h4>Тотожно рівні вирази</h4>
          <p>Мають однакові значення при всіх допустимих значеннях змінних</p>
        </div>
        <div class="info-card">
          <span class="icon">🎯</span>
          <h4>Допустимі значення</h4>
          <p>Значення змінних, при яких вираз має математичний зміст</p>
        </div>
        <div class="info-card">
          <span class="icon">🚫</span>
          <h4>Обмеження</h4>
          <p>Значення, при яких вираз не має змісту (наприклад, ділення на нуль)</p>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>2️⃣ Що називають тотожністю?</h2>

      <div class="definition-box">
        <strong>Означення:</strong> Рівність, яка виконується при будь-яких допустимих значеннях змінних, що в неї входять, називають <strong>тотожністю</strong>.
      </div>

      <div class="example-section">
        <h3>📚 Приклад тотожності</h3>
        <div class="example-box">
          <div class="problem-formula">
            <div v-html="renderMath('a^2 = a \\cdot a')"></div>
          </div>
          <p>Ця рівність є тотожністю, бо вона виконується для будь-якого допустимого значення <span v-html="renderMath('a')"></span>.</p>
        </div>
      </div>

      <div class="concept-box">
        <h4>🔄 Тотожні перетворення</h4>
        <p><strong>Тотожні перетворення</strong> — це заміна одного виразу іншим, який тотожно дорівнює йому.</p>
      </div>

      <div class="transformation-examples">
        <h3>🔧 Приклади тотожних перетворень</h3>
        <div class="transformation-grid">
          <div class="transformation-card">
            <span class="icon">➕</span>
            <h4>Розкриття дужок</h4>
            <div class="formula-example">
              <div v-html="renderMath('a(b + c) = ab + ac')"></div>
            </div>
          </div>
          <div class="transformation-card">
            <span class="icon">🔢</span>
            <h4>Винесення спільного множника</h4>
            <div class="formula-example">
              <div v-html="renderMath('ab + ac = a(b + c)')"></div>
            </div>
          </div>
          <div class="transformation-card">
            <span class="icon">📐</span>
            <h4>Формули скороченого множення</h4>
            <div class="formula-example">
              <div v-html="renderMath('a^2 - b^2 = (a-b)(a+b)')"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>3️⃣ Основна властивість раціонального дробу</h2>

      <div class="property-box">
        <h3>📜 Формулювання властивості</h3>
        <div class="definition-box">
          Якщо чисельник і знаменник раціонального дробу помножити на один і той самий ненульовий многочлен, то отримаємо дріб, тотожно рівний даному.
        </div>
      </div>

      <div class="formula-section">
        <h3>🧮 Математичний запис</h3>
        <div class="main-formula">
          <div v-html="renderMath('\\frac{A}{B} = \\frac{A \\cdot C}{B \\cdot C}')"></div>
        </div>
        <div class="formula-explanation">
          <p>де <span v-html="renderMath('A')"></span>, <span v-html="renderMath('B')"></span> і <span v-html="renderMath('C')"></span> — многочлени, причому многочлени <span v-html="renderMath('B')"></span> і <span v-html="renderMath('C')"></span> ненульові.</p>
        </div>
      </div>

      <div class="operation-section">
        <h3>✂️ Скорочення дробу</h3>
        <div class="concept-box">
          <p>Відповідно до цієї властивості, вираз <span v-html="renderMath('\\frac{A \\cdot C}{B \\cdot C}')"></span> можна замінити на тотожно рівний йому дріб <span v-html="renderMath('\\frac{A}{B}')"></span>.</p>
          <p>Таке тотожне перетворення називають <strong>скороченням дробу на множник <span v-html="renderMath('C')"></span></strong>.</p>
        </div>
      </div>

      <div class="detailed-example">
        <h4>📋 Приклад скорочення дробу</h4>
        <div class="step-by-step-solution">
          <div class="solution-step">
            <span class="step-label">Початковий дріб:</span>
            <div class="step-formula">
              <div v-html="renderMath('\\frac{6a^3b^2}{24a^2b^4}')"></div>
            </div>
          </div>

          <div class="arrow-down">↓</div>

          <div class="solution-step">
            <span class="step-label">Виділяємо спільний множник:</span>
            <div class="step-formula">
              <div v-html="renderMath('\\frac{6a^2b^2 \\cdot a}{6a^2b^2 \\cdot 4b^2}')"></div>
            </div>
          </div>

          <div class="arrow-down">↓</div>

          <div class="solution-step">
            <span class="step-label">Скорочуємо на <span v-html="renderMath('6a^2b^2')"></span>:</span>
            <div class="step-formula result-formula">
              <div v-html="renderMath('\\frac{a}{4b^2}')"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>4️⃣ Властивості знаків раціонального дробу</h2>

      <div class="important-box">
        <h3>⚡ Важливі властивості</h3>
        <p>З основної властивості дробу також випливають наступні рівності:</p>
      </div>

      <div class="sign-properties-grid">
        <div class="property-card">
          <h4>🔄 Зміна знаків</h4>
          <div class="formula-set">
            <div class="formula-item">
              <div v-html="renderMath('\\frac{A}{B} = \\frac{-A}{-B}')"></div>
            </div>
          </div>
          <p class="property-explanation">Одночасна зміна знаків чисельника і знаменника не змінює значення дробу</p>
        </div>

        <div class="property-card">
          <h4>➖ Винесення мінуса</h4>
          <div class="formula-set">
            <div class="formula-item">
              <div v-html="renderMath('\\frac{-A}{B} = \\frac{A}{-B} = -\\frac{A}{B}')"></div>
            </div>
          </div>
          <p class="property-explanation">Мінус перед чисельником або знаменником можна винести перед дробом</p>
        </div>
      </div>

      <div class="visual-representation">
        <h3>🎨 Візуальне представлення властивостей знаків</h3>
        <div class="visual-grid">
          <div class="visual-card">
            <span class="icon">➕</span>
            <h4>Позитивний дріб</h4>
            <div v-html="renderMath('\\frac{+A}{+B} = +\\frac{A}{B}')"></div>
          </div>
          <div class="visual-card">
            <span class="icon">➖</span>
            <h4>Негативний дріб (варіант 1)</h4>
            <div v-html="renderMath('\\frac{-A}{+B} = -\\frac{A}{B}')"></div>
          </div>
          <div class="visual-card">
            <span class="icon">➖</span>
            <h4>Негативний дріб (варіант 2)</h4>
            <div v-html="renderMath('\\frac{+A}{-B} = -\\frac{A}{B}')"></div>
          </div>
          <div class="visual-card">
            <span class="icon">➕</span>
            <h4>Подвійний мінус = плюс</h4>
            <div v-html="renderMath('\\frac{-A}{-B} = +\\frac{A}{B}')"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5">
      <h2>5️⃣ Практичні застосування</h2>

      <div class="applications-grid">
        <div class="application-card">
          <span class="icon">🎯</span>
          <h4>Спрощення виразів</h4>
          <p>Використання основної властивості для скорочення дробів та спрощення складних виразів</p>
        </div>
        <div class="application-card">
          <span class="icon">⚖️</span>
          <h4>Розв'язування рівнянь</h4>
          <p>Тотожні перетворення допомагають зводити складні рівняння до простіших форм</p>
        </div>
        <div class="application-card">
          <span class="icon">📊</span>
          <h4>Аналіз функцій</h4>
          <p>Спрощення раціональних функцій для дослідження їх властивостей</p>
        </div>
      </div>

      <div class="practice-note">
        <h3>💡 Поради для практики</h3>
        <ul>
          <li>Завжди перевіряйте, чи не втрачаються допустимі значення при перетвореннях</li>
          <li>Пам'ятайте про обмеження: знаменник не може дорівнювати нулю</li>
          <li>Використовуйте властивості знаків для спрощення обчислень</li>
          <li>Практикуйтесь у розкладанні многочленів на множники</li>
        </ul>
      </div>
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Розуміння тотожних перетворень раціональних виразів є фундаментальним для успішного вивчення алгебри. Ці знання стануть основою для розв'язування складних алгебраїчних задач у старших класах.</p>
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
  console.log('IdenticalTransformationsLesson component mounted')
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

.example-section {
  margin: 30px 0;
}

.example-box {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
  border: 1px solid #ffeaa7;
  border-left: 4px solid #f39c12;
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

.explanation-box {
  background: #e8f5e8;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
  border-left: 4px solid #28a745;
}

.concept-box {
  background: #fff3e0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #ff9800;
}

.concept-box h4 {
  margin-bottom: 15px;
  color: #e65100;
}

.visual-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.info-card, .visual-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.info-card:hover, .visual-card:hover {
  border-color: #dee2e6;
  transform: translateY(-2px);
}

.icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.transformation-examples {
  margin: 30px 0;
}

.transformation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.transformation-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: transform 0.2s ease;
}

.transformation-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.formula-example {
  font-size: 1.2em;
  margin-top: 15px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 4px;
}

.property-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
  color: white;
}

.property-box .definition-box {
  background: rgba(255,255,255,0.95);
  color: #2c3e50;
}

.formula-section {
  margin: 30px 0;
}

.main-formula {
  text-align: center;
  font-size: 1.5em;
  margin: 20px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 2px solid #007bff;
}

.formula-explanation {
  text-align: center;
  font-style: italic;
  color: #6c757d;
  margin-top: 10px;
}

.operation-section {
  margin: 30px 0;
}

.detailed-example {
  background: #e8f5e8;
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
  border: 2px solid #c3e6c3;
}

.step-by-step-solution {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

.solution-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.step-label {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}

.step-formula {
  font-size: 1.3em;
  padding: 15px;
  background: white;
  border-radius: 8px;
  border: 2px solid #28a745;
  min-width: 200px;
  text-align: center;
}

.result-formula {
  background: #d4edda !important;
  border-color: #28a745 !important;
  font-weight: bold;
}

.arrow-down {
  font-size: 2em;
  color: #28a745;
  font-weight: bold;
}

.important-box {
  background: #ffebee;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #f44336;
}

.sign-properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.property-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.formula-set {
  margin: 15px 0;
}

.formula-item {
  font-size: 1.2em;
  margin: 10px 0;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 4px;
}

.property-explanation {
  font-style: italic;
  color: #6c757d;
  margin-top: 10px;
}

.visual-representation {
  margin: 30px 0;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.application-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: transform 0.2s ease;
}

.application-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.practice-note {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #2196f3;
}

.practice-note ul {
  margin: 15px 0;
  padding-left: 20px;
}

.practice-note li {
  margin: 8px 0;
  line-height: 1.6;
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

  .visual-grid, .transformation-grid, .sign-properties-grid, .applications-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .section {
    padding: 20px;
  }

  .step-by-step-solution {
    gap: 10px;
  }

  .step-formula {
    font-size: 1.1em;
    padding: 10px;
  }
}
</style>