<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>🔍 Інструменти пошуку в Інтернеті</h2>

      <div class="definition-box">
        Коли ви шукаєте інформацію в Інтернеті (тексти, зображення, аудіо чи відео), зазвичай отримуєте мільйони посилань. Щоб знайти потрібне, важливо вміти користуватися спеціальними інструментами пошуку.
      </div>

      <div class="search-demo">
        <div class="mock-search-box">
          <div class="search-input-container">
            <span class="search-icon">🔍</span>
            <input
              type="text"
              class="search-input"
              :value="demoQuery"
              @input="demoQuery = $event.target.value"
              placeholder="Введіть пошуковий запит..."
            >
            <button class="search-button">Google Пошук</button>
          </div>
        </div>

        <div class="search-filters-demo">
          <div class="filter-tabs">
            <div class="filter-tab active">🌐 Усі</div>
            <div class="filter-tab">📷 Зображення</div>
            <div class="filter-tab">📰 Новини</div>
            <div class="filter-tab">🎬 Відео</div>
            <div class="filter-tab">📚 Книги</div>
            <div class="filter-tab">🗺️ Карти</div>
            <div class="filter-tab">🛒 Покупки</div>
          </div>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>🎛️ Фільтри Google</h2>

      <div class="definition-box">
        <strong>Фільтр</strong> – це засіб для відбору результатів, які відповідають певній умові.
      </div>

      <div class="filters-explanation">
        <h3>📋 Призначення фільтрів</h3>
        <p>Фільтри допомагають відображати посилання лише на дані певних видів або певного призначення.</p>

        <div class="filter-types">
          <div class="filter-card text">
            <span class="icon">📄</span>
            <h4>Текстові матеріали</h4>
            <p>Статті, документи, веб-сторінки</p>
          </div>
          <div class="filter-card images">
            <span class="icon">🖼️</span>
            <h4>Зображення</h4>
            <p>Фотографії, ілюстрації, графіка</p>
          </div>
          <div class="filter-card videos">
            <span class="icon">🎥</span>
            <h4>Відео</h4>
            <p>Відеоролики, фільми, уроки</p>
          </div>
          <div class="filter-card news">
            <span class="icon">📰</span>
            <h4>Новини</h4>
            <p>Свіжі новини та статті</p>
          </div>
          <div class="filter-card maps">
            <span class="icon">🗺️</span>
            <h4>Карти</h4>
            <p>Географічні карти та локації</p>
          </div>
          <div class="filter-card shopping">
            <span class="icon">🛍️</span>
            <h4>Покупки</h4>
            <p>Товари та інтернет-магазини</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>⚙️ Кнопка "Інструменти"</h2>

      <div class="tools-section">
        <div class="definition-box">
          Кнопка "Інструменти" дозволяє уточнити пошуковий запит за різними критеріями для отримання більш точних результатів.
        </div>

        <div class="tools-demo">
          <div class="mock-tools-panel">
            <div class="tool-group">
              <h4>🌍 Мова</h4>
              <div class="tool-options">
                <label class="tool-option">
                  <input type="radio" name="language" value="all" checked>
                  <span class="checkmark"></span>
                  Усі мови
                </label>
                <label class="tool-option">
                  <input type="radio" name="language" value="uk">
                  <span class="checkmark"></span>
                  Лише українською
                </label>
                <label class="tool-option">
                  <input type="radio" name="language" value="en">
                  <span class="checkmark"></span>
                  Лише англійською
                </label>
              </div>
            </div>

            <div class="tool-group">
              <h4>⏰ Час</h4>
              <div class="tool-options">
                <label class="tool-option">
                  <input type="radio" name="time" value="any" checked>
                  <span class="checkmark"></span>
                  Будь-коли
                </label>
                <label class="tool-option">
                  <input type="radio" name="time" value="hour">
                  <span class="checkmark"></span>
                  Остання година
                </label>
                <label class="tool-option">
                  <input type="radio" name="time" value="day">
                  <span class="checkmark"></span>
                  Остання доба
                </label>
                <label class="tool-option">
                  <input type="radio" name="time" value="month">
                  <span class="checkmark"></span>
                  Останній місяць
                </label>
                <label class="tool-option">
                  <input type="radio" name="time" value="year">
                  <span class="checkmark"></span>
                  Останній рік
                </label>
              </div>
            </div>

            <div class="tool-group">
              <h4>🎯 Дослівний запит</h4>
              <div class="tool-options">
                <label class="tool-option">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Шукати слова дослівно (без відмінків)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>🖼️ Фільтри для зображень</h2>

      <div class="image-filters-section">
        <div class="definition-box">
          Коли ви обираєте фільтр "Зображення", з'являються додаткові інструменти фільтрації за властивостями зображень.
        </div>

        <div class="image-demo">
          <div class="image-search-header">
            <h3>📷 Пошук зображень</h3>
            <div class="demo-search-bar">
              <input type="text" placeholder="котики" class="image-search-input">
              <span class="camera-icon">📷</span>
            </div>
          </div>

          <div class="image-tools">
            <div class="image-tool-group">
              <h4>📏 Розмір</h4>
              <div class="size-options">
                <div class="size-option" :class="{ active: selectedSize === 'large' }" @click="selectedSize = 'large'">
                  <span class="size-icon">🔳</span>
                  <span>Великі</span>
                </div>
                <div class="size-option" :class="{ active: selectedSize === 'medium' }" @click="selectedSize = 'medium'">
                  <span class="size-icon">◻️</span>
                  <span>Середні</span>
                </div>
                <div class="size-option" :class="{ active: selectedSize === 'icon' }" @click="selectedSize = 'icon'">
                  <span class="size-icon">▫️</span>
                  <span>Значок</span>
                </div>
              </div>
            </div>

            <div class="image-tool-group">
              <h4>🎨 Колір</h4>
              <div class="color-options">
                <div class="color-option" :class="{ active: selectedColor === 'any' }" @click="selectedColor = 'any'">
                  <span class="color-circle rainbow"></span>
                  <span>Будь-який</span>
                </div>
                <div class="color-option" :class="{ active: selectedColor === 'bw' }" @click="selectedColor = 'bw'">
                  <span class="color-circle bw"></span>
                  <span>Чорно-білі</span>
                </div>
                <div class="color-option" :class="{ active: selectedColor === 'transparent' }" @click="selectedColor = 'transparent'">
                  <span class="color-circle transparent"></span>
                  <span>Прозорий фон</span>
                </div>
                <div class="color-option" :class="{ active: selectedColor === 'red' }" @click="selectedColor = 'red'">
                  <span class="color-circle red"></span>
                  <span>Червоний</span>
                </div>
                <div class="color-option" :class="{ active: selectedColor === 'blue' }" @click="selectedColor = 'blue'">
                  <span class="color-circle blue"></span>
                  <span>Синій</span>
                </div>
                <div class="color-option" :class="{ active: selectedColor === 'green' }" @click="selectedColor = 'green'">
                  <span class="color-circle green"></span>
                  <span>Зелений</span>
                </div>
              </div>
            </div>
          </div>

          <div class="image-results-demo">
            <div class="result-images">
              <div class="demo-image" style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4)">🐱</div>
              <div class="demo-image" style="background: linear-gradient(45deg, #a8e6cf, #dcedc8)">🐈</div>
              <div class="demo-image" style="background: linear-gradient(45deg, #ffd93d, #ff6b6b)">😺</div>
              <div class="demo-image" style="background: linear-gradient(45deg, #6c5ce7, #a29bfe)">🐾</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5">
      <h2>💡 Практичні поради</h2>

      <div class="tips-grid">
        <div class="tip-card basic">
          <span class="tip-icon">🔤</span>
          <h4>Ключові слова</h4>
          <p>Використовуйте конкретні та специфічні слова замість загальних термінів</p>
          <div class="tip-example">
            <span class="good">✅ "рецепт борщу з капустою"</span>
            <span class="bad">❌ "їжа"</span>
          </div>
        </div>

        <div class="tip-card filters">
          <span class="tip-icon">🎛️</span>
          <h4>Використовуйте фільтри</h4>
          <p>Обирайте відповідний тип контенту для вашого запиту</p>
          <div class="tip-example">
            <span class="good">✅ Фільтр "Зображення" для пошуку фото</span>
            <span class="good">✅ Фільтр "Новини" для актуальної інформації</span>
          </div>
        </div>

        <div class="tip-card time">
          <span class="tip-icon">⏰</span>
          <h4>Час має значення</h4>
          <p>Для актуальної інформації встановлюйте часові обмеження</p>
          <div class="tip-example">
            <span class="good">✅ "Останній місяць" для новин</span>
            <span class="good">✅ "Останній рік" для статистики</span>
          </div>
        </div>

        <div class="tip-card language">
          <span class="tip-icon">🌍</span>
          <h4>Мова пошуку</h4>
          <p>Обирайте мову для отримання релевантних результатів</p>
          <div class="tip-example">
            <span class="good">✅ Українська для місцевої інформації</span>
            <span class="good">✅ Англійська для міжнародних даних</span>
          </div>
        </div>
      </div>
    </section>

    <div class="interactive-exercise">
      <h3>🎯 Інтерактивна вправа</h3>
      <div class="exercise-content">
        <p>Спробуйте знайти інформацію про клімат України за останні 5 років. Які фільтри ви використаєте?</p>

        <div class="exercise-form">
          <div class="form-group">
            <label>🔍 Пошуковий запит:</label>
            <input type="text" v-model="exerciseQuery" placeholder="Введіть ваш запит...">
          </div>

          <div class="form-group">
            <label>📋 Тип контенту:</label>
            <select v-model="exerciseType">
              <option value="">Оберіть тип</option>
              <option value="all">Усі результати</option>
              <option value="news">Новини</option>
              <option value="images">Зображення</option>
              <option value="books">Книги</option>
            </select>
          </div>

          <div class="form-group">
            <label>⏰ Часовий період:</label>
            <select v-model="exerciseTime">
              <option value="">Оберіть період</option>
              <option value="any">Будь-коли</option>
              <option value="year">Останній рік</option>
              <option value="5years">Останні 5 років</option>
            </select>
          </div>

          <div class="form-group">
            <label>🌍 Мова:</label>
            <select v-model="exerciseLanguage">
              <option value="">Оберіть мову</option>
              <option value="uk">Українська</option>
              <option value="en">Англійська</option>
              <option value="any">Будь-яка</option>
            </select>
          </div>

          <button class="check-button" @click="checkExercise">Перевірити відповідь</button>
        </div>

        <div v-if="exerciseFeedback" class="exercise-feedback" :class="{ correct: exerciseCorrect }">
          <span class="feedback-icon">{{ exerciseCorrect ? '✅' : '💡' }}</span>
          <p>{{ exerciseFeedback }}</p>
        </div>
      </div>
    </div>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Ефективний пошук в Інтернеті вимагає вміння користуватися різними інструментами та фільтрами. Правильний вибір ключових слів, типу контенту та налаштувань допоможе швидко знайти потрібну інформацію.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const demoQuery = ref('котики')
const selectedSize = ref('large')
const selectedColor = ref('any')

const exerciseQuery = ref('')
const exerciseType = ref('')
const exerciseTime = ref('')
const exerciseLanguage = ref('')
const exerciseFeedback = ref('')
const exerciseCorrect = ref(false)

function checkExercise() {
  const isGoodQuery = exerciseQuery.value.toLowerCase().includes('клімат') && exerciseQuery.value.toLowerCase().includes('україни')
  const isGoodTime = exerciseTime.value === '5years'
  const isGoodLanguage = exerciseLanguage.value === 'uk'

  if (isGoodQuery && isGoodTime && isGoodLanguage) {
    exerciseFeedback.value = 'Відмінно! Ви обрали правильні параметри пошуку для знаходження актуальної інформації про клімат України.'
    exerciseCorrect.value = true
  } else {
    let suggestions = []
    if (!isGoodQuery) suggestions.push('конкретизуйте запит (додайте "клімат України")')
    if (!isGoodTime) suggestions.push('оберіть відповідний часовий період')
    if (!isGoodLanguage) suggestions.push('оберіть українську мову')

    exerciseFeedback.value = `Спробуйте ще раз! Поради: ${suggestions.join(', ')}.`
    exerciseCorrect.value = false
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 50px;
  padding: 35px;
  border-radius: 12px;
  border-left: 5px solid #dee2e6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-1 {
  background: linear-gradient(135deg, #4285f4 0%, #0f9d58 100%);
  color: white;
  border-left-color: #4285f4;
}

.section-1 .definition-box {
  background: rgba(255, 255, 255, 0.95);
  color: #2c3e50;
}

.section-2 {
  background: #f8f9fa;
  border-left-color: #ea4335;
}

.section-3 {
  background: #f8f9fa;
  border-left-color: #fbbc05;
}

.section-4 {
  background: #f8f9fa;
  border-left-color: #34a853;
}

.section-5 {
  background: #f8f9fa;
  border-left-color: #9c27b0;
}

.section h2 {
  font-size: 2.2em;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid rgba(255,255,255,0.3);
}

.section-1 h2 {
  color: white;
}

.section h2:not(.section-1 h2) {
  color: #2c3e50;
}

.definition-box {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
  border: 1px solid #e9ecef;
  border-left: 4px solid #6c757d;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-size: 1.1em;
  line-height: 1.6;
}

.definition-box strong {
  color: #2c3e50;
  font-size: 1.2em;
}

.search-demo {
  margin: 30px 0;
}

.mock-search-box {
  background: white;
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  padding: 15px;
  margin: 20px 0;
}

.search-input-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-icon {
  font-size: 1.2em;
  color: #5f6368;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  background: transparent;
  color: #2c3e50;
}

.search-button {
  background: #f8f9fa;
  border: 1px solid #f8f9fa;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  color: #3c4043;
  font-size: 14px;
  transition: all 0.2s ease;
}

.search-button:hover {
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  background: #f1f3f4;
}

.search-filters-demo {
  margin: 20px 0;
}

.filter-tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid #dadce0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px 8px 0 0;
  padding: 0 20px;
}

.filter-tab {
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #5f6368;
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease;
}

.filter-tab.active {
  color: #1a73e8;
  border-bottom-color: #1a73e8;
}

.filter-tab:hover {
  background: rgba(26, 115, 232, 0.1);
}

.filter-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.filter-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
  cursor: pointer;
}

.filter-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  border-color: #4285f4;
}

.filter-card .icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
}

.tools-demo {
  margin: 30px 0;
}

.mock-tools-panel {
  background: white;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.tool-group {
  margin-bottom: 30px;
}

.tool-group h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.tool-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tool-option {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.tool-option:hover {
  background: #f8f9fa;
}

.tool-option input {
  margin: 0;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid #dadce0;
  border-radius: 3px;
  position: relative;
}

.tool-option input:checked + .checkmark {
  background: #4285f4;
  border-color: #4285f4;
}

.tool-option input:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  color: white;
  font-size: 12px;
  top: -2px;
  left: 2px;
}

.image-filters-section {
  margin: 30px 0;
}

.image-demo {
  background: white;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.image-search-header {
  text-align: center;
  margin-bottom: 30px;
}

.demo-search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.image-search-input {
  padding: 12px 20px;
  border: 2px solid #dadce0;
  border-radius: 24px;
  font-size: 16px;
  min-width: 300px;
  outline: none;
  transition: all 0.2s ease;
}

.image-search-input:focus {
  border-color: #4285f4;
}

.camera-icon {
  font-size: 1.5em;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.2s ease;
}

.camera-icon:hover {
  background: #f8f9fa;
}

.image-tools {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  flex-wrap: wrap;
  gap: 30px;
}

.image-tool-group h4 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

.size-options, .color-options {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.size-option, .color-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;
}

.size-option.active, .color-option.active {
  border-color: #4285f4;
  background: #e8f0fe;
}

.size-option:hover, .color-option:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.size-icon {
  font-size: 1.5em;
}

.color-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #dadce0;
}

.color-circle.rainbow {
  background: linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080);
}

.color-circle.bw {
  background: linear-gradient(45deg, #000 50%, #fff 50%);
}

.color-circle.transparent {
  background:
    linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
}

.color-circle.red { background: #ea4335; }
.color-circle.blue { background: #4285f4; }
.color-circle.green { background: #34a853; }

.image-results-demo {
  margin-top: 30px;
}

.result-images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.demo-image {
  aspect-ratio: 1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.demo-image:hover {
  transform: scale(1.05);
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.tip-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.tip-icon {
  font-size: 3em;
  display: block;
  text-align: center;
  margin-bottom: 20px;
}

.tip-card h4 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.tip-example {
  margin-top: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.tip-example .good {
  display: block;
  color: #28a745;
  margin: 5px 0;
  font-size: 0.9em;
}

.tip-example .bad {
  display: block;
  color: #dc3545;
  margin: 5px 0;
  font-size: 0.9em;
}

.interactive-exercise {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  margin: 40px 0;
}

.interactive-exercise h3 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.exercise-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  font-size: 1.1em;
}

.form-group input,
.form-group select {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
  outline: none;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group select:focus {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.check-button {
  grid-column: 1 / -1;
  padding: 15px 30px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  justify-self: center;
  margin-top: 20px;
}

.check-button:hover {
  background: #218838;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.exercise-feedback {
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.exercise-feedback.correct {
  background: rgba(40, 167, 69, 0.2);
  border-color: rgba(40, 167, 69, 0.5);
}

.feedback-icon {
  font-size: 1.5em;
  margin-right: 10px;
}

.conclusion {
  text-align: center;
  margin: 60px 0;
  padding: 40px;
  background: linear-gradient(45deg, #4285f4 0%, #34a853 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 16px rgba(66, 133, 244, 0.3);
}

.conclusion p {
  font-size: 1.3em;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  .filter-types,
  .tips-grid,
  .image-tools {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .filter-tabs {
    flex-wrap: wrap;
    padding: 10px;
  }

  .search-input-container {
    flex-direction: column;
    gap: 10px;
  }

  .search-input {
    min-width: auto;
  }

  .result-images {
    grid-template-columns: repeat(2, 1fr);
  }

  .exercise-form {
    grid-template-columns: 1fr;
  }
}
</style>