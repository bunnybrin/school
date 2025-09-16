<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>1️⃣ Сутність двійкового кодування</h2>

      <div class="definition-box">
        <strong>Двійкове кодування</strong> — це процес кодування повідомлень з використанням сигналів лише двох видів.
        У сучасних комп'ютерах усі повідомлення кодуються послідовностями електричних сигналів двох видів, які умовно позначаються цифрами <span class="highlight">0</span> та <span class="highlight">1</span>.
      </div>

      <div class="definition-box">
        <strong>Двійковий код</strong> — повідомлення, отримане в результаті двійкового кодування.
      </div>

      <div class="visual-grid">
        <div class="info-card">
          <span class="icon">💡</span>
          <h4>Сигнал 0</h4>
          <p>Відсутність електричного сигналу</p>
        </div>
        <div class="info-card">
          <span class="icon">⚡</span>
          <h4>Сигнал 1</h4>
          <p>Наявність електричного сигналу</p>
        </div>
        <div class="info-card">
          <span class="icon">📡</span>
          <h4>Історичний приклад</h4>
          <p>Азбука Морзе (крапка та тире)</p>
        </div>
      </div>

      <div class="example-box">
        <strong>💡 Приклад:</strong> Азбука Морзе використовує два типи сигналів — коротку крапку та довге тире для кодування літер і цифр.
      </div>

      <div class="morse-demo">
        <h4>Азбука Морзе приклад:</h4>
        <div class="morse-examples">
          <div class="morse-letter">А: <span class="morse-code">•−</span></div>
          <div class="morse-letter">Б: <span class="morse-code">−•••</span></div>
          <div class="morse-letter">В: <span class="morse-code">•−−</span></div>
          <div class="morse-letter">SOS: <span class="morse-code">•••−−−•••</span></div>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>2️⃣ Основні одиниці вимірювання: Біт і Байт</h2>

      <div class="definition-box">
        <strong>Біт</strong> (англ. <em>binary digit</em> — двійкова цифра) — це одна цифра двійкового коду, 0 або 1. Це найменша одиниця вимірювання обсягу даних.
      </div>

      <div class="definition-box">
        <strong>Байт</strong> — це послідовність з восьми бітів. Позначається літерою "Б".
        <div class="formula-highlight">1 Б = 8 б</div>
      </div>

      <div class="bit-byte-visual">
        <div class="bit-demo">
          <h4>Біт</h4>
          <div class="bit-representation">
            <div class="bit">0</div>
            <div class="bit-label">або</div>
            <div class="bit">1</div>
          </div>
        </div>
        <div class="byte-demo">
          <h4>Байт (8 бітів)</h4>
          <div class="byte-representation">
            <div class="bit">1</div>
            <div class="bit">0</div>
            <div class="bit">1</div>
            <div class="bit">1</div>
            <div class="bit">0</div>
            <div class="bit">0</div>
            <div class="bit">0</div>
            <div class="bit">1</div>
          </div>
        </div>
      </div>

      <div class="power-of-two">
        <h4>Можливості одного байта:</h4>
        <div class="formula-box">
          <div class="formula">2<sup>8</sup> = 256 різних кодів</div>
          <p>Цієї кількості достатньо для кодування:</p>
          <ul>
            <li>Літер англійського та українського алфавітів</li>
            <li>Цифр 0-9</li>
            <li>Розділових знаків</li>
            <li>Інших символів (КОІ-8U, Windows-1251)</li>
          </ul>
        </div>
      </div>

      <div class="example-box">
        <strong>💡 Визначення:</strong> Довжина двійкового коду повідомлення (або обсяг даних) — це кількість бітів у двійковому коді цього повідомлення.
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>3️⃣ Двійкове кодування різних типів даних</h2>

      <h3>📝 а) Текстові дані</h3>
      <p>Для двійкового кодування тексту код кожного символа з таблиці кодів замінюється його двійковим кодом.</p>

      <div class="text-encoding-demo">
        <h4>Приклади кодування символів в Windows-1251:</h4>
        <div class="encoding-examples">
          <div class="char-example">
            <div class="character">'!'</div>
            <div class="arrow">→</div>
            <div class="decimal-code">код 33</div>
            <div class="arrow">→</div>
            <div class="binary-code">00100001</div>
          </div>
          <div class="char-example">
            <div class="character">'W'</div>
            <div class="arrow">→</div>
            <div class="decimal-code">код 103</div>
            <div class="arrow">→</div>
            <div class="binary-code">01100111</div>
          </div>
          <div class="char-example">
            <div class="character">'я'</div>
            <div class="arrow">→</div>
            <div class="decimal-code">код 255</div>
            <div class="arrow">→</div>
            <div class="binary-code">11111111</div>
          </div>
        </div>
      </div>

      <div class="encoding-comparison">
        <div class="encoding-method">
          <h4>Windows-1251</h4>
          <p>1 байт на символ</p>
          <div class="pros">✅ Швидке кодування</div>
        </div>
        <div class="encoding-method">
          <h4>Юнікод</h4>
          <p>1-6 байтів на символ</p>
          <div class="pros">✅ Підтримка всіх мов світу</div>
        </div>
      </div>

      <h3>🔢 б) Числові дані</h3>
      <p>Числа для двійкового кодування переводять у <span class="highlight">двійкову систему числення</span>, яка використовує лише цифри 0 та 1. Основою цієї системи є число 2.</p>

      <div class="number-conversion-section">
        <div class="conversion-method">
          <h4>Переведення з двійкової в десяткову:</h4>
          <div class="formula-box">
            <div class="conversion-example">
              <div class="binary-number">1011₂</div>
              <div class="equals">=</div>
              <div class="decimal-breakdown">1×2³ + 0×2² + 1×2¹ + 1×2⁰</div>
              <div class="equals">=</div>
              <div class="calculation">8 + 0 + 2 + 1</div>
              <div class="equals">=</div>
              <div class="result">11₁₀</div>
            </div>
          </div>
        </div>

        <div class="conversion-method">
          <h4>Переведення з десяткової у двійкову:</h4>
          <div class="formula-box">
            <div class="conversion-example">
              <div class="decimal-number">13₁₀</div>
              <div class="equals">=</div>
              <div class="power-breakdown">8 + 4 + 1</div>
              <div class="equals">=</div>
              <div class="power-notation">1×2³ + 1×2² + 0×2¹ + 1×2⁰</div>
              <div class="equals">=</div>
              <div class="result">1101₂</div>
            </div>
          </div>
        </div>
      </div>

      <div class="interactive-converter">
        <h4>🔄 Інтерактивний конвертер чисел:</h4>
        <div class="converter-container">
          <div class="input-group">
            <label>Десяткове число:</label>
            <input v-model="decimalInput" @input="convertToByinary" type="number" min="0" max="255">
          </div>
          <div class="result-group">
            <label>Двійкове число:</label>
            <div class="binary-result">{{ binaryResult }}</div>
          </div>
          <div class="byte-visualization">
            <div class="byte-bits">
              <div v-for="(bit, index) in paddedBinary" :key="index"
                   :class="['bit-display', { 'bit-one': bit === '1', 'bit-zero': bit === '0' }]">
                {{ bit }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="number-table">
        <h4>Приклади запису чисел:</h4>
        <table class="conversion-table">
          <thead>
            <tr>
              <th>Десяткова система</th>
              <th>Двійкова система</th>
              <th>Байт</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td><span class="byte-display">00000000</span></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td><span class="byte-display">00000001</span></td>
            </tr>
            <tr>
              <td>5</td>
              <td>101</td>
              <td><span class="byte-display">00000101</span></td>
            </tr>
            <tr>
              <td>10</td>
              <td>1010</td>
              <td><span class="byte-display">00001010</span></td>
            </tr>
            <tr>
              <td>15</td>
              <td>1111</td>
              <td><span class="byte-display">00001111</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>🎨 в) Графічні, звукові та відеодані</h3>
      <div class="multimedia-encoding">
        <div class="media-type">
          <span class="icon">🖼️</span>
          <h4>Графічні зображення</h4>
          <p>Алгоритм кодування залежить від типу зображення та глибини кольору:</p>
          <ul>
            <li><strong>1 біт</strong> — монохромний (чорно-білий)</li>
            <li><strong>4 біти</strong> — 16 кольорів</li>
            <li><strong>8 бітів</strong> — 256 кольорів</li>
            <li><strong>24 біти</strong> — 16,777,216 кольорів (True Color)</li>
          </ul>
        </div>
        <div class="media-type">
          <span class="icon">🔊</span>
          <h4>Звукові дані</h4>
          <p>Кодуються за допомогою алгоритмів, що враховують числові значення властивостей звуку:</p>
          <ul>
            <li>Частота дискретизації</li>
            <li>Глибина біта</li>
            <li>Кількість каналів</li>
          </ul>
        </div>
      </div>

      <div class="color-depth-demo">
        <h4>Демонстрація глибини кольору:</h4>
        <div class="color-examples">
          <div class="color-sample">
            <div class="color-box monochrome"></div>
            <p>1 біт<br>Монохромний</p>
          </div>
          <div class="color-sample">
            <div class="color-box low-color"></div>
            <p>4 біти<br>16 кольорів</p>
          </div>
          <div class="color-sample">
            <div class="color-box medium-color"></div>
            <p>8 бітів<br>256 кольорів</p>
          </div>
          <div class="color-sample">
            <div class="color-box true-color"></div>
            <p>24 біти<br>True Color</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>4️⃣ Кратні одиниці вимірювання</h2>

      <div class="definition-box">
        Для зручності вимірювання великих обсягів даних використовують кратні одиниці.
        Історично склалося, що в комп'ютерних системах використовуються степені числа 2.
      </div>

      <div class="units-hierarchy">
        <div class="unit-card">
          <h4>Кілобайт (кБ)</h4>
          <div class="formula">2¹⁰ Б = <strong>1024 байти</strong></div>
        </div>
        <div class="unit-card">
          <h4>Мегабайт (МБ)</h4>
          <div class="formula">2¹⁰ кБ = <strong>1024 кБ</strong></div>
          <div class="sub-formula">= 1 048 576 байтів</div>
        </div>
        <div class="unit-card">
          <h4>Гігабайт (ГБ)</h4>
          <div class="formula">2¹⁰ МБ = <strong>1024 МБ</strong></div>
        </div>
        <div class="unit-card">
          <h4>Терабайт (ТБ)</h4>
          <div class="formula">2¹⁰ ГБ = <strong>1024 ГБ</strong></div>
        </div>
      </div>

      <div class="pyramid-visual">
        <h4>Піраміда одиниць вимірювання:</h4>
        <div class="pyramid">
          <div class="pyramid-level level-4">ТБ</div>
          <div class="pyramid-level level-3">ГБ</div>
          <div class="pyramid-level level-2">МБ</div>
          <div class="pyramid-level level-1">кБ</div>
          <div class="pyramid-level level-0">Байт</div>
        </div>
      </div>

      <div class="practical-examples">
        <h4>Практичні приклади розмірів:</h4>
        <div class="size-examples">
          <div class="size-example">
            <span class="icon">📄</span>
            <div class="example-details">
              <strong>Текстовий документ</strong>
              <p>~50 кБ</p>
            </div>
          </div>
          <div class="size-example">
            <span class="icon">🖼️</span>
            <div class="example-details">
              <strong>Фотографія</strong>
              <p>~5 МБ</p>
            </div>
          </div>
          <div class="size-example">
            <span class="icon">🎵</span>
            <div class="example-details">
              <strong>Пісня MP3</strong>
              <p>~5 МБ</p>
            </div>
          </div>
          <div class="size-example">
            <span class="icon">🎬</span>
            <div class="example-details">
              <strong>Фільм HD</strong>
              <p>~4 ГБ</p>
            </div>
          </div>
        </div>
      </div>

      <div class="example-box">
        <strong>📊 Застосування:</strong> Ці одиниці використовуються для позначення розмірів файлів, ємності носіїв даних та обсягу даних, що передаються мережами.
      </div>
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Двійкове кодування — основа роботи всіх сучасних комп'ютерів! Розуміння принципів кодування інформації допомагає краще розуміти, як комп'ютери обробляють різні типи даних: від тексту до мультимедіа.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const decimalInput = ref(0)
const binaryResult = ref('0')

const convertToByinary = () => {
  const decimal = parseInt(decimalInput.value) || 0
  if (decimal >= 0 && decimal <= 255) {
    binaryResult.value = decimal.toString(2)
  }
}

const paddedBinary = computed(() => {
  return binaryResult.value.padStart(8, '0').split('')
})

// Initialize
convertToByinary()
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
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.morse-demo {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.morse-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.morse-letter {
  padding: 10px;
  background: #f8f9fa;
  border-radius: 4px;
  text-align: center;
}

.morse-code {
  font-family: monospace;
  font-size: 1.2em;
  color: #495057;
  font-weight: bold;
}

.bit-byte-visual {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  flex-wrap: wrap;
}

.bit-demo, .byte-demo {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  margin: 10px;
}

.bit-representation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.bit {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #007bff;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1.2em;
}

.bit-label {
  font-style: italic;
  color: #6c757d;
}

.byte-representation {
  display: flex;
  gap: 5px;
  margin-top: 15px;
  justify-content: center;
}

.power-of-two {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.formula-box {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 6px;
  margin: 15px 0;
  border: 1px solid #90caf9;
}

.formula {
  font-size: 1.4em;
  font-weight: bold;
  text-align: center;
  color: #1565c0;
  margin-bottom: 15px;
}

.formula-highlight {
  font-size: 1.2em;
  font-weight: bold;
  color: #1565c0;
  text-align: center;
  margin: 10px 0;
  padding: 10px;
  background: #e3f2fd;
  border-radius: 4px;
}

.text-encoding-demo {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.encoding-examples {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.char-example {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
  flex-wrap: wrap;
  gap: 10px;
}

.character {
  font-size: 1.5em;
  font-weight: bold;
  color: #495057;
  min-width: 40px;
  text-align: center;
}

.arrow {
  color: #6c757d;
  font-weight: bold;
}

.decimal-code {
  background: #fff3cd;
  padding: 5px 10px;
  border-radius: 4px;
  font-family: monospace;
}

.binary-code {
  background: #d4edda;
  padding: 5px 10px;
  border-radius: 4px;
  font-family: monospace;
  font-weight: bold;
}

.encoding-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.encoding-method {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.pros {
  margin-top: 10px;
  color: #28a745;
  font-weight: bold;
}

.number-conversion-section {
  margin: 30px 0;
}

.conversion-method {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.conversion-example {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  font-family: monospace;
  font-size: 1.1em;
}

.binary-number, .decimal-number, .result {
  background: #e3f2fd;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: bold;
  color: #1565c0;
}

.decimal-breakdown, .power-breakdown, .power-notation, .calculation {
  background: #fff3cd;
  padding: 8px 12px;
  border-radius: 4px;
  color: #856404;
}

.equals {
  font-size: 1.2em;
  font-weight: bold;
  color: #495057;
}

.interactive-converter {
  background: white;
  padding: 25px;
  border-radius: 6px;
  margin: 30px 0;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.converter-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
}

.input-group, .result-group {
  text-align: center;
}

.input-group label, .result-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #495057;
}

.input-group input {
  width: 100%;
  max-width: 200px;
  padding: 10px;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  font-size: 1.1em;
  text-align: center;
}

.input-group input:focus {
  outline: none;
  border-color: #007bff;
}

.binary-result {
  font-family: monospace;
  font-size: 1.4em;
  font-weight: bold;
  color: #007bff;
  background: #e3f2fd;
  padding: 10px;
  border-radius: 6px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.byte-visualization {
  grid-column: 1 / -1;
  margin-top: 20px;
}

.byte-bits {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-top: 10px;
}

.bit-display {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: bold;
  font-family: monospace;
}

.bit-one {
  background: #007bff;
  color: white;
}

.bit-zero {
  background: #f8f9fa;
  color: #6c757d;
  border: 2px solid #e9ecef;
}

.number-table {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.conversion-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

.conversion-table th {
  background: #6c757d;
  color: white;
  padding: 12px;
  text-align: center;
}

.conversion-table td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ecf0f1;
}

.conversion-table tr:hover {
  background: #f8f9fa;
}

.byte-display {
  font-family: monospace;
  font-weight: bold;
  background: #e3f2fd;
  padding: 4px 8px;
  border-radius: 4px;
  color: #1565c0;
}

.multimedia-encoding {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.media-type {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.media-type .icon {
  font-size: 2em;
  margin-bottom: 15px;
}

.color-depth-demo {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.color-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.color-sample {
  text-align: center;
}

.color-box {
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
  border-radius: 6px;
  border: 2px solid #dee2e6;
}

.monochrome {
  background: linear-gradient(45deg, #000 25%, #fff 25%, #fff 50%, #000 50%, #000 75%, #fff 75%);
  background-size: 20px 20px;
}

.low-color {
  background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00);
}

.medium-color {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
}

.true-color {
  background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
}

.units-hierarchy {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.unit-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.unit-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.unit-card .formula {
  font-size: 1.1em;
  color: #007bff;
  margin-bottom: 5px;
}

.sub-formula {
  font-size: 0.9em;
  color: #6c757d;
  font-style: italic;
}

.pyramid-visual {
  background: white;
  padding: 30px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
  text-align: center;
}

.pyramid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.pyramid-level {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  color: white;
  min-width: 80px;
}

.level-0 {
  background: #28a745;
  width: 100px;
}

.level-1 {
  background: #17a2b8;
  width: 120px;
}

.level-2 {
  background: #ffc107;
  width: 140px;
  color: #495057;
}

.level-3 {
  background: #fd7e14;
  width: 160px;
}

.level-4 {
  background: #dc3545;
  width: 180px;
}

.practical-examples {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.size-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.size-example {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
}

.size-example .icon {
  font-size: 2em;
  margin: 0;
}

.example-details strong {
  display: block;
  color: #2c3e50;
  margin-bottom: 5px;
}

.example-details p {
  margin: 0;
  color: #007bff;
  font-weight: bold;
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

.highlight {
  background: #e2f3ff;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 600;
  color: #0056b3;
}

@media (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  .converter-container {
    grid-template-columns: 1fr;
  }

  .char-example {
    flex-direction: column;
    text-align: center;
  }

  .conversion-example {
    flex-direction: column;
    gap: 10px;
  }

  .byte-bits {
    flex-wrap: wrap;
  }
}
</style>