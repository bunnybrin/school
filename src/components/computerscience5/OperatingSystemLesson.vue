<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>1️⃣ Що таке операційна система</h2>

      <div class="definition-box">
        <strong>Операційна система (ОС)</strong> – це ключова складова програмного забезпечення комп'ютера, без якої апаратна частина не може опрацьовувати дані. Це комплекс програм, що керують роботою комп'ютера і забезпечують взаємодію з користувачем.
      </div>

      <div class="visual-grid">
        <div class="info-card">
          <span class="icon">💻</span>
          <h4>Програмне забезпечення</h4>
          <p>Набір програм для керування комп'ютером</p>
        </div>
        <div class="info-card">
          <span class="icon">🔧</span>
          <h4>Апаратна частина</h4>
          <p>Фізичні компоненти комп'ютера</p>
        </div>
        <div class="info-card">
          <span class="icon">🤝</span>
          <h4>Взаємодія</h4>
          <p>Зв'язок між користувачем і комп'ютером</p>
        </div>
      </div>

      <div class="boot-process">
        <h3>⚡ Процес завантаження</h3>
        <div class="process-flow">
          <div class="process-step">
            <span class="step-icon">🔌</span>
            <h4>1. Вмикання</h4>
            <p>Подача живлення на комп'ютер</p>
          </div>
          <div class="arrow">➡️</div>
          <div class="process-step">
            <span class="step-icon">📀</span>
            <h4>2. Завантаження ОС</h4>
            <p>Автоматичний запуск програм ОС</p>
          </div>
          <div class="arrow">➡️</div>
          <div class="process-step">
            <span class="step-icon">🖥️</span>
            <h4>3. Готовність до роботи</h4>
            <p>Комп'ютер готовий до використання</p>
          </div>
        </div>
      </div>

      <div class="example-box">
        <strong>💡 Важливо:</strong> Без операційної системи комп'ютер не може функціонувати! ОС завантажується автоматично одразу після вмикання комп'ютера.
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>2️⃣ Основні функції операційної системи</h2>

      <div class="functions-grid">
        <div class="function-card">
          <span class="icon">🎯</span>
          <h4>Керування ресурсами</h4>
          <p>Розподіл пам'яті, процесорного часу та інших ресурсів між програмами</p>
        </div>
        <div class="function-card">
          <span class="icon">⚙️</span>
          <h4>Керування процесами</h4>
          <p>Запуск, зупинка та контроль виконання програм</p>
        </div>
        <div class="function-card">
          <span class="icon">🔗</span>
          <h4>Керування пристроями</h4>
          <p>Забезпечення взаємодії всіх пристроїв комп'ютера</p>
        </div>
        <div class="function-card">
          <span class="icon">👤</span>
          <h4>Виконання команд</h4>
          <p>Обробка та виконання команд користувача</p>
        </div>
        <div class="function-card">
          <span class="icon">📁</span>
          <h4>Робота з файлами</h4>
          <p>Створення, зміна та видалення файлів і папок</p>
        </div>
        <div class="function-card">
          <span class="icon">🛡️</span>
          <h4>Безпека системи</h4>
          <p>Захист даних та контроль доступу до ресурсів</p>
        </div>
      </div>

      <div class="example-box">
        <strong>🎮 Приклад:</strong> Коли ви запускаете гру, ОС виділяє їй пам'ять, надає доступ до відеокарти та звукової карти, а також стежить за її роботою.
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>3️⃣ Інтерфейс користувача</h2>

      <div class="definition-box">
        <strong>Інтерфейс користувача</strong> – це сукупність засобів для взаємодії між користувачем та комп'ютером.
      </div>

      <div class="interface-comparison">
        <div class="interface-type">
          <div class="interface-card text-interface">
            <span class="icon">⌨️</span>
            <h3>Текстовий інтерфейс</h3>
            <div class="interface-features">
              <p><strong>Особливості:</strong></p>
              <ul>
                <li>Команди вводяться з клавіатури</li>
                <li>Потрібно пам'ятати команди</li>
                <li>Швидкий для досвідчених користувачів</li>
                <li>Використовується в перших ОС</li>
              </ul>
            </div>
            <div class="terminal-demo">
              <div class="terminal-header">MS-DOS</div>
              <div class="terminal-content">
                C:\> dir<br>
                C:\> copy file.txt backup.txt<br>
                C:\> del oldfile.txt
              </div>
            </div>
          </div>
        </div>

        <div class="vs-separator">VS</div>

        <div class="interface-type">
          <div class="interface-card gui-interface">
            <span class="icon">🖱️</span>
            <h3>Графічний інтерфейс</h3>
            <div class="interface-features">
              <p><strong>Особливості:</strong></p>
              <ul>
                <li>Команди обираються з меню</li>
                <li>Об'єкти представлені піктограмами</li>
                <li>Інтуїтивно зрозумілий</li>
                <li>Використовується в сучасних ОС</li>
              </ul>
            </div>
            <div class="gui-demo">
              <div class="desktop-demo">
                <div class="window">
                  <div class="window-header">Мої документи</div>
                  <div class="window-content">
                    <div class="file-icon">📄 document.txt</div>
                    <div class="file-icon">📷 photo.jpg</div>
                    <div class="file-icon">📁 Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="objects-managed">
        <h3>🎯 Об'єкти, якими керує ОС</h3>
        <div class="objects-grid">
          <div class="object-card">
            <span class="icon">📁</span>
            <h4>Папки</h4>
            <p>Контейнери для організації файлів</p>
          </div>
          <div class="object-card">
            <span class="icon">📄</span>
            <h4>Файли</h4>
            <p>Документи, програми, медіафайли</p>
          </div>
          <div class="object-card">
            <span class="icon">🌐</span>
            <h4>Мережа</h4>
            <p>Підключення до Інтернету та інших комп'ютерів</p>
          </div>
          <div class="object-card">
            <span class="icon">💽</span>
            <h4>Диски</h4>
            <p>Жорсткі диски, USB-накопичувачі</p>
          </div>
          <div class="object-card">
            <span class="icon">🖨️</span>
            <h4>Пристрої</h4>
            <p>Принтери, сканери, камери</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>4️⃣ Приклади операційних систем</h2>

      <div class="os-grid">
        <div class="os-card windows">
          <span class="icon">🪟</span>
          <h4>Windows</h4>
          <div class="os-info">
            <p><strong>Розробник:</strong> Microsoft</p>
            <p><strong>Використання:</strong> Персональні комп'ютери</p>
            <p><strong>Особливості:</strong> Найпопулярніша ОС для ПК</p>
          </div>
          <div class="os-versions">
            <span class="version">Windows 10</span>
            <span class="version">Windows 11</span>
          </div>
        </div>

        <div class="os-card macos">
          <span class="icon">🍎</span>
          <h4>macOS</h4>
          <div class="os-info">
            <p><strong>Розробник:</strong> Apple</p>
            <p><strong>Використання:</strong> Комп'ютери Mac</p>
            <p><strong>Особливості:</strong> Елегантний дизайн, стабільність</p>
          </div>
          <div class="os-versions">
            <span class="version">Monterey</span>
            <span class="version">Ventura</span>
          </div>
        </div>

        <div class="os-card linux">
          <span class="icon">🐧</span>
          <h4>Linux</h4>
          <div class="os-info">
            <p><strong>Розробник:</strong> Спільнота</p>
            <p><strong>Використання:</strong> Сервери, спеціалісти</p>
            <p><strong>Особливості:</strong> Безкоштовна, відкритий код</p>
          </div>
          <div class="os-versions">
            <span class="version">Ubuntu</span>
            <span class="version">Fedora</span>
          </div>
        </div>

        <div class="os-card android">
          <span class="icon">🤖</span>
          <h4>Android</h4>
          <div class="os-info">
            <p><strong>Розробник:</strong> Google</p>
            <p><strong>Використання:</strong> Смартфони, планшети</p>
            <p><strong>Особливості:</strong> Мобільна ОС на основі Linux</p>
          </div>
          <div class="os-versions">
            <span class="version">Android 13</span>
            <span class="version">Android 14</span>
          </div>
        </div>

        <div class="os-card unix">
          <span class="icon">⚡</span>
          <h4>Unix</h4>
          <div class="os-info">
            <p><strong>Розробник:</strong> Bell Labs</p>
            <p><strong>Використання:</strong> Сервери, робочі станції</p>
            <p><strong>Особливості:</strong> Історична ОС, основа для багатьох інших</p>
          </div>
          <div class="os-versions">
            <span class="version">AIX</span>
            <span class="version">Solaris</span>
          </div>
        </div>
      </div>

      <div class="os-comparison">
        <h3>📊 Порівняння операційних систем</h3>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Операційна система</th>
              <th>Простота використання</th>
              <th>Безпека</th>
              <th>Вартість</th>
              <th>Сфера використання</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Windows</strong></td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐⭐</td>
              <td>Платна</td>
              <td>Домашні ПК, офіси</td>
            </tr>
            <tr>
              <td><strong>macOS</strong></td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>Вбудована в Mac</td>
              <td>Креативні професії</td>
            </tr>
            <tr>
              <td><strong>Linux</strong></td>
              <td>⭐⭐⭐</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>Безкоштовна</td>
              <td>Сервери, розробка</td>
            </tr>
            <tr>
              <td><strong>Android</strong></td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐⭐</td>
              <td>Безкоштовна</td>
              <td>Мобільні пристрої</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="example-box">
        <strong>🌟 Цікавий факт:</strong> Android, який використовується в більшості смартфонів, насправді побудований на основі Linux!
      </div>
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Операційна система є серцем будь-якого комп'ютера! Вона координує роботу всіх компонентів і забезпечує зручну взаємодію з користувачем. Розуміння принципів роботи ОС допомагає краще використовувати комп'ютерні технології.</p>
    </div>
  </div>
</template>

<script setup>
// Vue 3 component for Computer Science Lesson 5 - Operating System
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
  border-color: #007bff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,123,255,0.1);
}

.icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.boot-process {
  margin: 30px 0;
}

.process-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  flex-wrap: wrap;
}

.process-step {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e9ecef;
  flex: 1;
  min-width: 150px;
  margin: 5px;
}

.step-icon {
  font-size: 2em;
  display: block;
  margin-bottom: 10px;
}

.arrow {
  font-size: 1.5em;
  color: #6c757d;
  margin: 0 10px;
}

.functions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.function-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.function-card:hover {
  border-color: #28a745;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(40,167,69,0.1);
}

.function-card .icon {
  font-size: 2em;
  margin-bottom: 10px;
}

.function-card h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.interface-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  margin: 30px 0;
  align-items: center;
}

.vs-separator {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  font-weight: bold;
  text-align: center;
  font-size: 1.2em;
}

.interface-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
}

.text-interface {
  border-left-color: #dc3545;
}

.gui-interface {
  border-left-color: #007bff;
}

.interface-features ul {
  list-style: none;
  padding: 0;
}

.interface-features li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.interface-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.terminal-demo {
  margin-top: 15px;
  background: #2d3748;
  border-radius: 8px;
  overflow: hidden;
}

.terminal-header {
  background: #4a5568;
  color: white;
  padding: 8px 15px;
  font-size: 12px;
  font-weight: bold;
}

.terminal-content {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  padding: 15px;
  font-size: 14px;
  line-height: 1.4;
}

.gui-demo {
  margin-top: 15px;
}

.desktop-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 8px;
}

.window {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.window-header {
  background: #f8f9fa;
  padding: 10px 15px;
  border-bottom: 1px solid #dee2e6;
  font-weight: bold;
  color: #495057;
}

.window-content {
  padding: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.file-icon {
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  background: #f8f9fa;
  font-size: 12px;
  min-width: 80px;
}

.objects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.object-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.object-card:hover {
  border-color: #fd7e14;
  transform: translateY(-2px);
}

.os-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.os-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.os-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color), var(--accent-color-light));
}

.os-card.windows {
  --accent-color: #0078d4;
  --accent-color-light: #40a9ff;
}

.os-card.macos {
  --accent-color: #007aff;
  --accent-color-light: #5ac8fa;
}

.os-card.linux {
  --accent-color: #fcc624;
  --accent-color-light: #ffeb3b;
}

.os-card.android {
  --accent-color: #3ddc84;
  --accent-color-light: #a4de6c;
}

.os-card.unix {
  --accent-color: #ff6b35;
  --accent-color-light: #ffa726;
}

.os-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border-color: var(--accent-color);
}

.os-card .icon {
  font-size: 3em;
  margin-bottom: 15px;
}

.os-card h4 {
  color: #2c3e50;
  font-size: 1.4em;
  margin-bottom: 15px;
}

.os-info p {
  margin: 8px 0;
  color: #6c757d;
}

.os-info strong {
  color: #2c3e50;
}

.os-versions {
  margin-top: 15px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.version {
  background: var(--accent-color);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.comparison-table th {
  background: #6c757d;
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: 600;
}

.comparison-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ecf0f1;
}

.comparison-table tr:hover {
  background: #f8f9fa;
}

.comparison-table td:nth-child(2),
.comparison-table td:nth-child(3) {
  text-align: center;
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
  padding: 25px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.conclusion h3 {
  color: white;
  margin-bottom: 15px;
}

.conclusion p {
  font-size: 1.1em;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  .process-flow {
    flex-direction: column;
  }

  .arrow {
    transform: rotate(90deg);
  }

  .interface-comparison {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .vs-separator {
    order: 2;
  }

  .functions-grid {
    grid-template-columns: 1fr;
  }

  .os-grid {
    grid-template-columns: 1fr;
  }

  .comparison-table {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 20px 15px;
  }

  .os-card {
    padding: 20px;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 8px;
    font-size: 12px;
  }
}
</style>