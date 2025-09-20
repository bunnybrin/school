<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>📧 Електронне листування (Електронна пошта)</h2>

      <div class="definition-box">
        <strong>Електронна пошта (e-mail)</strong> – це служба Інтернету, призначена для пересилання комп'ютерними мережами повідомлень (електронних листів) від деякого користувача одному чи групі адресатів.
      </div>

      <div class="history-section">
        <h3>📜 Цікаві факти з історії:</h3>

        <div class="history-timeline">
          <div class="timeline-item">
            <div class="timeline-icon">👨‍💻</div>
            <div class="timeline-content">
              <h4>1971 рік</h4>
              <p>Рей Томлінсон розробив першу поштову програму <strong>SNDMSG</strong> (send message – надіслати повідомлення) для мережі ARPANet.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">📮</div>
            <div class="timeline-content">
              <h4>Перша адреса</h4>
              <p>Першою адресою електронної пошти була: <code>tomlinson@bbn-tenexa</code></p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">@</div>
            <div class="timeline-content">
              <h4>Символ @</h4>
              <p>Рей Томлінсон обрав символ @ для з'єднання частин адреси. Українці називають його «собачка» або «равлик».</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">✉️</div>
            <div class="timeline-content">
              <h4>Перший лист</h4>
              <p>Першим листом було повідомлення Рея Томлінсона колегам про появу нової можливості спілкування.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="visual-grid">
        <div class="info-card">
          <span class="icon">🌐</span>
          <h4>Глобальність</h4>
          <p>Миттєве спілкування по всьому світу</p>
        </div>
        <div class="info-card">
          <span class="icon">💰</span>
          <h4>Економічність</h4>
          <p>Безкоштовна передача повідомлень</p>
        </div>
        <div class="info-card">
          <span class="icon">📎</span>
          <h4>Вкладення</h4>
          <p>Можливість надсилати файли</p>
        </div>
        <div class="info-card">
          <span class="icon">⚡</span>
          <h4>Швидкість</h4>
          <p>Доставка за лічені секунди</p>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>📮 Електронна поштова скринька</h2>

      <div class="email-structure">
        <h3>📧 Структура email-адреси</h3>
        <div class="email-demo">
          <div class="email-parts">
            <div class="email-part user">
              <span class="part-label">Ім'я користувача (логін)</span>
              <div class="part-value">pupil</div>
            </div>
            <div class="email-separator">@</div>
            <div class="email-part domain">
              <span class="part-label">Адреса поштової служби</span>
              <div class="part-value">ukr.net</div>
            </div>
          </div>
          <div class="email-result">
            <strong>Повна адреса:</strong> <code>pupil@ukr.net</code>
          </div>
        </div>
      </div>

      <div class="mailbox-demo">
        <h3>💻 Інтерфейс поштової скриньки</h3>

        <div class="mock-mailbox">
          <div class="mailbox-sidebar">
            <div class="sidebar-item active">📥 Вхідні <span class="count">5</span></div>
            <div class="sidebar-item">📤 Надіслані</div>
            <div class="sidebar-item">📝 Чернетки</div>
            <div class="sidebar-item">⭐ Помічені</div>
            <div class="sidebar-item">🗑️ Видалені</div>
            <div class="sidebar-item">📁 Архів</div>
          </div>

          <div class="mailbox-content">
            <div class="compose-button">✏️ Написати</div>
            <div class="email-list">
              <div class="email-item unread">
                <div class="email-sender">Василь Петренко</div>
                <div class="email-subject">Домашнє завдання з математики</div>
                <div class="email-preview">Привіт! Не міг би ти допомогти з задачею номер 15...</div>
                <div class="email-time">10:30</div>
              </div>
              <div class="email-item">
                <div class="email-sender">Школа №5</div>
                <div class="email-subject">Розклад на наступний тиждень</div>
                <div class="email-preview">Шановні учні! Інформуємо вас про зміни в розкладі...</div>
                <div class="email-time">Вчора</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="email-operations">
        <h3>⚙️ Операції з електронними листами</h3>

        <div class="operation-steps">
          <div class="step-group">
            <h4>📝 Створення та надсилання листа:</h4>
            <div class="steps">
              <div class="step">1. Вибрати «Написати»</div>
              <div class="step">2. Заповнити поле «Кому»</div>
              <div class="step">3. Заповнити поле «Тема»</div>
              <div class="step">4. Ввести текст листа</div>
              <div class="step">5. Вкласти файли (якщо потрібно)</div>
              <div class="step">6. Натиснути «Надіслати»</div>
            </div>
          </div>

          <div class="step-group">
            <h4>📬 Операції з отриманими листами:</h4>
            <div class="operations-grid">
              <div class="operation-card">
                <span class="icon">👁️</span>
                <h5>Прочитати</h5>
                <p>Вибрати лист у списку</p>
              </div>
              <div class="operation-card">
                <span class="icon">📎</span>
                <h5>Переглянути вкладення</h5>
                <p>Відкрити або зберегти файли</p>
              </div>
              <div class="operation-card">
                <span class="icon">↩️</span>
                <h5>Відповісти</h5>
                <p>Написати відповідь автору</p>
              </div>
              <div class="operation-card">
                <span class="icon">↪️</span>
                <h5>Переслати</h5>
                <p>Надіслати іншому користувачу</p>
              </div>
              <div class="operation-card">
                <span class="icon">🗑️</span>
                <h5>Видалити</h5>
                <p>Помістити до кошика</p>
              </div>
              <div class="operation-card">
                <span class="icon">🔗</span>
                <h5>Ланцюжки</h5>
                <p>Групування пов'язаних листів</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="warning-box">
        <strong>⚠️ Важливо:</strong> Файли з розширенням .exe автоматично блокуються більшістю поштових сервісів з міркувань безпеки.
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>📔 Адресна книга</h2>

      <div class="definition-box">
        <strong>Адресна книга</strong> – це електронний записник для зберігання контактів – даних про осіб, з якими листується користувач.
      </div>

      <div class="addressbook-demo">
        <h3>📋 Призначення адресної книги</h3>
        <div class="benefits-grid">
          <div class="benefit-card">
            <span class="icon">⚡</span>
            <h4>Швидкість</h4>
            <p>Швидке введення адрес без помилок</p>
          </div>
          <div class="benefit-card">
            <span class="icon">🗂️</span>
            <h4>Організація</h4>
            <p>Впорядковане зберігання контактів</p>
          </div>
          <div class="benefit-card">
            <span class="icon">👥</span>
            <h4>Групування</h4>
            <p>Створення списків розсилання</p>
          </div>
        </div>
      </div>

      <div class="contact-creation">
        <h3>➕ Додавання контакту (приклад Gmail)</h3>

        <div class="instruction-flow">
          <div class="flow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Відкрити поштову скриньку</h4>
              <div class="step-visual">📧 Gmail</div>
            </div>
          </div>

          <div class="flow-arrow">⬇️</div>

          <div class="flow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Вибрати кнопку «Контакти»</h4>
              <div class="step-visual">👥 Контакти</div>
            </div>
          </div>

          <div class="flow-arrow">⬇️</div>

          <div class="flow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Натиснути «Створити контакт»</h4>
              <div class="step-visual">➕ Новий контакт</div>
            </div>
          </div>

          <div class="flow-arrow">⬇️</div>

          <div class="flow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Заповнити дані</h4>
              <div class="step-visual">
                <div class="contact-form">
                  <div class="form-field">📛 Ім'я: Олексій Коваль</div>
                  <div class="form-field">📧 Email: oleksiy@gmail.com</div>
                  <div class="form-field">📱 Телефон: +380...</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flow-arrow">⬇️</div>

          <div class="flow-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Натиснути «Зберегти»</h4>
              <div class="step-visual">💾 Зберегти</div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-usage">
        <h3>📤 Використання контактів</h3>
        <div class="usage-demo">
          <div class="demo-step">
            <span class="step-icon">1️⃣</span>
            <p>Під час створення листа натисніть поле <strong>«Кому»</strong></p>
          </div>
          <div class="demo-step">
            <span class="step-icon">2️⃣</span>
            <p>Відкриється вікно <strong>«Вибрати контакти»</strong></p>
          </div>
          <div class="demo-step">
            <span class="step-icon">3️⃣</span>
            <p>Оберіть потрібних одержувачів зі списку</p>
          </div>
          <div class="demo-step">
            <span class="step-icon">4️⃣</span>
            <p>Їхні адреси автоматично додадуться в поле «Кому»</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>📊 Списки розсилання</h2>

      <div class="definition-box">
        <strong>Списки розсилання</strong> – це групи контактів, об'єднані в адресній книзі для швидкої підготовки та надсилання листів однакового змісту групі адресатів.
      </div>

      <div class="mailing-benefits">
        <h3>🎯 Переваги списків розсилання</h3>
        <div class="benefits-showcase">
          <div class="benefit-item">
            <span class="icon">⚡</span>
            <h4>Швидкість</h4>
            <p>Один клік – багато одержувачів</p>
          </div>
          <div class="benefit-item">
            <span class="icon">🎯</span>
            <h4>Точність</h4>
            <p>Уникнення помилок в адресах</p>
          </div>
          <div class="benefit-item">
            <span class="icon">📋</span>
            <h4>Організація</h4>
            <p>Логічне групування контактів</p>
          </div>
          <div class="benefit-item">
            <span class="icon">🔄</span>
            <h4>Повторність</h4>
            <p>Багаторазове використання</p>
          </div>
        </div>
      </div>

      <div class="group-creation">
        <h3>👥 Створення групи контактів (Gmail)</h3>

        <div class="creation-steps">
          <div class="creation-step">
            <div class="step-header">
              <span class="step-num">1</span>
              <h4>Відкриття вікна вибору</h4>
            </div>
            <p>Відкрити вікно «Вибрати контакти»</p>
            <div class="step-visual">
              <div class="mock-window">📋 Вибрати контакти</div>
            </div>
          </div>

          <div class="creation-step">
            <div class="step-header">
              <span class="step-num">2</span>
              <h4>Вибір контактів</h4>
            </div>
            <p>Встановити прапорці поруч із потрібними контактами</p>
            <div class="step-visual">
              <div class="contact-list">
                <div class="contact-item">☑️ Олексій Коваль</div>
                <div class="contact-item">☑️ Марія Шевченко</div>
                <div class="contact-item">☑️ Петро Мельник</div>
                <div class="contact-item">☐ Анна Кравченко</div>
              </div>
            </div>
          </div>

          <div class="creation-step">
            <div class="step-header">
              <span class="step-num">3</span>
              <h4>Керування мітками</h4>
            </div>
            <p>Натиснути «Керувати мітками» → «Створити мітку»</p>
            <div class="step-visual">
              <div class="button-demo">🏷️ Керувати мітками</div>
            </div>
          </div>

          <div class="creation-step">
            <div class="step-header">
              <span class="step-num">4</span>
              <h4>Назва групи</h4>
            </div>
            <p>Ввести ім'я групи (наприклад, "Однокласники", "Друзі", "Робочі контакти")</p>
            <div class="step-visual">
              <div class="input-demo">
                <input type="text" value="Однокласники 7-Б" readonly>
              </div>
            </div>
          </div>

          <div class="creation-step">
            <div class="step-header">
              <span class="step-num">5</span>
              <h4>Збереження</h4>
            </div>
            <p>Натиснути «Зберегти» та закрити вікно</p>
            <div class="step-visual">
              <div class="button-demo success">💾 Зберегти</div>
            </div>
          </div>
        </div>
      </div>

      <div class="group-examples">
        <h3>📝 Приклади груп розсилання</h3>
        <div class="examples-grid">
          <div class="example-card">
            <span class="icon">🎓</span>
            <h4>Освіта</h4>
            <ul>
              <li>Однокласники</li>
              <li>Вчителі</li>
              <li>Батьківський комітет</li>
            </ul>
          </div>
          <div class="example-card">
            <span class="icon">👨‍👩‍👧‍👦</span>
            <h4>Родина</h4>
            <ul>
              <li>Близькі родичі</li>
              <li>Двоюрідні брати/сестри</li>
              <li>Сімейні друзі</li>
            </ul>
          </div>
          <div class="example-card">
            <span class="icon">🎨</span>
            <h4>Хобі</h4>
            <ul>
              <li>Спортивна команда</li>
              <li>Гурток малювання</li>
              <li>Музичний клуб</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5">
      <h2>🛡️ Етикет та безпечне листування</h2>

      <div class="etiquette-rules">
        <h3>🤝 Етикет електронного листування</h3>

        <div class="rules-grid">
          <div class="rule-card do">
            <div class="rule-icon">✅</div>
            <h4>МОЖНА і ТРЕБА</h4>
            <ul>
              <li>Починайте з привітання, завершуйте підписом</li>
              <li>Представляйтесь незнайомим людям</li>
              <li>Використовуйте «будь ласка» та «дякую»</li>
              <li>Зазначайте тему листа</li>
              <li>Перевіряйте граматику</li>
              <li>Попереджайте про вкладені файли</li>
              <li>Використовуйте смайли для емоційності 😊</li>
            </ul>
          </div>

          <div class="rule-card dont">
            <div class="rule-icon">❌</div>
            <h4>НЕ МОЖНА</h4>
            <ul>
              <li>Писати ВЕЛИКИМИ ЛІТЕРАМИ (це КРИК!)</li>
              <li>Використовувати конфліктні фрази</li>
              <li>Надсилати файли без попередження</li>
              <li>Ігнорувати тему листа</li>
              <li>Відправляти листи з помилками</li>
              <li>Бути грубим чи неввічливим</li>
              <li>Спамити однаковими повідомленнями</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="email-example">
        <h3>✉️ Приклад правильно оформленого листа</h3>

        <div class="email-mock">
          <div class="email-header">
            <div class="header-field">
              <strong>Кому:</strong> teacher@school.edu.ua
            </div>
            <div class="header-field">
              <strong>Тема:</strong> Питання щодо домашнього завдання з історії
            </div>
          </div>

          <div class="email-body">
            <p><strong>Добрий день, Ольго Петрівно!</strong></p>

            <p>Мене звати Максим Коваленко, я учень 7-Б класу.</p>

            <p>У мене виникло питання щодо домашнього завдання з історії на завтра. Чи можна використовувати додаткові джерела крім підручника для написання есе про Римську Імперію?</p>

            <p>Будь ласка, підкажіть, якщо це можливо.</p>

            <p>Дякую за увагу!</p>

            <p><strong>З повагою,<br>
            Максим Коваленко<br>
            учень 7-Б класу<br>
            maksim.kovalenko@gmail.com</strong></p>
          </div>
        </div>
      </div>

      <div class="security-rules">
        <h3>🔒 Правила безпечного користування</h3>

        <div class="security-grid">
          <div class="security-card">
            <span class="icon">🔐</span>
            <h4>Захист паролів</h4>
            <ul>
              <li>Використовуйте складні паролі</li>
              <li>Не повідомляйте пароль іншим</li>
              <li>Регулярно змінюйте паролі</li>
              <li>Увімкніть двофакторну автентифікацію</li>
            </ul>
          </div>

          <div class="security-card">
            <span class="icon">🦠</span>
            <h4>Захист від вірусів</h4>
            <ul>
              <li>Не відкривайте підозрілі вкладення</li>
              <li>Остерігайтесь файлів .exe від незнайомців</li>
              <li>Використовуйте антивірус</li>
              <li>Перевіряйте файли перед відкриттям</li>
            </ul>
          </div>

          <div class="security-card">
            <span class="icon">🎭</span>
            <h4>Захист особистих даних</h4>
            <ul>
              <li>Не повідомляйте особисту інформацію</li>
              <li>Остерігайтесь фішингу</li>
              <li>Перевіряйте адресу відправника</li>
              <li>Не переходьте за підозрілими посиланнями</li>
            </ul>
          </div>

          <div class="security-card">
            <span class="icon">📞</span>
            <h4>Спілкування з незнайомцями</h4>
            <ul>
              <li>Будьте обережні з новими контактами</li>
              <li>Не зустрічайтесь з інтернет-знайомими</li>
              <li>Повідомляйте батькам про підозрілі листи</li>
              <li>Блокуйте спамерів та хуліганів</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="warning-box danger">
        <strong>⚠️ Пам'ятайте:</strong> Електронна пошта може бути небезпечною! Завжди будьте обережні з невідомими листами, посиланнями та вкладеннями. У разі сумнівів зверніться до батьків або вчителя.
      </div>
    </section>

    <section id="section6" class="section section-6 quiz-section">
      <h2>🧠 Перевір себе</h2>
      <LessonQuiz
        title="Тест: Електронне листування"
        description="Обери правильні варіанти й скористайся підказками, щоб повернутися до відповідного розділу уроку."
        :questions="lessonQuizQuestions"
      />
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Електронна пошта – це потужний засіб спілкування, який вимагає відповідального підходу. Дотримуйтесь правил етикету та безпеки, і ви зможете ефективно використовувати email для навчання та спілкування!</p>
    </div>
  </div>
</template>

<script setup>
import LessonQuiz from '../common/LessonQuiz.vue'

const lessonQuizQuestions = [
  {
    question: 'Хто створив першу поштову програму SNDMSG для мережі ARPANet?',
    options: ['Білл Гейтс', 'Рей Томлінсон', 'Тім Бернерс-Лі'],
    correct: 1,
    hint: 'У першому розділі розповідається, що саме Рей Томлінсон став автором першої програми для електронної пошти.',
    sectionId: 'section1'
  },
  {
    question: 'Яка частина електронної адреси називається ім’ям користувача (логіном)?',
    options: [
      'Фрагмент до символу @',
      'Символ @ між частинами адреси',
      'Домен поштової служби після @'
    ],
    correct: 0,
    hint: 'У розділі про структуру email показано, що логін знаходиться перед символом @.',
    sectionId: 'section2'
  },
  {
    question: 'Для чого зручно використовувати адресну книгу в пошті?',
    options: [
      'Щоб автоматично видаляти листи',
      'Щоб впорядковувати контакти та швидко додавати адреси у лист',
      'Щоб шифрувати всі повідомлення'
    ],
    correct: 1,
    hint: 'У третьому розділі адресна книга описується як електронний записник для контактів і швидкого вибору одержувачів.',
    sectionId: 'section3'
  },
  {
    question: 'Яку перевагу дає створення списків розсилання?',
    options: [
      'Можливість надсилати листи групі адресатів одним натисканням',
      'Захистити пошту від вірусів',
      'Автоматично перекладати листи іншою мовою'
    ],
    correct: 0,
    hint: 'У четвертому розділі зазначено, що списки розсилання дозволяють швидко відправляти однакові листи багатьом людям.',
    sectionId: 'section4'
  },
  {
    question: 'Яке правило безпечного листування слід виконувати згідно з рекомендаціями уроку?',
    options: [
      'Відкривати всі вкладення, щоб не пропустити важливі дані',
      'Писати повідомлення лише великими літерами',
      'Не повідомляти свій пароль та бути обережним із підозрілими файлами'
    ],
    correct: 2,
    hint: 'У розділі про етикет та безпеку наголошено на захисті паролів і обережності з вкладеннями.',
    sectionId: 'section5'
  }
]
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
  border-left-color: #fd7e14;
}

.section-5 {
  background: #f8f9fa;
  border-left-color: #dc3545;
}

.section-6.quiz-section {
  background: #f8f9fa;
  border-left-color: #6610f2;
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
}

.info-card:hover {
  border-color: #dee2e6;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

.icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

/* History Timeline */
.history-timeline {
  margin: 20px 0;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.timeline-icon {
  font-size: 2em;
  margin-right: 15px;
  min-width: 60px;
  text-align: center;
}

.timeline-content h4 {
  margin: 0 0 5px 0;
  color: #007bff;
  font-size: 1.1em;
}

.timeline-content p {
  margin: 0;
  line-height: 1.4;
}

.timeline-content code {
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  color: #e83e8c;
}

/* Email Structure */
.email-demo {
  background: white;
  padding: 25px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.email-parts {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 10px;
}

.email-part {
  text-align: center;
  padding: 15px;
  border: 2px dashed #6c757d;
  border-radius: 8px;
  min-width: 150px;
}

.email-part.user {
  border-color: #007bff;
}

.email-part.domain {
  border-color: #28a745;
}

.part-label {
  display: block;
  font-size: 0.8em;
  color: #6c757d;
  margin-bottom: 5px;
}

.part-value {
  font-size: 1.2em;
  font-weight: bold;
  color: #2c3e50;
}

.email-separator {
  font-size: 2em;
  font-weight: bold;
  color: #dc3545;
  margin: 0 15px;
}

.email-result {
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
}

.email-result code {
  font-size: 1.1em;
  color: #e83e8c;
  background: white;
  padding: 5px 10px;
  border-radius: 4px;
}

/* Mailbox Demo */
.mock-mailbox {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.mailbox-sidebar {
  background: #f8f9fa;
  padding: 15px;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.sidebar-item {
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  white-space: nowrap;
}

.sidebar-item:hover {
  background: #e9ecef;
}

.sidebar-item.active {
  background: #007bff;
  color: white;
}

.count {
  background: #dc3545;
  color: white;
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 0.7em;
  margin-left: 5px;
}

.mailbox-content {
  padding: 15px;
}

.compose-button {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 15px;
  cursor: pointer;
}

.compose-button:hover {
  background: #0056b3;
}

.email-list {
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

.email-item {
  display: grid;
  grid-template-columns: 150px 1fr 200px 80px;
  gap: 15px;
  padding: 12px 15px;
  border-bottom: 1px solid #f8f9fa;
  align-items: center;
}

.email-item:hover {
  background: #f8f9fa;
}

.email-item.unread {
  background: #fff3cd;
  font-weight: bold;
}

.email-sender {
  font-weight: 600;
  color: #2c3e50;
}

.email-subject {
  font-weight: 600;
  color: #495057;
}

.email-preview {
  color: #6c757d;
  font-size: 0.9em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.email-time {
  color: #6c757d;
  font-size: 0.8em;
  text-align: right;
}

/* Operations */
.operation-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 20px 0;
}

.step-group h4 {
  color: #495057;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e9ecef;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.step {
  background: white;
  padding: 10px 15px;
  border-radius: 6px;
  border-left: 3px solid #007bff;
  font-size: 0.9em;
}

.operations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.operation-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.operation-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.operation-card h5 {
  margin: 10px 0 5px 0;
  color: #2c3e50;
  font-size: 0.9em;
}

.operation-card p {
  margin: 0;
  font-size: 0.8em;
  color: #6c757d;
}

.warning-box {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
  border: 1px solid #ffeaa7;
  border-left: 4px solid #f39c12;
}

.warning-box.danger {
  background: #f8d7da;
  border-color: #f5c6cb;
  border-left-color: #dc3545;
}

/* Address Book */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.benefit-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.instruction-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 30px 0;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  width: 100%;
  max-width: 600px;
}

.step-number {
  background: #007bff;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.step-visual {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 4px;
  font-family: monospace;
  color: #495057;
  margin-top: 8px;
}

.contact-form {
  font-family: inherit;
}

.form-field {
  margin: 5px 0;
  font-size: 0.9em;
}

.flow-arrow {
  font-size: 1.5em;
  color: #6c757d;
}

.usage-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.demo-step {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 15px;
}

.step-icon {
  font-size: 1.5em;
}

/* Mailing Lists */
.benefits-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.benefit-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.creation-steps {
  margin: 20px 0;
}

.creation-step {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  border: 1px solid #e9ecef;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.step-num {
  background: #fd7e14;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.step-header h4 {
  margin: 0;
  color: #2c3e50;
}

.mock-window {
  background: #f8f9fa;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  text-align: center;
  margin-top: 10px;
}

.contact-list {
  margin-top: 10px;
}

.contact-item {
  background: #f8f9fa;
  padding: 8px 12px;
  margin: 5px 0;
  border-radius: 4px;
  font-family: monospace;
}

.button-demo {
  background: #fd7e14;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  display: inline-block;
  margin-top: 10px;
}

.button-demo.success {
  background: #28a745;
}

.input-demo {
  margin-top: 10px;
}

.input-demo input {
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 0.9em;
  width: 200px;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.example-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.example-card ul {
  margin: 10px 0 0 0;
  padding-left: 20px;
}

.example-card li {
  margin: 5px 0;
  color: #495057;
}

/* Etiquette and Security */
.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 20px 0;
}

.rule-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
}

.rule-card.do {
  border-left: 4px solid #28a745;
}

.rule-card.dont {
  border-left: 4px solid #dc3545;
}

.rule-icon {
  font-size: 2em;
  text-align: center;
  margin-bottom: 15px;
}

.rule-card h4 {
  text-align: center;
  margin: 0 0 15px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

.rule-card.do h4 {
  color: #28a745;
}

.rule-card.dont h4 {
  color: #dc3545;
}

.rule-card ul {
  margin: 0;
  padding-left: 20px;
}

.rule-card li {
  margin: 8px 0;
  line-height: 1.4;
}

/* Email Example */
.email-mock {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.email-header {
  background: #f8f9fa;
  padding: 15px;
  border-bottom: 1px solid #dee2e6;
}

.header-field {
  margin: 5px 0;
  font-size: 0.9em;
}

.email-body {
  padding: 20px;
  line-height: 1.6;
}

.email-body p {
  margin: 15px 0;
}

/* Security */
.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.security-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  border-left: 4px solid #dc3545;
}

.security-card h4 {
  color: #2c3e50;
  margin: 15px 0;
}

.security-card ul {
  margin: 0;
  padding-left: 20px;
}

.security-card li {
  margin: 8px 0;
  line-height: 1.4;
  font-size: 0.9em;
}

.conclusion {
  text-align: center;
  margin: 40px 0;
  padding: 20px;
  background: linear-gradient(45deg, #007bff 0%, #6610f2 100%);
  border-radius: 10px;
  color: white;
}

.conclusion p {
  font-size: 1.1em;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  .section {
    padding: 20px;
  }

  .email-parts {
    flex-direction: column;
  }

  .email-separator {
    transform: rotate(90deg);
    margin: 10px 0;
  }

  .flow-step {
    flex-direction: column;
    text-align: center;
  }

  .demo-step {
    flex-direction: column;
    text-align: center;
  }

  .rules-grid {
    grid-template-columns: 1fr;
  }

  .email-item {
    grid-template-columns: 1fr;
    gap: 5px;
    padding: 15px;
  }

  .email-item > * {
    text-align: left;
  }

  .mailbox-sidebar {
    justify-content: center;
  }
}

</style>