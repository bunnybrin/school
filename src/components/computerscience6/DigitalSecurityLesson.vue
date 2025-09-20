<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>🔒 Цифрова безпека життєдіяльності</h2>

      <div class="definition-box">
        <strong>Цифровий слід</strong> – сукупність відомостей про користувача, які він залишає у мережі під час використання цифрових пристроїв та інтернету.
      </div>

      <div class="trace-types">
        <div class="trace-card passive">
          <span class="icon">👻</span>
          <h3>Пасивний цифровий слід</h3>
          <p class="description">Автоматично зібрані дані без вашого відома</p>
          <div class="examples-list">
            <div class="example-item">🌐 Відвідані сайти</div>
            <div class="example-item">🔍 Пошукові запити</div>
            <div class="example-item">📍 IP-адреса та геолокація</div>
            <div class="example-item">🕒 Час перебування на сайтах</div>
            <div class="example-item">🖱️ Поведінка користувача</div>
          </div>
        </div>

        <div class="trace-card active">
          <span class="icon">✍️</span>
          <h3>Активний цифровий слід</h3>
          <p class="description">Свідомо публіковані дані користувачем</p>
          <div class="examples-list">
            <div class="example-item">👤 Персональні дані на сайтах</div>
            <div class="example-item">📱 Публікації в соцмережах</div>
            <div class="example-item">📧 Електронні листи</div>
            <div class="example-item">💬 Коментарі та відгуки</div>
            <div class="example-item">📷 Фотографії та відео</div>
          </div>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>⚠️ Ризики цифрового сліду</h2>

      <div class="risks-grid">
        <div class="risk-card surveillance">
          <span class="icon">👁️</span>
          <h4>Моніторинг</h4>
          <p>Відстеження вашої активності в мережі третіми особами</p>
          <div class="risk-level high">Високий ризик</div>
        </div>

        <div class="risk-card commercial">
          <span class="icon">💰</span>
          <h4>Комерційне використання</h4>
          <p>Продаж ваших даних рекламним компаніям</p>
          <div class="risk-level medium">Середній ризик</div>
        </div>

        <div class="risk-card espionage">
          <span class="icon">🕵️</span>
          <h4>Шпигунство</h4>
          <p>Збір конфіденційної інформації зловмисниками</p>
          <div class="risk-level high">Високий ризик</div>
        </div>

        <div class="risk-card bullying">
          <span class="icon">😢</span>
          <h4>Кібербулінг</h4>
          <p>Використання особистої інформації для переслідування</p>
          <div class="risk-level high">Високий ризик</div>
        </div>

        <div class="risk-card theft">
          <span class="icon">🔐</span>
          <h4>Крадіжка даних</h4>
          <p>Несанкціоноване заволодіння особистими даними</p>
          <div class="risk-level critical">Критичний ризик</div>
        </div>
      </div>

      <div class="warning-box">
        <strong>🚨 Пам'ятайте:</strong> Інформація, що потрапила в інтернет, може залишитися там назавжди!
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>🛡️ Заходи для зменшення цифрового сліду</h2>

      <div class="protection-categories">
        <div class="category-card browser-settings">
          <h3>🌐 Налаштування браузера</h3>
          <div class="measures-list">
            <div class="measure-item">
              <span class="icon">🔒</span>
              <div class="measure-content">
                <h4>Конфіденційність</h4>
                <p>Налаштуйте рівень конфіденційності та безпеки</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="icon">🍪</span>
              <div class="measure-content">
                <h4>Cookies</h4>
                <p>Використовуйте сесійні файли cookie</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="icon">🗑️</span>
              <div class="measure-content">
                <h4>Очищення</h4>
                <p>Регулярно видаляйте історію та тимчасові файли</p>
              </div>
            </div>
          </div>
        </div>

        <div class="category-card device-security">
          <h3>📱 Безпека пристроїв</h3>
          <div class="measures-list">
            <div class="measure-item">
              <span class="icon">📷</span>
              <div class="measure-content">
                <h4>Вебкамера та мікрофон</h4>
                <p>Заборона використання для неперевірених сервісів</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="icon">🔑</span>
              <div class="measure-content">
                <h4>Паролі</h4>
                <p>Не зберігайте паролі на чужих комп'ютерах</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="icon">🚪</span>
              <div class="measure-content">
                <h4>Вихід з системи</h4>
                <p>Завжди завершуйте сесію після використання</p>
              </div>
            </div>
          </div>
        </div>

        <div class="category-card social-media">
          <h3>📲 Соціальні мережі</h3>
          <div class="measures-list">
            <div class="measure-item">
              <span class="icon">👥</span>
              <div class="measure-content">
                <h4>Список друзів</h4>
                <p>Не додавайте невідомих людей у друзі</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="icon">📝</span>
              <div class="measure-content">
                <h4>Персональні дані</h4>
                <p>Обмежте розголошення особистої інформації</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="icon">🗑️</span>
              <div class="measure-content">
                <h4>Старі акаунти</h4>
                <p>Видаляйте невикористовувані облікові записи</p>
              </div>
            </div>
          </div>
        </div>

        <div class="category-card communications">
          <h3>📧 Комунікації</h3>
          <div class="measures-list">
            <div class="measure-item">
              <span class="icon">📮</span>
              <div class="measure-content">
                <h4>Розсилки</h4>
                <p>Зменшіть кількість підписок на розсилки</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="icon">🔐</span>
              <div class="measure-content">
                <h4>Кібербезпека</h4>
                <p>Забезпечте захист персональних даних</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>✅ Практичні поради</h2>

      <div class="tips-grid">
        <div class="tip-card beginner">
          <span class="level-badge">Початківець</span>
          <h4>📱 Базові налаштування</h4>
          <div class="tip-steps">
            <div class="step">1️⃣ Налаштуйте приватність в соцмережах</div>
            <div class="step">2️⃣ Використовуйте складні паролі</div>
            <div class="step">3️⃣ Регулярно очищайте браузер</div>
          </div>
        </div>

        <div class="tip-card intermediate">
          <span class="level-badge">Досвідчений</span>
          <h4>🔒 Розширений захист</h4>
          <div class="tip-steps">
            <div class="step">1️⃣ Використовуйте VPN-сервіси</div>
            <div class="step">2️⃣ Встановіть блокувальники реклами</div>
            <div class="step">3️⃣ Регулярно оновлюйте ПЗ</div>
          </div>
        </div>

        <div class="tip-card advanced">
          <span class="level-badge">Експерт</span>
          <h4>🛡️ Максимальна безпека</h4>
          <div class="tip-steps">
            <div class="step">1️⃣ Використовуйте Tor Browser</div>
            <div class="step">2️⃣ Налаштуйте двофакторну автентифікацію</div>
            <div class="step">3️⃣ Регулярно перевіряйте витік даних</div>
          </div>
        </div>
      </div>
    </section>

    <section id="quiz-digital-security" class="section quiz-section">
      <h2>🧠 Перевір себе</h2>
      <LessonQuiz
        title="Тест: Цифрова безпека життєдіяльності"
        description="Обирай відповідь та за потреби тисни на підказку, щоб повернутися до теорії у потрібному розділі."
        :questions="quizQuestions"
      />
    </section>

    <div class="interactive-checklist">
      <h3>📋 Чек-лист цифрової безпеки</h3>
      <div class="checklist-items">
        <label class="checklist-item">
          <input type="checkbox" />
          <span class="checkmark">✓</span>
          Налаштував конфіденційність у браузері
        </label>
        <label class="checklist-item">
          <input type="checkbox" />
          <span class="checkmark">✓</span>
          Перевірив налаштування приватності в соцмережах
        </label>
        <label class="checklist-item">
          <input type="checkbox" />
          <span class="checkmark">✓</span>
          Очистив історію браузера та cookies
        </label>
        <label class="checklist-item">
          <input type="checkbox" />
          <span class="checkmark">✓</span>
          Видалив невикористовувані акаунти
        </label>
        <label class="checklist-item">
          <input type="checkbox" />
          <span class="checkmark">✓</span>
          Змінив слабкі паролі на складні
        </label>
        <label class="checklist-item">
          <input type="checkbox" />
          <span class="checkmark">✓</span>
          Встановив антивірусне програмне забезпечення
        </label>
      </div>
    </div>

    <div class="conclusion">
      <h3>🎯 Головне</h3>
      <p>Цифрова безпека – це не одноразовий захід, а постійна практика свідомого та відповідального користування цифровими технологіями.</p>
    </div>
  </div>
</template>

<script setup>
import LessonQuiz from '../common/LessonQuiz.vue'

const quizQuestions = [
  {
    question: 'Що характеризує пасивний цифровий слід?',
    options: [
      'Дані, які автоматично збираються без участі користувача',
      'Інформація, яку людина публікує свідомо',
      'Видалені акаунти та повідомлення'
    ],
    correct: 0,
    hint: 'Переглянь перший розділ – там пояснюється, що пасивний слід утворюється автоматично.',
    sectionId: 'section1'
  },
  {
    question: 'Який ризик описує продаж ваших даних рекламним компаніям?',
    options: ['Моніторинг', 'Комерційне використання', 'Кібербулінг'],
    correct: 1,
    hint: 'У розділі про ризики зазначено, що комерційне використання пов’язане з продажем інформації.',
    sectionId: 'section2'
  },
  {
    question: 'Що допоможе зменшити цифровий слід у соціальних мережах?',
    options: [
      'Додавати всіх охочих у друзі',
      'Обмежувати розголошення персональних даних',
      'Ніколи не виходити з облікових записів'
    ],
    correct: 1,
    hint: 'Розділ із заходами безпеки радить уважно ставитися до персональної інформації у соцмережах.',
    sectionId: 'section3'
  },
  {
    question: 'Який крок рекомендують початківцям у практичних порадах?',
    options: [
      'Використовувати Tor Browser',
      'Налаштувати приватність у соціальних мережах',
      'Регулярно перевіряти витоки даних'
    ],
    correct: 1,
    hint: 'У блоці «Початківець» серед перших кроків згадується налаштування приватності в соцмережах.',
    sectionId: 'section4'
  }
]
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 8px;
  border-left: 4px solid #dee2e6;
}

.section-1 {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border-left-color: #e74c3c;
}

.section-1 .definition-box {
  background: rgba(255, 255, 255, 0.95);
  color: #2c3e50;
}

.section-2 {
  background: #f8f9fa;
  border-left-color: #f39c12;
}

.section-3 {
  background: #f8f9fa;
  border-left-color: #27ae60;
}

.section-4 {
  background: #f8f9fa;
  border-left-color: #3498db;
}

.quiz-section {
  background: #eef6ff;
  border-left-color: #0d6efd;
}

.section h2 {
  font-size: 2em;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(255,255,255,0.3);
}

.section-1 h2 {
  color: white;
}

.section h2:not(.section-1 h2) {
  color: #2c3e50;
}

.section h3 {
  color: #34495e;
  font-size: 1.4em;
  margin: 25px 0 15px 0;
}

.section-1 h3 {
  color: white;
}

.definition-box {
  background: white;
  padding: 25px;
  border-radius: 8px;
  margin: 25px 0;
  border: 1px solid #e9ecef;
  border-left: 4px solid #6c757d;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-size: 1.1em;
}

.definition-box strong {
  color: #e74c3c;
  font-size: 1.2em;
}

.trace-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.trace-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px;
  border-radius: 12px;
  border: 2px solid;
  color: #2c3e50;
}

.trace-card.passive {
  border-color: #9b59b6;
  background: linear-gradient(135deg, #f8f5ff 0%, #ede7f6 100%);
}

.trace-card.active {
  border-color: #3498db;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
}

.trace-card .icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
  text-align: center;
}

.description {
  font-style: italic;
  margin: 15px 0;
  font-size: 1.1em;
}

.examples-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
}

.example-item {
  background: rgba(255, 255, 255, 0.8);
  padding: 12px;
  border-radius: 6px;
  border-left: 3px solid currentColor;
  font-size: 0.95em;
}

.risks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.risk-card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.risk-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.risk-card .icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
}

.risk-level {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
}

.risk-level.high {
  background: #e74c3c;
}

.risk-level.medium {
  background: #f39c12;
}

.risk-level.critical {
  background: #8e44ad;
}

.warning-box {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin: 25px 0;
  text-align: center;
  font-size: 1.1em;
  box-shadow: 0 4px 8px rgba(255,107,107,0.3);
}

.protection-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.category-card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.category-card h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
}

.measures-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.measure-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #3498db;
}

.measure-item .icon {
  font-size: 1.5em;
  margin-top: 5px;
}

.measure-content h4 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.measure-content p {
  margin: 0;
  color: #7f8c8d;
  font-size: 0.9em;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.tip-card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  border: 2px solid;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.tip-card.beginner {
  border-color: #27ae60;
  background: linear-gradient(135deg, #d5f4e6 0%, #c8e6c9 100%);
}

.tip-card.intermediate {
  border-color: #f39c12;
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
}

.tip-card.advanced {
  border-color: #e74c3c;
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
}

.level-badge {
  position: absolute;
  top: -12px;
  left: 20px;
  background: currentColor;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: bold;
}

.tip-card.beginner .level-badge {
  background: #27ae60;
}

.tip-card.intermediate .level-badge {
  background: #f39c12;
}

.tip-card.advanced .level-badge {
  background: #e74c3c;
}

.tip-steps {
  margin-top: 15px;
}

.step {
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.5);
  font-size: 0.95em;
}

.step:last-child {
  border-bottom: none;
}

.interactive-checklist {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  margin: 40px 0;
}

.interactive-checklist h3 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.5em;
}

.checklist-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checklist-item:hover {
  background: rgba(255, 255, 255, 0.2);
}

.checklist-item input {
  display: none;
}

.checkmark {
  width: 25px;
  height: 25px;
  border: 2px solid white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  transition: all 0.3s ease;
}

.checklist-item input:checked + .checkmark {
  background: #27ae60;
  color: white;
  border-color: #27ae60;
}

.conclusion {
  text-align: center;
  margin: 50px 0;
  padding: 30px;
  background: linear-gradient(45deg, #27ae60 0%, #229954 100%);
  border-radius: 12px;
  color: white;
}

.conclusion p {
  font-size: 1.2em;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  .trace-types,
  .risks-grid,
  .protection-categories,
  .tips-grid,
  .checklist-items {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .measure-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>