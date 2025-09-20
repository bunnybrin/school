<template>
  <div class="container cloud-lesson">
    <section id="cloud-intro" class="section hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h2>☁️ Хмарні технології — що це таке?</h2>
          <p>
            Уяви, що всі твої файли, програми і навіть документи зберігаються не на твоєму пристрої, а на потужних серверних
            комп'ютерах десь в Інтернеті. Саме це і називають <strong>хмарою</strong>.
          </p>
          <p>
            <strong>Хмарні технології</strong> — це технології, що дозволяють користуватися віддаленими ресурсами через Інтернет,
            а сервіси на їх основі називають <strong>хмарними сервісами</strong>. Щоб працювати з ними, достатньо браузера та доступу до мережі.
          </p>
        </div>
        <div class="hero-illustration">
          <img src="https://cdn-icons-png.flaticon.com/512/4834/4834676.png" alt="Хмарне сховище" class="hero-image">
        </div>
      </div>
    </section>

    <section id="cloud-services" class="section services-section">
      <h2>🧰 Які бувають хмарні сервіси?</h2>
      <p class="section-intro">
        Хмарні сервіси пропонують різні можливості для роботи з даними онлайн. Ось найпоширеніші з них:
      </p>

      <div class="service-grid">
        <div class="service-card storage">
          <img src="https://cdn-icons-png.flaticon.com/512/2702/2702065.png" alt="Онлайн-сховище" class="service-image">
          <h3>Онлайн-сховища</h3>
          <p>
            Це як віртуальна флешка для документів, фото та відео з доступом із будь-якого пристрою. Приклад —
            <strong>Google Диск</strong>.
          </p>
        </div>

        <div class="service-card apps">
          <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt="Онлайн-програми" class="service-image">
          <h3>Онлайн-програми</h3>
          <p>
            Дозволяють працювати з документами, презентаціями чи таблицями прямо у браузері. Приклади —
            <strong>Google Документи, Google Таблиці, Google Презентації</strong>.
          </p>
        </div>

        <div class="service-card translate">
          <img src="https://cdn-icons-png.flaticon.com/512/566/566735.png" alt="Онлайн-перекладач" class="service-image">
          <h3>Онлайн-перекладачі</h3>
          <p>
            Автоматично перекладають тексти з однієї мови на іншу. Популярний сервіс — <strong>Google Перекладач</strong>.
          </p>
        </div>

        <div class="service-card extras">
          <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Інші сервіси" class="service-image">
          <h3>Інші сервіси</h3>
          <p>
            Онлайн-карти для маршрутів, зберігання контактів, електронна пошта <strong>Gmail</strong>, відеозв'язок
            <strong>Google Meet</strong> та багато інших.
          </p>
        </div>
      </div>
    </section>

    <section id="cloud-pros-cons" class="section pros-cons-section">
      <h2>⚖️ Переваги та недоліки хмарних сервісів</h2>

      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Плюси</h3>
          <ul>
            <li>🌍 <strong>Доступність</strong>: працюй із даними з будь-якого пристрою з Інтернетом.</li>
            <li>💾 <strong>Економія місця</strong>: файли зберігаються в хмарі, не займаючи пам'ять пристрою.</li>
            <li>🤝 <strong>Спільна робота</strong>: редагуй документи одночасно з друзями чи однокласниками.</li>
            <li>🛡️ <strong>Безпека даних</strong>: навіть у разі поломки комп'ютера файли залишаться в хмарі.</li>
            <li>🔄 <strong>Автоматичне оновлення</strong>: програми в хмарі завжди в актуальній версії.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Мінуси</h3>
          <ul>
            <li>🌐 <strong>Потрібен Інтернет</strong>: без мережі доступу до файлів не буде.</li>
            <li>⚠️ <strong>Зміна умов</strong>: власники сервісів можуть змінювати правила чи ціну.</li>
            <li>🔓 <strong>Ризик витоку даних</strong>: існує невелика ймовірність потрапляння даних до чужих рук.</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="google-drive" class="section drive-section">
      <div class="drive-content">
        <div class="drive-text">
          <h2>📦 Google Диск — твоя особиста "хмара"</h2>
          <p>
            <strong>Google Диск</strong> — хмарне сховище для зберігання та впорядкування файлів. Після створення облікового запису Google
            ти отримуєш <strong>15 ГБ</strong> безкоштовного місця.
          </p>
          <ul class="drive-actions">
            <li>🗂️ Створюй папки та файли в онлайн-додатках.</li>
            <li>⬆️ Завантажуй файли та папки зі свого комп'ютера.</li>
            <li>✏️ Перейменовуй, копіюй, переміщуй і видаляй об'єкти, як у Провіднику Windows.</li>
            <li>🔗 Надавай спільний доступ до файлів іншим користувачам.</li>
          </ul>
        </div>
        <div class="drive-illustration">
          <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google Диск" class="drive-image">
        </div>
      </div>
    </section>

    <section id="collaboration" class="section collaboration-section">
      <h2>🤝 Спільна робота з документами</h2>
      <p>
        Хмарні сервіси дозволяють надавати <strong>спільний доступ</strong> до файлів, щоб працювати разом у реальному часі. Коли кілька людей редагують
        документ одночасно, видно, хто і що змінює.
      </p>

      <div class="access-levels">
        <div class="access-card view">
          <span class="access-icon">👀</span>
          <h3>Може переглядати</h3>
          <p>Користувач лише дивиться файл без змін.</p>
        </div>
        <div class="access-card comment">
          <span class="access-icon">💬</span>
          <h3>Може коментувати</h3>
          <p>Дозволяє залишати коментарі та пропозиції без редагування.</p>
        </div>
        <div class="access-card edit">
          <span class="access-icon">✍️</span>
          <h3>Може редагувати</h3>
          <p>Надає повні права для змін у документі.</p>
        </div>
      </div>
    </section>

    <section id="sync" class="section sync-section">
      <div class="sync-content">
        <div class="sync-text">
          <h2>🔄 Синхронізація файлів</h2>
          <p>
            <strong>Синхронізація</strong> — це автоматичне оновлення файлів до останньої версії на всіх пристроях. Якщо ти вносиш зміни на комп'ютері,
            вони автоматично з'являються на Google Диску (і навпаки), щойно з'являється Інтернет.
          </p>
          <p>
            Завдяки синхронізації в тебе завжди є актуальна версія файлів, де б ти не працював.
          </p>
        </div>
        <div class="sync-illustration">
          <img src="https://cdn-icons-png.flaticon.com/512/9011/9011398.png" alt="Синхронізація" class="sync-image">
        </div>
      </div>
    </section>

    <LessonQuiz
      title="Перевір себе"
      description="Вибери правильну відповідь, а якщо сумніваєшся — користуйся підказками та повертайся до відповідних розділів уроку."
      :questions="quizQuestions"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LessonQuiz from '../common/LessonQuiz.vue'

const quizQuestions = ref([
  {
    question: 'Що означає поняття "хмарні технології"?',
    options: [
      'Зберігання файлів лише на флешці без Інтернету',
      'Використання потужних серверів в Інтернеті для роботи з даними',
      'Установлення програм лише на домашньому комп’ютері'
    ],
    correct: 1,
    hint: 'Пригадай, як у розділі «Хмарні технології» пояснюється, де зберігаються файли та програми.',
    sectionId: 'cloud-intro'
  },
  {
    question: 'Який із сервісів є прикладом онлайн-сховища?',
    options: ['Google Диск', 'Google Перекладач', 'Google Meet'],
    correct: 0,
    hint: 'Зазирни до блоку про види хмарних сервісів і пригадай, що називають віртуальною флешкою.',
    sectionId: 'cloud-services'
  },
  {
    question: 'Яка перевага хмарних сервісів пов’язана з економією пам’яті на пристрої?',
    options: ['Автоматичне оновлення', 'Економія місця', 'Зміна умов користування'],
    correct: 1,
    hint: 'У розділі про плюси та мінуси знайди пункт, що стосується пам’яті пристрою.',
    sectionId: 'cloud-pros-cons'
  },
  {
    question: 'Скільки безкоштовного місця надає Google Диск після створення облікового запису?',
    options: ['5 ГБ', '10 ГБ', '15 ГБ'],
    correct: 2,
    hint: 'Повернися до блоку про Google Диск і пригадай, яку кількість гігабайтів там згадано.',
    sectionId: 'google-drive'
  },
  {
    question: 'Що відбувається під час синхронізації файлів?',
    options: [
      'Файли автоматично оновлюються до останньої версії на всіх пристроях',
      'Файли можна редагувати лише офлайн',
      'Файли видаляються з хмари після кожного оновлення'
    ],
    correct: 0,
    hint: 'Переглянь розділ про синхронізацію та зверни увагу, що відбувається зі змінами файлів.',
    sectionId: 'sync'
  }
])
</script>

<style scoped>
.cloud-lesson {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.section {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  border: 1px solid #eef2f7;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0f4ff, #f5f7ff);
  overflow: hidden;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.hero-text {
  flex: 1 1 320px;
  font-size: 1.1rem;
  color: #2c3e50;
  line-height: 1.6;
}

.hero-text h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #1f3a8a;
}

.hero-illustration {
  flex: 1 1 260px;
  display: flex;
  justify-content: center;
}

.hero-image {
  max-width: 260px;
  width: 100%;
}

.services-section h2,
.pros-cons-section h2,
.drive-section h2,
.collaboration-section h2,
.sync-section h2 {
  color: #1f3a8a;
  margin-bottom: 20px;
}

.section-intro {
  color: #4a5568;
  margin-bottom: 30px;
  line-height: 1.6;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.service-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  border: 2px solid transparent;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 36px rgba(31, 58, 138, 0.18);
}

.service-card h3 {
  margin: 0;
  color: #1f3a8a;
}

.service-card p {
  color: #4a5568;
  line-height: 1.5;
}

.service-image {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.storage {
  background: linear-gradient(160deg, #e0f4ff 0%, #ffffff 100%);
}

.apps {
  background: linear-gradient(160deg, #ffe9f3 0%, #ffffff 100%);
}

.translate {
  background: linear-gradient(160deg, #e8ffe5 0%, #ffffff 100%);
}

.extras {
  background: linear-gradient(160deg, #fff4d7 0%, #ffffff 100%);
}

.pros-cons-section {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(59, 130, 246, 0.08));
}

.pros-cons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.pros,
.cons {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
}

.pros h3,
.cons h3 {
  color: #1f3a8a;
  font-size: 1.4rem;
  margin-bottom: 18px;
}

.pros ul,
.cons ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #4a5568;
  line-height: 1.5;
}

.drive-section {
  background: linear-gradient(135deg, #fff7e6, #ffffff);
}

.drive-content {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.drive-text {
  flex: 1 1 320px;
  color: #2c3e50;
  line-height: 1.6;
}

.drive-text h2 {
  color: #b7791f;
}

.drive-actions {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #4a5568;
}

.drive-illustration {
  flex: 1 1 260px;
  display: flex;
  justify-content: center;
}

.drive-image {
  max-width: 240px;
  width: 100%;
}

.collaboration-section {
  background: linear-gradient(135deg, #f3e8ff, #ffffff);
  text-align: center;
}

.collaboration-section p {
  max-width: 720px;
  margin: 0 auto 30px;
  color: #4a5568;
  line-height: 1.6;
}

.access-levels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.access-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: transform 0.3s ease;
}

.access-card:hover {
  transform: translateY(-6px);
}

.access-icon {
  font-size: 2.5rem;
}

.access-card h3 {
  margin: 0;
  color: #6b21a8;
}

.access-card p {
  color: #4a5568;
}

.sync-section {
  background: linear-gradient(135deg, #e6fffa, #ffffff);
}

.sync-content {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.sync-text {
  flex: 1 1 320px;
  color: #285e61;
  line-height: 1.6;
}

.sync-text h2 {
  color: #047857;
}

.sync-illustration {
  flex: 1 1 260px;
  display: flex;
  justify-content: center;
}

.sync-image {
  max-width: 220px;
  width: 100%;
}

@media (max-width: 768px) {
  .section {
    padding: 28px;
  }

  .hero-text h2 {
    font-size: 1.8rem;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .pros-cons-grid {
    grid-template-columns: 1fr;
  }

  .access-levels {
    grid-template-columns: 1fr;
  }
}
</style>
