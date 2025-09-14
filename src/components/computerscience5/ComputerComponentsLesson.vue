<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>1️⃣ Що таке комп'ютер?</h2>

      <div class="definition-box">
        <strong>Комп'ютер</strong> – це приклад технічної інформаційної системи, яка забезпечує приймання, перетворення, опрацювання, зберігання інформації та передавання результатів опрацювання.
      </div>

      <div class="definition-box">
        Персональний комп'ютер складається з двох основних частин: <strong>апаратної частини</strong> та <strong>програмного забезпечення</strong>.
      </div>

      <div class="visual-grid">
        <div class="info-card">
          <span class="icon">⚙️</span>
          <h4>Апаратна частина</h4>
          <p>Фізичні пристрої, які можна побачити та доторкнутися</p>
        </div>
        <div class="info-card">
          <span class="icon">💿</span>
          <h4>Програмне забезпечення</h4>
          <p>Набір програм, які керують роботою комп'ютера</p>
        </div>
        <div class="info-card">
          <span class="icon">🤝</span>
          <h4>Взаємодія</h4>
          <p>Тісна співпраця апаратної та програмної частин</p>
        </div>
      </div>

      <div class="example-box">
        <strong>💡 Цікавий факт:</strong> Більшість сучасних комп'ютерів побудовано за принципами, обґрунтованими Джоном фон Нейманом у 1948 році.
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>2️⃣ Апаратна частина (Hardware)</h2>

      <div class="definition-box">
        Апаратна частина складається зі з'єднаних між собою різноманітних пристроїв, які можна побачити та доторкнутися. Пристрої апаратної частини не можуть опрацьовувати дані без програмного забезпечення.
      </div>

      <h3>🔗 Пристрої введення інформації</h3>
      <p><span class="highlight">Призначення:</span> для введення даних у комп'ютер.</p>

      <div class="devices-grid">
        <div class="device-card">
          <span class="icon">⌨️</span>
          <h4>Клавіатура</h4>
          <p>Основний пристрій для введення тексту</p>
        </div>
        <div class="device-card">
          <span class="icon">🖱️</span>
          <h4>Миша</h4>
          <p>Вказівний пристрій для навігації</p>
        </div>
        <div class="device-card">
          <span class="icon">📷</span>
          <h4>Сканер</h4>
          <p>Для введення текстової та графічної інформації</p>
        </div>
        <div class="device-card">
          <span class="icon">🎤</span>
          <h4>Мікрофон</h4>
          <p>Для введення звукової інформації</p>
        </div>
        <div class="device-card">
          <span class="icon">🎮</span>
          <h4>Джойстик</h4>
          <p>Для введення команд у іграх і тренажерах</p>
        </div>
      </div>

      <h3>📤 Пристрої виведення інформації</h3>
      <p><span class="highlight">Призначення:</span> для виведення результатів опрацювання даних у зручній для сприйняття людиною формі.</p>

      <div class="visual-grid">
        <div class="info-card">
          <span class="icon">🖥️</span>
          <h4>Монітор</h4>
          <p>Відображає текст, зображення, відео</p>
        </div>
        <div class="info-card">
          <span class="icon">🖨️</span>
          <h4>Принтер</h4>
          <p>Друкує документи на папері</p>
        </div>
        <div class="info-card">
          <span class="icon">🔊</span>
          <h4>Колонки</h4>
          <p>Відтворюють звукову інформацію</p>
        </div>
      </div>

      <h3>⚡ Пристрій опрацювання інформації</h3>
      <div class="processor-section">
        <div class="definition-box">
          <strong>Процесор</strong> – опрацьовує інформацію та керує іншими пристроями комп'ютера. Він почергово виконує команди програми.
        </div>

        <div class="visual-grid">
          <div class="info-card">
            <span class="icon">🧮</span>
            <h4>Арифметико-логічний пристрій</h4>
            <p>Виконує всі арифметичні й логічні операції</p>
          </div>
          <div class="info-card">
            <span class="icon">🎛️</span>
            <h4>Пристрій керування</h4>
            <p>Координує взаємодію всіх пристроїв комп'ютера</p>
          </div>
        </div>
      </div>

      <h3>💾 Пристрої зберігання інформації</h3>
      <p><span class="highlight">Призначення:</span> для тимчасового або постійного зберігання даних та програм.</p>

      <div class="storage-grid">
        <div class="device-card">
          <span class="icon">🧠</span>
          <h4>Внутрішня пам'ять</h4>
          <p>Оперативна пам'ять для швидкого доступу</p>
        </div>
        <div class="device-card">
          <span class="icon">💽</span>
          <h4>Жорсткий диск</h4>
          <p>Накопичувач на жорстких магнітних дисках</p>
        </div>
        <div class="device-card">
          <span class="icon">💿</span>
          <h4>Оптичні диски</h4>
          <p>CD, DVD, Blu-ray диски</p>
        </div>
        <div class="device-card">
          <span class="icon">🔌</span>
          <h4>Флеш-пам'ять</h4>
          <p>USB-накопичувачі, карти пам'яті</p>
        </div>
      </div>

      <div class="example-box">
        <strong>💡 Переваги флеш-пам'яті:</strong> не містить рухомих деталей, запам'ятовування ґрунтується на електричних зарядах, має невелику масу й малі розміри.
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>3️⃣ Програмне забезпечення (Software)</h2>

      <div class="definition-box">
        <strong>Програмне забезпечення</strong> – це набір програм, які керують роботою комп'ютера, забезпечують ведення діалогу з користувачем, опрацьовують різноманітні дані та створюють нові програми.
      </div>

      <h3>🏗️ Системне програмне забезпечення</h3>
      <p><span class="highlight">Призначення:</span> керує ресурсами комп'ютера.</p>

      <div class="os-section">
        <div class="definition-box">
          <strong>Операційна система (ОС)</strong> – набір програм, що автоматично завантажуються під час умикання комп'ютера.
        </div>

        <div class="os-grid">
          <div class="os-card">
            <span class="icon">🪟</span>
            <h4>Windows</h4>
            <p>Найпопулярніша ОС для ПК</p>
          </div>
          <div class="os-card">
            <span class="icon">🍎</span>
            <h4>macOS</h4>
            <p>Операційна система Apple</p>
          </div>
          <div class="os-card">
            <span class="icon">🐧</span>
            <h4>Linux</h4>
            <p>Відкрита операційна система</p>
          </div>
          <div class="os-card">
            <span class="icon">🤖</span>
            <h4>Android</h4>
            <p>ОС для мобільних пристроїв</p>
          </div>
        </div>
      </div>

      <h3>📱 Прикладне програмне забезпечення</h3>
      <p><span class="highlight">Призначення:</span> забезпечує виконання необхідних користувачу робіт.</p>

      <div class="software-table">
        <table class="classification-table">
          <thead>
            <tr>
              <th>Тип ПЗ</th>
              <th>Призначення</th>
              <th>Приклади</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Загального призначення</strong></td>
              <td>Для повсякденних завдань</td>
              <td>Текстові редактори, браузери, медіаплеєри</td>
            </tr>
            <tr>
              <td><strong>Спеціального призначення</strong></td>
              <td>Для конкретних галузей</td>
              <td>Медичні програми, банківські системи</td>
            </tr>
            <tr>
              <td><strong>Інструментальні засоби</strong></td>
              <td>Створення інших програм</td>
              <td>Редактори коду, компілятори</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>🔧 Службове програмне забезпечення</h3>
      <div class="utilities-grid">
        <div class="utility-card">
          <span class="icon">🧹</span>
          <h4>Очищення дисків</h4>
          <p>Видалення непотрібних файлів</p>
        </div>
        <div class="utility-card">
          <span class="icon">📦</span>
          <h4>Архіватори</h4>
          <p>Стиснення та розпакування файлів</p>
        </div>
        <div class="utility-card">
          <span class="icon">🛡️</span>
          <h4>Антивіруси</h4>
          <p>Захист від шкідливих програм</p>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>4️⃣ Взаємодія компонентів</h2>

      <div class="interaction-diagram">
        <div class="definition-box">
          Комп'ютер функціонує як єдина система завдяки тісній взаємодії апаратних пристроїв та програм, які ними керують.
        </div>

        <div class="flow-diagram">
          <div class="flow-step">
            <span class="icon">📝</span>
            <h4>1. Введення</h4>
            <p>Користувач вводить дані</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="icon">⚡</span>
            <h4>2. Опрацювання</h4>
            <p>Процесор обробляє інформацію</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="icon">💾</span>
            <h4>3. Зберігання</h4>
            <p>Дані зберігаються в пам'яті</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="icon">📤</span>
            <h4>4. Виведення</h4>
            <p>Результат показується користувачу</p>
          </div>
        </div>
      </div>

      <div class="example-box">
        <strong>🔄 Приклад роботи:</strong> Коли ви пишете текст на клавіатурі, він через процесор потрапляє до пам'яті, а потім відображається на моніторі.
      </div>
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Розуміння будови комп'ютера допомагає ефективно використовувати його можливості та розв'язувати проблеми, що можуть виникнути під час роботи з ним.</p>
    </div>
  </div>
</template>

<script setup>
// Vue 3 component for Computer Science Lesson 5 - Computer Components and Their Purpose
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

.devices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.storage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.os-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 20px 0;
}

.utilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px 0;
}

.info-card, .device-card, .os-card, .utility-card {
  background: white;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.info-card:hover, .device-card:hover, .os-card:hover, .utility-card:hover {
  border-color: #dee2e6;
  transform: translateY(-2px);
}

.icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.classification-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.classification-table th {
  background: #6c757d;
  color: white;
  padding: 15px;
  text-align: left;
}

.classification-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ecf0f1;
}

.classification-table tr:hover {
  background: #f8f9fa;
}

.example-box {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
  border: 1px solid #ffeaa7;
  border-left: 4px solid #f39c12;
}

.flow-diagram {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  flex-wrap: wrap;
}

.flow-step {
  background: white;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e9ecef;
  flex: 1;
  min-width: 150px;
  margin: 10px 5px;
}

.arrow {
  font-size: 1.5em;
  color: #6c757d;
  margin: 0 10px;
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

  .devices-grid, .os-grid, .utilities-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .flow-diagram {
    flex-direction: column;
  }

  .arrow {
    transform: rotate(90deg);
    margin: 10px 0;
  }
}
</style>