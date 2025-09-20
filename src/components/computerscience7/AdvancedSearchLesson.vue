<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>🎯 Розширений пошук</h2>

      <div class="definition-box">
        <strong>Розширений пошук</strong> – це функція, яка дозволяє використовувати ще ретельніший відбір сторінок, вказуючи слова або фрази, які мають (або не мають) міститися на сторінці.
      </div>

      <div class="advanced-search-demo">
        <div class="demo-header">
          <h3>🔧 Інтерфейс розширеного пошуку</h3>
          <p>Спробуйте самі налаштувати параметри пошуку:</p>
        </div>

        <div class="advanced-form">
          <div class="form-section">
            <h4>📝 Знайти сторінки з:</h4>

            <div class="form-row">
              <label>✅ усі ці слова:</label>
              <input
                type="text"
                v-model="searchParams.allWords"
                placeholder="наприклад: українська література"
                class="search-field"
              >
              <div class="help-text">Кожне з ключових слів має бути на сторінці (не обов'язково поруч)</div>
            </div>

            <div class="form-row">
              <label>🎯 точне слово або фразу:</label>
              <input
                type="text"
                v-model="searchParams.exactPhrase"
                placeholder="наприклад: золотий фонд української поезії"
                class="search-field"
              >
              <div class="help-text">На сторінці має бути точна ключова фраза в зазначеній послідовності</div>
            </div>

            <div class="form-row">
              <label>🔀 будь-яке з цих слів:</label>
              <input
                type="text"
                v-model="searchParams.anyWords"
                placeholder="наприклад: Шевченко Франко Леся"
                class="search-field"
              >
              <div class="help-text">На сторінці має бути хоча б одне з указаних слів</div>
            </div>

            <div class="form-row">
              <label>❌ жодне з цих слів:</label>
              <input
                type="text"
                v-model="searchParams.excludeWords"
                placeholder="наприклад: реклама купити продаж"
                class="search-field"
              >
              <div class="help-text">На сторінці не має бути жодного з уведених слів</div>
            </div>

            <div class="form-row">
              <label>🔢 числа в діапазоні:</label>
              <div class="range-inputs">
                <input
                  type="number"
                  v-model="searchParams.minNumber"
                  placeholder="від"
                  class="range-field"
                >
                <span class="range-separator">до</span>
                <input
                  type="number"
                  v-model="searchParams.maxNumber"
                  placeholder="до"
                  class="range-field"
                >
              </div>
              <div class="help-text">На сторінці мають міститися числа з указаного діапазону</div>
            </div>
          </div>

          <div class="preview-section">
            <h4>👀 Результат пошукового запиту:</h4>
            <div class="query-preview">
              <div class="query-box">
                <span class="search-icon">🔍</span>
                <span class="query-text">{{ buildQuery }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>⚡ Оператори пошуку</h2>

      <div class="definition-box">
        Деякі з критеріїв розширеного пошуку можна використовувати безпосередньо в пошуковому полі Google за допомогою спеціальних позначень (операторів пошуку).
      </div>

      <div class="operators-grid">
        <div class="operator-card quotes">
          <div class="operator-header">
            <span class="operator-icon">🔤</span>
            <h4>Точна фраза</h4>
          </div>
          <div class="operator-syntax">
            <code>"точна фраза"</code>
          </div>
          <div class="operator-description">
            Використовуйте лапки для пошуку точної фрази
          </div>
          <div class="operator-example">
            <div class="example-label">Приклад:</div>
            <div class="example-good">✅ "глобальне потепління"</div>
            <div class="example-result">Знайде сторінки з точною фразою "глобальне потепління"</div>
          </div>
        </div>

        <div class="operator-card minus">
          <div class="operator-header">
            <span class="operator-icon">➖</span>
            <h4>Виключення слів</h4>
          </div>
          <div class="operator-syntax">
            <code>пошук -виключити</code>
          </div>
          <div class="operator-description">
            Використовуйте мінус перед словом для виключення
          </div>
          <div class="operator-example">
            <div class="example-label">Приклад:</div>
            <div class="example-good">✅ котики -купити</div>
            <div class="example-result">Знайде сторінки про котиків, але без пропозицій купівлі</div>
          </div>
        </div>

        <div class="operator-card range">
          <div class="operator-header">
            <span class="operator-icon">📊</span>
            <h4>Діапазон чисел</h4>
          </div>
          <div class="operator-syntax">
            <code>число1..число2</code>
          </div>
          <div class="operator-description">
            Використовуйте дві крапки між числами
          </div>
          <div class="operator-example">
            <div class="example-label">Приклад:</div>
            <div class="example-good">✅ телефон ціна 5000..15000</div>
            <div class="example-result">Знайде телефони в ціновому діапазоні 5000-15000</div>
          </div>
        </div>

        <div class="operator-card site">
          <div class="operator-header">
            <span class="operator-icon">🌐</span>
            <h4>Пошук на сайті</h4>
          </div>
          <div class="operator-syntax">
            <code>site:domain.com</code>
          </div>
          <div class="operator-description">
            Шукати лише на конкретному сайті
          </div>
          <div class="operator-example">
            <div class="example-label">Приклад:</div>
            <div class="example-good">✅ квантова фізика site:uk.wikipedia.org</div>
            <div class="example-result">Шукає інформацію про квантову фізику лише у Вікіпедії</div>
          </div>
        </div>

        <div class="operator-card filetype">
          <div class="operator-header">
            <span class="operator-icon">📄</span>
            <h4>Тип файлу</h4>
          </div>
          <div class="operator-syntax">
            <code>filetype:pdf</code>
          </div>
          <div class="operator-description">
            Шукати файли конкретного типу
          </div>
          <div class="operator-example">
            <div class="example-label">Приклад:</div>
            <div class="example-good">✅ звіт екології filetype:pdf</div>
            <div class="example-result">Знайде PDF-документи з екологічними звітами</div>
          </div>
        </div>

        <div class="operator-card or">
          <div class="operator-header">
            <span class="operator-icon">🔀</span>
            <h4>Логічне АБО</h4>
          </div>
          <div class="operator-syntax">
            <code>слово1 OR слово2</code>
          </div>
          <div class="operator-description">
            Шукати сторінки з одним або іншим словом
          </div>
          <div class="operator-example">
            <div class="example-label">Приклад:</div>
            <div class="example-good">✅ футбол OR теніс</div>
            <div class="example-result">Знайде сторінки про футбол або теніс (або обидва)</div>
          </div>
        </div>
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>💡 Практичні приклади</h2>

      <div class="examples-container">
        <div class="scenario-card academic">
          <h3>📚 Академічний пошук</h3>
          <div class="scenario-description">
            <strong>Завдання:</strong> Знайти наукові статті про зміни клімату в Україні за останні 5 років
          </div>

          <div class="search-steps">
            <div class="step">
              <span class="step-number">1</span>
              <div class="step-content">
                <strong>Основні слова:</strong> зміни клімату Україна
              </div>
            </div>
            <div class="step">
              <span class="step-number">2</span>
              <div class="step-content">
                <strong>Точна фраза:</strong> "кліматичні зміни в Україні"
              </div>
            </div>
            <div class="step">
              <span class="step-number">3</span>
              <div class="step-content">
                <strong>Виключити:</strong> -реклама -купити -продаж
              </div>
            </div>
            <div class="step">
              <span class="step-number">4</span>
              <div class="step-content">
                <strong>Тип файлу:</strong> filetype:pdf
              </div>
            </div>
            <div class="step">
              <span class="step-number">5</span>
              <div class="step-content">
                <strong>Роки:</strong> 2019..2024
              </div>
            </div>
          </div>

          <div class="final-query">
            <strong>Фінальний запит:</strong>
            <code>"кліматичні зміни в Україні" 2019..2024 filetype:pdf -реклама</code>
          </div>
        </div>

        <div class="scenario-card shopping">
          <h3>🛒 Пошук товару</h3>
          <div class="scenario-description">
            <strong>Завдання:</strong> Знайти ноутбук в певному ціновому діапазоні з конкретними характеристиками
          </div>

          <div class="search-steps">
            <div class="step">
              <span class="step-number">1</span>
              <div class="step-content">
                <strong>Основний запит:</strong> ноутбук купити
              </div>
            </div>
            <div class="step">
              <span class="step-number">2</span>
              <div class="step-content">
                <strong>Характеристики:</strong> "16GB RAM" SSD
              </div>
            </div>
            <div class="step">
              <span class="step-number">3</span>
              <div class="step-content">
                <strong>Ціновий діапазон:</strong> 20000..50000
              </div>
            </div>
            <div class="step">
              <span class="step-number">4</span>
              <div class="step-content">
                <strong>Виключити:</strong> -б/у -ремонт
              </div>
            </div>
          </div>

          <div class="final-query">
            <strong>Фінальний запит:</strong>
            <code>ноутбук "16GB RAM" SSD 20000..50000 -б/у -ремонт</code>
          </div>
        </div>

        <div class="scenario-card news">
          <h3>📰 Пошук новин</h3>
          <div class="scenario-description">
            <strong>Завдання:</strong> Знайти останні новини про космічні дослідження від надійних джерел
          </div>

          <div class="search-steps">
            <div class="step">
              <span class="step-number">1</span>
              <div class="step-content">
                <strong>Тема:</strong> космічні дослідження OR "космос" OR "астрономія"
              </div>
            </div>
            <div class="step">
              <span class="step-number">2</span>
              <div class="step-content">
                <strong>Надійні сайти:</strong> site:bbc.com OR site:ukrinform.ua
              </div>
            </div>
            <div class="step">
              <span class="step-number">3</span>
              <div class="step-content">
                <strong>Виключити:</strong> -фантастика -фільм -гра
              </div>
            </div>
          </div>

          <div class="final-query">
            <strong>Фінальний запит:</strong>
            <code>("космічні дослідження" OR астрономія) (site:bbc.com OR site:ukrinform.ua) -фантастика</code>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>🏃‍♂️ Інтерактивна практика</h2>

      <div class="practice-container">
        <div class="practice-header">
          <h3>🎮 Майстер пошукових операторів</h3>
          <p>Виберіть правильний пошуковий запит для кожної ситуації:</p>
        </div>

        <div class="quiz-questions">
          <div class="quiz-question" v-for="(question, index) in quizQuestions" :key="index">
            <div class="question-header">
              <span class="question-number">{{ index + 1 }}</span>
              <h4>{{ question.scenario }}</h4>
            </div>

            <div class="question-task">{{ question.task }}</div>

            <div class="answer-options">
              <label
                v-for="(option, optionIndex) in question.options"
                :key="optionIndex"
                class="answer-option"
                :class="{
                  correct: selectedAnswers[index] === optionIndex && optionIndex === question.correct,
                  incorrect: selectedAnswers[index] === optionIndex && optionIndex !== question.correct,
                  'show-correct': selectedAnswers[index] !== undefined && optionIndex === question.correct
                }"
              >
                <input
                  type="radio"
                  :name="`question-${index}`"
                  :value="optionIndex"
                  @change="selectAnswer(index, optionIndex)"
                >
                <span class="option-text">{{ option }}</span>
                <span v-if="selectedAnswers[index] === optionIndex && optionIndex === question.correct" class="result-icon correct">✅</span>
                <span v-if="selectedAnswers[index] === optionIndex && optionIndex !== question.correct" class="result-icon incorrect">❌</span>
              </label>
            </div>

            <div v-if="selectedAnswers[index] !== undefined" class="explanation">
              <div class="explanation-header">💡 Пояснення:</div>
              <div class="explanation-text">{{ question.explanation }}</div>
            </div>
          </div>
        </div>

        <div class="quiz-results" v-if="allQuestionsAnswered">
          <div class="results-header">
            <span class="results-icon">🏆</span>
            <h3>Ваш результат</h3>
          </div>
          <div class="score-display">
            <span class="score">{{ correctAnswers }}</span> з <span class="total">{{ quizQuestions.length }}</span>
          </div>
          <div class="results-message" :class="resultsClass">
            {{ resultsMessage }}
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5 quiz-section">
      <h2>🧠 Перевір себе</h2>
      <LessonQuiz
        title="Тест: Розширений пошук"
        description="Обери правильні відповіді та скористайся підказками, щоб повернутися до потрібної частини уроку."
        :questions="lessonQuizQuestions"
      />
    </section>

    <div class="conclusion">
      <h3>🎯 Підсумок</h3>
      <p>Розширений пошук та оператори пошуку - це потужні інструменти для точного знаходження потрібної інформації. Освоївши ці техніки, ви зможете значно підвищити ефективність своїх пошукових запитів.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import LessonQuiz from '../common/LessonQuiz.vue'

const searchParams = ref({
  allWords: '',
  exactPhrase: '',
  anyWords: '',
  excludeWords: '',
  minNumber: '',
  maxNumber: ''
})

const selectedAnswers = ref({})

const lessonQuizQuestions = [
  {
    question: 'Яке поле розширеного пошуку потрібно заповнити, щоб виключити небажані слова з результатів?',
    options: [
      '«усі ці слова»',
      '«жодне з цих слів»',
      '«будь-яке з цих слів»'
    ],
    correct: 1,
    hint: 'У першому розділі показано поле «жодне з цих слів», яке прибирає зі сторінок усі введені слова.',
    sectionId: 'section1'
  },
  {
    question: 'Який оператор дозволяє обмежити пошук сторінками певного сайту?',
    options: ['filetype:pdf', 'site:domain.com', 'слово1 OR слово2'],
    correct: 1,
    hint: 'У таблиці операторів зазначено, що site: обмежує результати конкретним доменом.',
    sectionId: 'section2'
  },
  {
    question: 'Який прийом допоміг у прикладі «Пошук товару» задати потрібний ціновий діапазон?',
    options: [
      'Взяття ключових слів у лапки',
      'Запис чисел через дві крапки (20000..50000)',
      'Додавання мінуса перед словом «б/у»'
    ],
    correct: 1,
    hint: 'У блоці практичних прикладів показано, що дві крапки між числами задають діапазон цін.',
    sectionId: 'section3'
  },
  {
    question:
      'Який варіант відповідає правильному використанню оператора OR у завданні про екологічні новини з розділу практики?',
    options: [
      'екологія AND навколишнє AND середовище BBC',
      '(екологія OR "навколишнє середовище") site:bbc.com',
      '"екологія навколишнє середовище" bbc.com'
    ],
    correct: 1,
    hint: 'У тренажері «Майстер пошукових операторів» правильна відповідь містить OR та обмеження site:bbc.com.',
    sectionId: 'section4'
  }
]

const buildQuery = computed(() => {
  let parts = []

  if (searchParams.value.allWords) {
    parts.push(searchParams.value.allWords)
  }

  if (searchParams.value.exactPhrase) {
    parts.push(`"${searchParams.value.exactPhrase}"`)
  }

  if (searchParams.value.anyWords) {
    const words = searchParams.value.anyWords.split(' ')
    parts.push(`(${words.join(' OR ')})`)
  }

  if (searchParams.value.excludeWords) {
    const words = searchParams.value.excludeWords.split(' ')
    words.forEach(word => parts.push(`-${word}`))
  }

  if (searchParams.value.minNumber && searchParams.value.maxNumber) {
    parts.push(`${searchParams.value.minNumber}..${searchParams.value.maxNumber}`)
  }

  return parts.join(' ') || 'Введіть параметри пошуку...'
})

const quizQuestions = ref([
  {
    scenario: "🏫 Шкільний проект",
    task: "Потрібно знайти інформацію про Другу світову війну, але лише з освітніх сайтів:",
    options: [
      "Друга світова війна",
      "\"Друга світова війна\" site:edu",
      "Друга світова війна -реклама",
      "Друга OR світова OR війна"
    ],
    correct: 1,
    explanation: "Використання site:edu обмежує пошук освітніми сайтами, що гарантує академічну якість матеріалів."
  },
  {
    scenario: "🛍️ Покупка телефону",
    task: "Шукаєте телефон Samsung у діапазоні 10000-20000 грн, але не б/в:",
    options: [
      "Samsung телефон 10000 20000 б/у",
      "Samsung телефон 10000..20000 -б/у",
      "\"Samsung телефон\" (10000-20000)",
      "Samsung OR телефон 10000..20000"
    ],
    correct: 1,
    explanation: "Правильний синтаксис для діапазону чисел - дві крапки (10000..20000), а мінус виключає б/в варіанти."
  },
  {
    scenario: "📚 Наукове дослідження",
    task: "Потрібні PDF-документи з точною фразою 'штучний інтелект в медицині':",
    options: [
      "штучний інтелект медицина filetype:pdf",
      "\"штучний інтелект в медицині\" filetype:pdf",
      "штучний OR інтелект OR медицина PDF",
      "(штучний інтелект) медицина .pdf"
    ],
    correct: 1,
    explanation: "Лапки забезпечують точний пошук фрази, а filetype:pdf обмежує результати PDF-файлами."
  },
  {
    scenario: "🌍 Актуальні новини",
    task: "Шукаєте новини про екологію або навколишнє середовище на BBC:",
    options: [
      "екологія навколишнє середовище site:bbc.com",
      "(екологія OR \"навколишнє середовище\") site:bbc.com",
      "екологія AND навколишнє AND середовище BBC",
      "\"екологія навколишнє середовище\" bbc.com"
    ],
    correct: 1,
    explanation: "OR дозволяє знайти сторінки з будь-яким з термінів, а site:bbc.com обмежує пошук сайтом BBC."
  }
])

const allQuestionsAnswered = computed(() => {
  return Object.keys(selectedAnswers.value).length === quizQuestions.value.length
})

const correctAnswers = computed(() => {
  let correct = 0
  for (let i = 0; i < quizQuestions.value.length; i++) {
    if (selectedAnswers.value[i] === quizQuestions.value[i].correct) {
      correct++
    }
  }
  return correct
})

const resultsClass = computed(() => {
  const percentage = (correctAnswers.value / quizQuestions.value.length) * 100
  if (percentage >= 75) return 'excellent'
  if (percentage >= 50) return 'good'
  return 'needs-improvement'
})

const resultsMessage = computed(() => {
  const percentage = (correctAnswers.value / quizQuestions.value.length) * 100
  if (percentage >= 75) return 'Відмінно! Ви чудово освоїли пошукові оператори! 🌟'
  if (percentage >= 50) return 'Добре! Продовжуйте практикуватися для покращення результатів. 👍'
  return 'Потрібно більше практики. Перечитайте матеріал і спробуйте знову. 📚'
})

function selectAnswer(questionIndex, optionIndex) {
  selectedAnswers.value[questionIndex] = optionIndex
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
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  border-left-color: #ff6b6b;
}

.section-1 .definition-box {
  background: rgba(255, 255, 255, 0.95);
  color: #2c3e50;
}

.section-2 {
  background: #f8f9fa;
  border-left-color: #4ecdc4;
}

.section-3 {
  background: #f8f9fa;
  border-left-color: #45b7d1;
}

.section-4 {
  background: #f8f9fa;
  border-left-color: #96ceb4;
}

.section-5.quiz-section {
  background: #f8fafc;
  border-left-color: #6c5ce7;
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
  color: #ff6b6b;
  font-size: 1.2em;
}

.advanced-search-demo {
  margin: 30px 0;
}

.demo-header {
  text-align: center;
  margin-bottom: 30px;
}

.demo-header h3 {
  color: white;
  font-size: 1.6em;
  margin-bottom: 10px;
}

.demo-header p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1em;
}

.advanced-form {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 30px;
  color: #2c3e50;
}

.form-section h4 {
  color: #2c3e50;
  margin-bottom: 25px;
  font-size: 1.3em;
}

.form-row {
  margin-bottom: 25px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #ff6b6b;
}

.form-row label {
  display: block;
  font-weight: 600;
  margin-bottom: 10px;
  color: #2c3e50;
  font-size: 1.1em;
}

.search-field {
  width: 100%;
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s ease;
}

.search-field:focus {
  border-color: #ff6b6b;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
}

.range-inputs {
  display: flex;
  align-items: center;
  gap: 15px;
}

.range-field {
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  width: 120px;
  transition: all 0.2s ease;
}

.range-field:focus {
  border-color: #ff6b6b;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
}

.range-separator {
  font-weight: 600;
  color: #6c757d;
}

.help-text {
  margin-top: 8px;
  font-size: 0.9em;
  color: #6c757d;
  font-style: italic;
}

.preview-section {
  margin-top: 30px;
  padding: 20px;
  background: #e8f4fd;
  border-radius: 10px;
  border: 2px solid #4ecdc4;
}

.preview-section h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.query-preview {
  display: flex;
  justify-content: center;
}

.query-box {
  background: white;
  padding: 15px 25px;
  border-radius: 25px;
  border: 2px solid #4ecdc4;
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 100%;
  overflow: hidden;
}

.search-icon {
  font-size: 1.2em;
  color: #4ecdc4;
}

.query-text {
  font-family: 'Courier New', monospace;
  color: #2c3e50;
  font-weight: 600;
  word-break: break-all;
}

.operators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.operator-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  border: 2px solid #e9ecef;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.operator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
  border-color: #4ecdc4;
}

.operator-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.operator-icon {
  font-size: 2.5em;
}

.operator-card h4 {
  color: #2c3e50;
  font-size: 1.3em;
  margin: 0;
}

.operator-syntax {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #4ecdc4;
  margin: 15px 0;
}

.operator-syntax code {
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  color: #e91e63;
  font-weight: 600;
}

.operator-description {
  color: #6c757d;
  margin-bottom: 15px;
  line-height: 1.5;
}

.operator-example {
  background: #e8f5e8;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.example-label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.example-good {
  font-family: 'Courier New', monospace;
  color: #28a745;
  font-weight: 600;
  margin: 5px 0;
}

.example-result {
  font-size: 0.9em;
  color: #6c757d;
  margin-top: 8px;
  font-style: italic;
}

.examples-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.scenario-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  border: 2px solid #e9ecef;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.scenario-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.15);
}

.scenario-card.academic {
  border-left: 4px solid #6f42c1;
}

.scenario-card.shopping {
  border-left: 4px solid #fd7e14;
}

.scenario-card.news {
  border-left: 4px solid #20c997;
}

.scenario-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.4em;
}

.scenario-description {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-left: 4px solid #4ecdc4;
}

.search-steps {
  margin: 20px 0;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin: 15px 0;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
}

.step-number {
  background: #4ecdc4;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.final-query {
  background: #e3f2fd;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
  margin-top: 20px;
}

.final-query code {
  display: block;
  font-family: 'Courier New', monospace;
  background: white;
  padding: 10px;
  border-radius: 4px;
  margin-top: 8px;
  color: #e91e63;
  font-weight: 600;
  word-break: break-all;
}

.practice-container {
  background: white;
  border-radius: 15px;
  padding: 30px;
  border: 2px solid #e9ecef;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.practice-header {
  text-align: center;
  margin-bottom: 30px;
}

.practice-header h3 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 10px;
}

.quiz-questions {
  margin: 30px 0;
}

.quiz-question {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 25px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.quiz-question:hover {
  border-color: #96ceb4;
}

.question-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.question-number {
  background: #96ceb4;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1em;
}

.quiz-question h4 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.2em;
}

.question-task {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-left: 4px solid #96ceb4;
  font-weight: 500;
}

.answer-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.answer-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.answer-option:hover {
  border-color: #96ceb4;
  background: #f0fdf4;
}

.answer-option.correct {
  border-color: #28a745;
  background: #d4edda;
}

.answer-option.incorrect {
  border-color: #dc3545;
  background: #f8d7da;
}

.answer-option.show-correct {
  border-color: #28a745 !important;
  background: #d4edda !important;
}

.option-text {
  flex: 1;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: #2c3e50;
}

.result-icon {
  font-size: 1.2em;
  position: absolute;
  right: 15px;
}

.explanation {
  margin-top: 15px;
  padding: 15px;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
}

.explanation-header {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.explanation-text {
  color: #5a6c7d;
  line-height: 1.5;
}

.quiz-results {
  background: linear-gradient(135deg, #96ceb4 0%, #85c1a8 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  margin-top: 30px;
}

.results-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.results-icon {
  font-size: 2.5em;
}

.results-header h3 {
  margin: 0;
  font-size: 1.8em;
}

.score-display {
  font-size: 3em;
  font-weight: bold;
  margin: 20px 0;
}

.score {
  color: #fff;
}

.total {
  color: rgba(255, 255, 255, 0.8);
}

.results-message {
  font-size: 1.2em;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

.results-message.excellent {
  background: rgba(40, 167, 69, 0.3);
  border: 2px solid rgba(40, 167, 69, 0.5);
}

.results-message.good {
  background: rgba(255, 193, 7, 0.3);
  border: 2px solid rgba(255, 193, 7, 0.5);
}

.results-message.needs-improvement {
  background: rgba(220, 53, 69, 0.3);
  border: 2px solid rgba(220, 53, 69, 0.5);
}

.conclusion {
  text-align: center;
  margin: 60px 0;
  padding: 40px;
  background: linear-gradient(45deg, #ff6b6b 0%, #4ecdc4 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 16px rgba(255, 107, 107, 0.3);
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

  .operators-grid,
  .examples-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .range-inputs {
    flex-direction: column;
    align-items: stretch;
  }

  .range-field {
    width: 100%;
  }

  .search-steps {
    margin: 15px 0;
  }

  .step {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .question-header {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .final-query code {
    font-size: 0.8em;
  }
}
</style>