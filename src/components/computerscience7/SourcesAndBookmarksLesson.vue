<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>📚 Створення списків джерел</h2>

      <div class="definition-box">
        Збереження адрес вебсторінок, які ви використовували для навчання, є важливим. Один зі способів – це створення списку джерел.
      </div>

      <div class="source-importance">
        <h3>❓ Навіщо потрібні списки джерел?</h3>
        <div class="importance-grid">
          <div class="importance-card academic">
            <span class="icon">🎓</span>
            <h4>Академічна чесність</h4>
            <p>Показуєте, звідки отримали інформацію, демонструючи повагу до авторських прав</p>
          </div>
          <div class="importance-card verification">
            <span class="icon">✅</span>
            <h4>Перевірка фактів</h4>
            <p>Інші можуть перевірити ваші джерела та переконатися в достовірності інформації</p>
          </div>
          <div class="importance-card future">
            <span class="icon">🔄</span>
            <h4>Повторне використання</h4>
            <p>Зможете легко знайти та повторно використати корисні ресурси</p>
          </div>
          <div class="importance-card professional">
            <span class="icon">💼</span>
            <h4>Професійність</h4>
            <p>Демонструєте серйозний підхід до дослідницької роботи</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>📝 Що включає список джерел?</h2>

      <div class="source-components">
        <div class="component-grid">
          <div class="component-card url">
            <span class="icon">🔗</span>
            <h4>Адреса сторінки</h4>
            <p>Повний URL веб-сторінки</p>
            <div class="example">
              <code>https://uk.wikipedia.org/wiki/Україна</code>
            </div>
          </div>

          <div class="component-card title">
            <span class="icon">📄</span>
            <h4>Назва сайту та сторінки</h4>
            <p>Назва веб-сайту та конкретної сторінки</p>
            <div class="example">
              <strong>Сайт:</strong> Вікіпедія<br>
              <strong>Сторінка:</strong> "Україна"
            </div>
          </div>

          <div class="component-card author">
            <span class="icon">👤</span>
            <h4>Імена авторів</h4>
            <p>Автори матеріалів (якщо відомі)</p>
            <div class="example">
              Іван Петренко, Марія Сидоренко
            </div>
          </div>

          <div class="component-card date">
            <span class="icon">📅</span>
            <h4>Дата перегляду</h4>
            <p>Коли ви переглянули сторінку</p>
            <div class="example">
              Переглянуто: 15 березня 2024 р.
            </div>
          </div>
        </div>
      </div>

      <div class="source-builder">
        <h3>🛠️ Конструктор джерела</h3>
        <p>Заповніть поля, щоб створити правильно оформлене джерело:</p>

        <div class="builder-form">
          <div class="form-group">
            <label>🔗 URL адреса:</label>
            <input
              type="url"
              v-model="sourceBuilder.url"
              placeholder="https://example.com/page"
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label>🌐 Назва сайту:</label>
            <input
              type="text"
              v-model="sourceBuilder.siteName"
              placeholder="Назва веб-сайту"
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label>📄 Назва сторінки:</label>
            <input
              type="text"
              v-model="sourceBuilder.pageTitle"
              placeholder="Заголовок сторінки"
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label>👤 Автор(и) (необов'язково):</label>
            <input
              type="text"
              v-model="sourceBuilder.author"
              placeholder="Прізвище, Ім'я або залишіть порожнім"
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label>📅 Дата перегляду:</label>
            <input
              type="date"
              v-model="sourceBuilder.accessDate"
              class="form-input"
            >
          </div>
        </div>

        <div class="source-preview">
          <h4>📋 Готове джерело:</h4>
          <div class="formatted-source">
            {{ formatSource }}
          </div>
          <button @click="copySource" class="copy-button">
            <span class="copy-icon">📋</span>
            Копіювати джерело
          </button>
        </div>
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>🔖 Створення та використання закладок</h2>

      <div class="definition-box">
        <strong>Закладка</strong> – це збережена адреса веб-сторінки для швидкого доступу до часто відвідуваних ресурсів. Кожна закладка має ім'я та пов'язана з адресою вебсторінки.
      </div>

      <div class="bookmarks-benefits">
        <h3>✨ Переваги використання закладок</h3>
        <div class="benefits-grid">
          <div class="benefit-card">
            <span class="icon">⚡</span>
            <h4>Швидкий доступ</h4>
            <p>Миттєве відкриття улюблених сайтів</p>
          </div>
          <div class="benefit-card">
            <span class="icon">🗂️</span>
            <h4>Організація</h4>
            <p>Структуроване зберігання в папках</p>
          </div>
          <div class="benefit-card">
            <span class="icon">💾</span>
            <h4>Збереження</h4>
            <p>Не втратите важливі ресурси</p>
          </div>
          <div class="benefit-card">
            <span class="icon">🔄</span>
            <h4>Синхронізація</h4>
            <p>Доступ з різних пристроїв</p>
          </div>
        </div>
      </div>

      <div class="bookmarks-interface">
        <h3>🖥️ Панель закладок</h3>
        <p>Панель закладок зазвичай розташована у верхній частині вікна браузера під адресним рядком:</p>

        <div class="browser-mockup">
          <div class="browser-header">
            <div class="browser-controls">
              <span class="control red"></span>
              <span class="control yellow"></span>
              <span class="control green"></span>
            </div>
            <div class="address-bar">
              <span class="url-icon">🔒</span>
              <span class="url-text">https://school.example.com</span>
            </div>
          </div>

          <div class="bookmarks-toolbar">
            <div class="bookmark-item">📚 Навчальні матеріали</div>
            <div class="bookmark-item">🔬 Наукові статті</div>
            <div class="bookmark-item folder">📁 Проекти
              <div class="dropdown">
                <div class="dropdown-item">📊 Математика</div>
                <div class="dropdown-item">🧪 Хімія</div>
                <div class="dropdown-item">🌍 Географія</div>
              </div>
            </div>
            <div class="bookmark-item">📰 Новини</div>
            <div class="bookmark-item">🎵 Розваги</div>
          </div>

          <div class="page-content">
            <div class="content-placeholder">
              <span class="page-icon">📖</span>
              <span>Вміст веб-сторінки</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>📁 Організація закладок</h2>

      <div class="organization-guide">
        <h3>🎯 Стратегії організації</h3>

        <div class="strategy-tabs">
          <button
            v-for="strategy in organizationStrategies"
            :key="strategy.id"
            class="strategy-tab"
            :class="{ active: activeStrategy === strategy.id }"
            @click="activeStrategy = strategy.id"
          >
            <span class="tab-icon">{{ strategy.icon }}</span>
            {{ strategy.name }}
          </button>
        </div>

        <div class="strategy-content">
          <div v-for="strategy in organizationStrategies" :key="strategy.id" v-show="activeStrategy === strategy.id" class="strategy-panel">
            <h4>{{ strategy.name }}</h4>
            <p class="strategy-description">{{ strategy.description }}</p>

            <div class="folder-structure">
              <div class="folder-tree">
                <div v-for="folder in strategy.folders" :key="folder.name" class="folder-item">
                  <span class="folder-icon">📁</span>
                  <span class="folder-name">{{ folder.name }}</span>
                  <div class="folder-children" v-if="folder.children">
                    <div v-for="child in folder.children" :key="child" class="bookmark-child">
                      <span class="child-icon">🔖</span>
                      <span class="child-name">{{ child }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="folder-creation-demo">
        <h3>🆕 Як створити нову папку для закладок</h3>

        <div class="creation-steps">
          <div class="step-item" v-for="(step, index) in creationSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
              <div v-if="step.visual" class="step-visual">
                <div class="visual-element" :class="step.visual.type">
                  {{ step.visual.content }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5">
      <h2>⚙️ Диспетчер закладок</h2>

      <div class="definition-box">
        <strong>Диспетчер закладок</strong> – це спеціальна службова сторінка браузера, де можна переглянути та відредагувати всі створені закладки.
      </div>

      <div class="manager-demo">
        <h3>🛠️ Функції диспетчера закладок</h3>

        <div class="manager-mockup">
          <div class="manager-header">
            <h4>🔖 Диспетчер закладок</h4>
            <div class="manager-controls">
              <button class="manager-button">➕ Додати</button>
              <button class="manager-button">📁 Нова папка</button>
              <button class="manager-button">📤 Імпорт</button>
              <button class="manager-button">📥 Експорт</button>
            </div>
          </div>

          <div class="manager-content">
            <div class="bookmarks-list">
              <div class="bookmark-entry" v-for="bookmark in sampleBookmarks" :key="bookmark.id">
                <span class="bookmark-icon">{{ bookmark.icon }}</span>
                <div class="bookmark-details">
                  <div class="bookmark-title">{{ bookmark.title }}</div>
                  <div class="bookmark-url">{{ bookmark.url }}</div>
                </div>
                <div class="bookmark-actions">
                  <button class="action-button edit">✏️</button>
                  <button class="action-button delete">🗑️</button>
                  <button class="action-button move">📁</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="manager-features">
          <div class="feature-grid">
            <div class="feature-card">
              <span class="icon">✏️</span>
              <h4>Редагування</h4>
              <p>Змінити назву, URL або папку</p>
            </div>
            <div class="feature-card">
              <span class="icon">🗑️</span>
              <h4>Видалення</h4>
              <p>Видалити непотрібні закладки</p>
            </div>
            <div class="feature-card">
              <span class="icon">📁</span>
              <h4>Переміщення</h4>
              <p>Перенести в іншу папку</p>
            </div>
            <div class="feature-card">
              <span class="icon">🔍</span>
              <h4>Пошук</h4>
              <p>Швидко знайти потрібну закладку</p>
            </div>
          </div>
        </div>
      </div>

      <div class="browser-specific">
        <h3>🌐 Доступ в різних браузерах</h3>
        <div class="browser-grid">
          <div class="browser-card chrome">
            <span class="browser-icon">🟡</span>
            <h4>Google Chrome</h4>
            <div class="path">
              Меню (⋮) → Закладки → Диспетчер закладок
            </div>
            <div class="shortcut">Ctrl + Shift + O</div>
          </div>

          <div class="browser-card firefox">
            <span class="browser-icon">🦊</span>
            <h4>Mozilla Firefox</h4>
            <div class="path">
              Меню (☰) → Закладки → Показати всі закладки
            </div>
            <div class="shortcut">Ctrl + Shift + B</div>
          </div>

          <div class="browser-card safari">
            <span class="browser-icon">🧭</span>
            <h4>Safari</h4>
            <div class="path">
              Закладки → Показати всі закладки
            </div>
            <div class="shortcut">⌘ + Option + B</div>
          </div>

          <div class="browser-card edge">
            <span class="browser-icon">🔷</span>
            <h4>Microsoft Edge</h4>
            <div class="path">
              Меню (⋯) → Обране → Керувати обраним
            </div>
            <div class="shortcut">Ctrl + Shift + O</div>
          </div>
        </div>
      </div>
    </section>

    <div class="practical-exercise">
      <h3>🎯 Практичне завдання</h3>
      <div class="exercise-content">
        <h4>Проект "Туристичні маршрути нашого краю"</h4>
        <p>Уявіть, що ви працюєте над проектом про туристичні маршрути. Створіть список джерел для наступних ресурсів:</p>

        <div class="exercise-resources">
          <div class="resource-item" v-for="(resource, index) in exerciseResources" :key="index">
            <div class="resource-header">
              <span class="resource-number">{{ index + 1 }}</span>
              <h5>{{ resource.title }}</h5>
            </div>
            <div class="resource-details">
              <div><strong>URL:</strong> {{ resource.url }}</div>
              <div><strong>Сайт:</strong> {{ resource.site }}</div>
              <div><strong>Автор:</strong> {{ resource.author || 'Не вказано' }}</div>
              <div><strong>Дата публікації:</strong> {{ resource.publishDate || 'Не вказано' }}</div>
            </div>
            <button @click="createBookmark(resource)" class="bookmark-button">
              🔖 Створити закладку
            </button>
          </div>
        </div>

        <div v-if="createdBookmarks.length > 0" class="created-bookmarks">
          <h4>📚 Ваші створені джерела:</h4>
          <div class="bookmark-results">
            <div v-for="(bookmark, index) in createdBookmarks" :key="index" class="result-item">
              <div class="result-number">{{ index + 1 }}</div>
              <div class="result-content">{{ bookmark }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="conclusion">
      <h3>🎓 Підсумок</h3>
      <p>Правильне створення списків джерел та організація закладок – це основа ефективної роботи з інформацією в Інтернеті. Ці навички допомагають зберігати час, забезпечувати академічну чесність та створювати власну базу знань.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const sourceBuilder = ref({
  url: '',
  siteName: '',
  pageTitle: '',
  author: '',
  accessDate: new Date().toISOString().split('T')[0]
})

const activeStrategy = ref('subject')
const createdBookmarks = ref([])

const formatSource = computed(() => {
  const parts = []

  if (sourceBuilder.value.author) {
    parts.push(`${sourceBuilder.value.author}.`)
  }

  if (sourceBuilder.value.pageTitle) {
    parts.push(`"${sourceBuilder.value.pageTitle}".`)
  }

  if (sourceBuilder.value.siteName) {
    parts.push(`${sourceBuilder.value.siteName}.`)
  }

  if (sourceBuilder.value.url) {
    parts.push(`Веб. ${sourceBuilder.value.url}`)
  }

  if (sourceBuilder.value.accessDate) {
    const date = new Date(sourceBuilder.value.accessDate)
    const formattedDate = date.toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    parts.push(`(Дата звернення: ${formattedDate})`)
  }

  return parts.length > 0 ? parts.join(' ') : 'Заповніть поля для створення джерела...'
})

const organizationStrategies = ref([
  {
    id: 'subject',
    name: 'За предметами',
    icon: '📚',
    description: 'Організація за навчальними дисциплінами',
    folders: [
      { name: 'Математика', children: ['Алгебра', 'Геометрія', 'Калькулятори'] },
      { name: 'Історія', children: ['Україна', 'Всесвітня', 'Документи'] },
      { name: 'Література', children: ['Українська', 'Зарубіжна', 'Критика'] }
    ]
  },
  {
    id: 'purpose',
    name: 'За призначенням',
    icon: '🎯',
    description: 'Розподіл за типом використання',
    folders: [
      { name: 'Навчання', children: ['Підручники', 'Відеоуроки', 'Тести'] },
      { name: 'Дослідження', children: ['Статті', 'Бази даних', 'Архіви'] },
      { name: 'Розваги', children: ['Ігри', 'Відео', 'Музика'] }
    ]
  },
  {
    id: 'frequency',
    name: 'За частотою використання',
    icon: '⭐',
    description: 'Сортування за важливістю',
    folders: [
      { name: 'Щоденно', children: ['Розклад', 'Пошта', 'Соцмережі'] },
      { name: 'Тижнево', children: ['Новини', 'Хобі', 'Покупки'] },
      { name: 'Рідко', children: ['Довідники', 'Архіви', 'Старе'] }
    ]
  }
])

const creationSteps = ref([
  {
    title: 'Відкрийте меню закладок',
    description: 'Клікніть правою кнопкою миші на панелі закладок або використайте меню браузера',
    visual: { type: 'menu', content: '⋮ Меню' }
  },
  {
    title: 'Оберіть "Додати папку"',
    description: 'У контекстному меню виберіть опцію створення нової папки',
    visual: { type: 'option', content: '📁 Додати папку' }
  },
  {
    title: 'Введіть назву папки',
    description: 'Дайте папці зрозумілу назву, що відображає її вміст',
    visual: { type: 'input', content: 'Навчальні матеріали' }
  },
  {
    title: 'Збережіть папку',
    description: 'Підтвердіть створення, натиснувши "Зберегти" або "Готово"',
    visual: { type: 'button', content: '✅ Зберегти' }
  }
])

const sampleBookmarks = ref([
  { id: 1, icon: '📚', title: 'Вікіпедія', url: 'https://uk.wikipedia.org' },
  { id: 2, icon: '📰', title: 'Українська правда', url: 'https://www.pravda.com.ua' },
  { id: 3, icon: '🎬', title: 'YouTube', url: 'https://www.youtube.com' },
  { id: 4, icon: '📧', title: 'Gmail', url: 'https://gmail.com' },
  { id: 5, icon: '🔍', title: 'Google', url: 'https://www.google.com' }
])

const exerciseResources = ref([
  {
    title: 'Туристичні маршрути Закарпаття',
    url: 'https://tourism.zakarpattya.net/routes',
    site: 'Туризм Закарпаття',
    author: 'Олександр Коваль',
    publishDate: '15 лютого 2024'
  },
  {
    title: 'Карпатські стежки: путівник мандрівника',
    url: 'https://carpathian-trails.com.ua/guide',
    site: 'Карпатські стежки',
    author: null,
    publishDate: null
  },
  {
    title: 'Історичні пам\'ятки Львівщини',
    url: 'https://lviv-heritage.gov.ua/monuments',
    site: 'Львівська ОДА',
    author: 'Марія Петрик',
    publishDate: '3 березня 2024'
  }
])

function copySource() {
  const sourceText = formatSource.value
  if (navigator.clipboard) {
    navigator.clipboard.writeText(sourceText)
    alert('Джерело скопійовано в буфер обміну!')
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = sourceText
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('Джерело скопійовано!')
  }
}

function createBookmark(resource) {
  const currentDate = new Date().toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  let source = ''
  if (resource.author) {
    source += `${resource.author}. `
  }
  source += `"${resource.title}". ${resource.site}. Веб. ${resource.url} (Дата звернення: ${currentDate})`

  createdBookmarks.value.push(source)
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
  background: linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%);
  color: white;
  border-left-color: #8e44ad;
}

.section-1 .definition-box {
  background: rgba(255, 255, 255, 0.95);
  color: #2c3e50;
}

.section-2 {
  background: #f8f9fa;
  border-left-color: #3498db;
}

.section-3 {
  background: #f8f9fa;
  border-left-color: #e67e22;
}

.section-4 {
  background: #f8f9fa;
  border-left-color: #2ecc71;
}

.section-5 {
  background: #f8f9fa;
  border-left-color: #e74c3c;
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

.section-1 h3 {
  color: white;
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
  color: #8e44ad;
  font-size: 1.2em;
}

.importance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.importance-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  color: #2c3e50;
}

.importance-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.importance-card .icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.component-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.component-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
  border-color: #3498db;
}

.component-card .icon {
  font-size: 2.5em;
  margin-bottom: 15px;
  display: block;
  text-align: center;
}

.component-card h4 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 15px;
}

.example {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #3498db;
}

.example code {
  font-family: 'Courier New', monospace;
  color: #e91e63;
  font-weight: 600;
  word-break: break-all;
}

.source-builder {
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  border: 2px solid #e9ecef;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.source-builder h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.builder-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #2c3e50;
}

.form-input {
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s ease;
}

.form-input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.source-preview {
  margin-top: 30px;
  padding: 25px;
  background: #e8f4fd;
  border-radius: 10px;
  border: 2px solid #3498db;
}

.source-preview h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.formatted-source {
  background: white;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Times New Roman', serif;
  font-size: 14px;
  line-height: 1.6;
  color: #2c3e50;
  border-left: 4px solid #3498db;
  margin-bottom: 15px;
  min-height: 60px;
  display: flex;
  align-items: center;
}

.copy-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.copy-button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.benefit-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  border-color: #e67e22;
}

.benefit-card .icon {
  font-size: 2.5em;
  margin-bottom: 15px;
  display: block;
}

.browser-mockup {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  overflow: hidden;
  margin: 25px 0;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.browser-header {
  background: #e9ecef;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.browser-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red { background: #ff5f56; }
.control.yellow { background: #ffbd2e; }
.control.green { background: #27ca3f; }

.address-bar {
  flex: 1;
  background: white;
  padding: 8px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #dadce0;
}

.url-icon {
  color: #5f6368;
}

.url-text {
  color: #2c3e50;
  font-size: 14px;
}

.bookmarks-toolbar {
  background: #f1f3f4;
  padding: 8px 20px;
  display: flex;
  gap: 15px;
  border-bottom: 1px solid #e9ecef;
  position: relative;
}

.bookmark-item {
  background: rgba(255, 255, 255, 0.8);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
}

.bookmark-item:hover {
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.bookmark-item.folder:hover .dropdown {
  display: block;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  z-index: 10;
  min-width: 150px;
}

.dropdown-item {
  padding: 8px 15px;
  font-size: 13px;
  cursor: pointer;
  border-bottom: 1px solid #f8f9fa;
}

.dropdown-item:hover {
  background: #f8f9fa;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.page-content {
  padding: 40px;
  background: white;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-placeholder {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #6c757d;
  font-size: 1.2em;
}

.page-icon {
  font-size: 2em;
}

.strategy-tabs {
  display: flex;
  gap: 0;
  margin: 25px 0;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #e9ecef;
}

.strategy-tab {
  flex: 1;
  padding: 15px;
  border: none;
  background: #f8f9fa;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
}

.strategy-tab:hover {
  background: #e9ecef;
}

.strategy-tab.active {
  background: #2ecc71;
  color: white;
}

.tab-icon {
  font-size: 1.2em;
}

.strategy-content {
  background: white;
  border: 2px solid #2ecc71;
  border-radius: 8px;
  padding: 25px;
}

.strategy-panel h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.strategy-description {
  color: #6c757d;
  margin-bottom: 20px;
  line-height: 1.5;
}

.folder-structure {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #2ecc71;
}

.folder-tree {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.folder-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
}

.folder-icon,
.folder-name {
  display: inline;
}

.folder-name {
  font-weight: 600;
  color: #2c3e50;
}

.folder-children {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.bookmark-child {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.child-icon {
  font-size: 0.9em;
}

.child-name {
  color: #6c757d;
  font-size: 0.9em;
}

.creation-steps {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px 0;
}

.step-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.step-number {
  background: #2ecc71;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2em;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.step-content h4 {
  color: #2c3e50;
  margin: 0 0 10px 0;
}

.step-content p {
  color: #6c757d;
  margin: 0 0 15px 0;
  line-height: 1.5;
}

.step-visual {
  display: flex;
  justify-content: center;
}

.visual-element {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  color: white;
}

.visual-element.menu { background: #6c757d; }
.visual-element.option { background: #2ecc71; }
.visual-element.input { background: #3498db; }
.visual-element.button { background: #28a745; }

.manager-demo {
  margin: 30px 0;
}

.manager-mockup {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.manager-header {
  background: #f8f9fa;
  padding: 20px;
  border-bottom: 2px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
}

.manager-header h4 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.3em;
}

.manager-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.manager-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.manager-button:hover {
  background: #2980b9;
}

.manager-content {
  padding: 20px;
}

.bookmarks-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bookmark-entry {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;
}

.bookmark-entry:hover {
  background: white;
  border-color: #3498db;
}

.bookmark-icon {
  font-size: 1.5em;
}

.bookmark-details {
  flex: 1;
}

.bookmark-title {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.bookmark-url {
  color: #6c757d;
  font-size: 0.9em;
}

.bookmark-actions {
  display: flex;
  gap: 8px;
}

.action-button {
  background: transparent;
  border: 1px solid #e9ecef;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.2s ease;
}

.action-button.edit:hover { background: #fff3cd; border-color: #ffeaa7; }
.action-button.delete:hover { background: #f8d7da; border-color: #f5c6cb; }
.action-button.move:hover { background: #d4edda; border-color: #c3e6cb; }

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.feature-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  border-color: #e74c3c;
}

.feature-card .icon {
  font-size: 2em;
  margin-bottom: 10px;
  display: block;
}

.browser-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.browser-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.browser-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.browser-card.chrome:hover { border-color: #4285f4; }
.browser-card.firefox:hover { border-color: #ff9500; }
.browser-card.safari:hover { border-color: #0066cc; }
.browser-card.edge:hover { border-color: #0078d4; }

.browser-icon {
  font-size: 2em;
  display: block;
  text-align: center;
  margin-bottom: 10px;
}

.browser-card h4 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 15px;
}

.path {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9em;
  color: #6c757d;
  margin-bottom: 8px;
}

.shortcut {
  background: #2c3e50;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.8em;
  text-align: center;
  font-family: 'Courier New', monospace;
}

.practical-exercise {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  margin: 40px 0;
}

.practical-exercise h3 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
}

.practical-exercise h4 {
  margin-bottom: 15px;
  font-size: 1.4em;
}

.exercise-resources {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.resource-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.resource-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.resource-number {
  background: rgba(255, 255, 255, 0.2);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.resource-item h5 {
  margin: 0;
  font-size: 1.1em;
}

.resource-details {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 0.9em;
  line-height: 1.5;
}

.resource-details div {
  margin: 5px 0;
  word-break: break-all;
}

.bookmark-button {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-self: flex-start;
}

.bookmark-button:hover {
  background: #218838;
  transform: translateY(-2px);
}

.created-bookmarks {
  margin-top: 30px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.created-bookmarks h4 {
  margin-bottom: 20px;
  font-size: 1.3em;
}

.bookmark-results {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.result-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.result-number {
  background: rgba(255, 255, 255, 0.2);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9em;
  flex-shrink: 0;
}

.result-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 12px;
  border-radius: 6px;
  font-size: 0.9em;
  line-height: 1.4;
  font-family: 'Times New Roman', serif;
}

.conclusion {
  text-align: center;
  margin: 60px 0;
  padding: 40px;
  background: linear-gradient(45deg, #8e44ad 0%, #2ecc71 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 16px rgba(142, 68, 173, 0.3);
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

  .importance-grid,
  .component-grid,
  .benefits-grid,
  .feature-grid,
  .browser-grid,
  .exercise-resources {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .builder-form {
    grid-template-columns: 1fr;
  }

  .strategy-tabs {
    flex-direction: column;
  }

  .bookmarks-toolbar {
    flex-wrap: wrap;
    padding: 10px;
  }

  .manager-header {
    flex-direction: column;
    text-align: center;
  }

  .step-item {
    flex-direction: column;
    text-align: center;
  }

  .bookmark-entry {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .bookmark-actions {
    justify-content: center;
  }
}
</style>