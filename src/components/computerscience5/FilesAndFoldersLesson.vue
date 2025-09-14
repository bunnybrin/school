<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>1️⃣ Файли</h2>

      <div class="definition-box">
        <strong>Файл</strong> – це іменована сукупність даних, розміщених на носії, які в процесі зберігання, передавання та опрацювання вважаються єдиним цілим. Для комп'ютера всі вхідні дані (інформація), результати її опрацювання, програми, тексти, малюнки, музика, фільми тощо у зовнішній пам'яті є рівнозначними — це файли.
      </div>

      <div class="file-structure">
        <h3>📝 Структура імені файлу</h3>
        <div class="filename-demo">
          <div class="filename-example">
            <span class="filename-name">document</span>
            <span class="filename-dot">.</span>
            <span class="filename-extension">txt</span>
          </div>
          <div class="filename-labels">
            <div class="label name-label">Назва файлу</div>
            <div class="label dot-label">Крапка</div>
            <div class="label ext-label">Розширення</div>
          </div>
        </div>

        <div class="definition-box">
          <p><strong>Ім'я файлу</strong> складається з назви та розширення, відокремлених крапкою:</p>
          <ul>
            <li>Назву файлу зазвичай призначає людина</li>
            <li>Розширення — програма, якою цей файл було створено</li>
          </ul>
        </div>
      </div>

      <div class="naming-rules">
        <h3>✅ Правила іменування файлів</h3>
        <div class="rules-grid">
          <div class="rules-card allowed">
            <span class="icon">✅</span>
            <h4>Можна використовувати</h4>
            <div class="rules-list">
              <span class="rule-item">Літери (англійські, українські)</span>
              <span class="rule-item">Цифри (0-9)</span>
              <span class="rule-item">Символи: _ $ # & @ ! % ( ) { } ' ~ ^</span>
            </div>
          </div>
          <div class="rules-card forbidden">
            <span class="icon">❌</span>
            <h4>Заборонено використовувати</h4>
            <div class="rules-list">
              <span class="rule-item">/ \ : * ? " < > –</span>
            </div>
          </div>
        </div>
      </div>

      <div class="file-types">
        <h3>📂 Типи файлів за розширенням</h3>
        <div class="file-types-grid">
          <div class="file-type-card">
            <span class="icon">📝</span>
            <h4>Текстові файли</h4>
            <div class="extensions">
              <span class="ext">.txt</span>
              <span class="ext">.rtf</span>
            </div>
          </div>
          <div class="file-type-card">
            <span class="icon">📄</span>
            <h4>Документи Word</h4>
            <div class="extensions">
              <span class="ext">.doc</span>
              <span class="ext">.docx</span>
            </div>
          </div>
          <div class="file-type-card">
            <span class="icon">🎵</span>
            <h4>Звукові файли</h4>
            <div class="extensions">
              <span class="ext">.mp3</span>
              <span class="ext">.wav</span>
            </div>
          </div>
          <div class="file-type-card">
            <span class="icon">🖼️</span>
            <h4>Зображення</h4>
            <div class="extensions">
              <span class="ext">.jpg</span>
              <span class="ext">.png</span>
              <span class="ext">.bmp</span>
            </div>
          </div>
          <div class="file-type-card">
            <span class="icon">⚙️</span>
            <h4>Виконувані програми</h4>
            <div class="extensions">
              <span class="ext">.exe</span>
              <span class="ext">.com</span>
            </div>
          </div>
        </div>

        <div class="example-box">
          <strong>💡 Значення розширення:</strong> залежно від розширення операційна система надає файлу відповідну піктограму для його позначення та визначає, за допомогою яких програмних засобів цей файл може бути відкритий.
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>2️⃣ Папки</h2>

      <div class="definition-box">
        На дисках комп'ютера можуть зберігатися сотні тисяч файлів. Для їх групування використовують <strong>папки</strong> (їх також називають теками або каталогами).
      </div>

      <div class="folder-concept">
        <div class="folder-visualization">
          <div class="folder-demo">
            <div class="folder-icon">📁</div>
            <div class="folder-name">Мої документи</div>
            <div class="folder-contents">
              <div class="file-in-folder">📄 реферат.docx</div>
              <div class="file-in-folder">📊 звіт.xlsx</div>
              <div class="subfolder">📁 Фотографії</div>
              <div class="file-in-folder">📝 нотатки.txt</div>
            </div>
          </div>
        </div>

        <div class="folder-features">
          <div class="feature-card">
            <span class="icon">📦</span>
            <h4>Контейнер</h4>
            <p>Елемент файлової системи для зберігання файлів та інших папок</p>
          </div>
          <div class="feature-card">
            <span class="icon">🏷️</span>
            <h4>Назва</h4>
            <p>Кожна папка має назву; розширень в іменах папок не використовують</p>
          </div>
          <div class="feature-card">
            <span class="icon">📋</span>
            <h4>Дані</h4>
            <p>Містить дані про розміщення вкладених у неї файлів та інших папок</p>
          </div>
        </div>
      </div>

      <div class="folder-hierarchy">
        <h3>🌳 Ієрархія папок</h3>
        <div class="hierarchy-demo">
          <div class="level-1">
            <div class="folder-item">
              <span class="folder-icon">💽</span>
              <span>Диск C:</span>
            </div>
            <div class="level-2">
              <div class="folder-item">
                <span class="folder-icon">📁</span>
                <span>Користувачі</span>
              </div>
              <div class="level-3">
                <div class="folder-item">
                  <span class="folder-icon">👤</span>
                  <span>Іван</span>
                </div>
                <div class="level-4">
                  <div class="folder-item">
                    <span class="folder-icon">📁</span>
                    <span>Документи</span>
                  </div>
                  <div class="folder-item">
                    <span class="folder-icon">📁</span>
                    <span>Зображення</span>
                  </div>
                  <div class="folder-item">
                    <span class="folder-icon">📁</span>
                    <span>Музика</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>3️⃣ Ярлики</h2>

      <div class="definition-box">
        <strong>Ярлик об'єкта</strong> – це засіб швидкого доступу, який містить лише шлях до відповідного об'єкта.
      </div>

      <div class="shortcut-concept">
        <div class="visual-grid">
          <div class="info-card">
            <span class="icon">🎯</span>
            <h4>Призначення</h4>
            <p>Швидкий доступ до об'єктів, які можуть бути "сховані" глибоко у структурі папок</p>
          </div>
          <div class="info-card">
            <span class="icon">👁️</span>
            <h4>Вигляд</h4>
            <p>Піктограма така ж, як у зв'язаного об'єкта, але з маленькою стрілкою в куті</p>
          </div>
          <div class="info-card">
            <span class="icon">🛡️</span>
            <h4>Безпека</h4>
            <p>Видалення ярлика не призводить до знищення самого об'єкта</p>
          </div>
        </div>

        <div class="shortcut-demo">
          <h3>🔗 Порівняння файлу та ярлика</h3>
          <div class="comparison-grid">
            <div class="comparison-item">
              <div class="file-icon-demo original">
                <span class="file-icon">📄</span>
                <span class="file-name">document.txt</span>
              </div>
              <p class="comparison-label">Оригінальний файл</p>
            </div>
            <div class="arrow-separator">➡️</div>
            <div class="comparison-item">
              <div class="file-icon-demo shortcut">
                <span class="file-icon">📄</span>
                <span class="shortcut-arrow">↗️</span>
                <span class="file-name">document.txt - ярлик</span>
              </div>
              <p class="comparison-label">Ярлик файлу</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>4️⃣ Операції над файлами, папками та ярликами</h2>

      <div class="definition-box">
        Над файлами, папками та ярликами (далі — об'єкти) можна виконувати низку операцій: <strong>створення, перейменування, копіювання, переміщення, видалення та відновлення</strong>.
      </div>

      <div class="operations-grid">
        <div class="operation-card create">
          <span class="icon">➕</span>
          <h4>1. Створення</h4>
          <div class="operation-steps">
            <div class="step">
              <h5>Папка:</h5>
              <p>ПКМ → "Створити" → "Папку"</p>
            </div>
            <div class="step">
              <h5>Ярлик:</h5>
              <p>ПКМ на об'єкті → "Надіслати" → "Робочий стіл (створити ярлик)"</p>
            </div>
          </div>
        </div>

        <div class="operation-card rename">
          <span class="icon">✏️</span>
          <h4>2. Перейменування</h4>
          <div class="operation-steps">
            <p>Клацнути на імені, після підсвічування клацнути ще раз</p>
            <p>З'явиться курсор для введення нового імені</p>
          </div>
        </div>

        <div class="operation-card copy">
          <span class="icon">📋</span>
          <h4>3. Копіювання</h4>
          <div class="operation-methods">
            <div class="method">
              <h5>Через меню:</h5>
              <p>ПКМ → "Копіювати" → у папці призначення → "Вставити"</p>
            </div>
            <div class="method">
              <h5>Клавішами:</h5>
              <p><kbd>Ctrl + C</kbd> → скопіювати</p>
              <p><kbd>Ctrl + V</kbd> → вставити</p>
            </div>
          </div>
        </div>

        <div class="operation-card move">
          <span class="icon">✂️</span>
          <h4>4. Переміщення</h4>
          <div class="operation-methods">
            <div class="method">
              <h5>Через меню:</h5>
              <p>ПКМ → "Вирізати" → у потрібному місці → "Вставити"</p>
            </div>
            <div class="method">
              <h5>Клавішами:</h5>
              <p><kbd>Ctrl + X</kbd> → вирізати</p>
              <p><kbd>Ctrl + V</kbd> → вставити</p>
            </div>
          </div>
        </div>

        <div class="operation-card delete">
          <span class="icon">🗑️</span>
          <h4>5. Видалення</h4>
          <div class="operation-steps">
            <p>ПКМ → "Видалити"</p>
            <p>Або натиснути клавішу <kbd>Delete</kbd></p>
          </div>
        </div>

        <div class="operation-card restore">
          <span class="icon">🔄</span>
          <h4>6. Відновлення</h4>
          <div class="operation-steps">
            <p>Відкрити "Кошик"</p>
            <p>ПКМ на об'єкті → "Відновити"</p>
          </div>
        </div>
      </div>

      <div class="drag-drop-section">
        <h3>🖱️ Перетягування (Drag-and-drop)</h3>
        <div class="drag-drop-demo">
          <div class="drag-drop-card">
            <span class="icon">👆</span>
            <h4>Перетягування мишею</h4>
            <p>Об'єкт можна перемістити, скопіювати або видалити, перетягнувши його значок мишею</p>
          </div>
          <div class="drag-drop-options">
            <div class="option">
              <span class="option-icon">📋</span>
              <span>"Копіювати сюди"</span>
            </div>
            <div class="option">
              <span class="option-icon">✂️</span>
              <span>"Перемістити сюди"</span>
            </div>
            <div class="option">
              <span class="option-icon">🔗</span>
              <span>"Створити ярлики"</span>
            </div>
          </div>
        </div>

        <div class="example-box">
          <strong>💡 Порада:</strong> При перетягуванні правою кнопкою миші з'являється меню з варіантами дій.
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5">
      <h2>5️⃣ Практичні приклади операцій</h2>

      <div class="practical-examples">
        <div class="example-scenario">
          <h3>📝 Створення папки на диску D:</h3>
          <div class="step-by-step">
            <div class="step-item">
              <span class="step-number">1</span>
              <p>Відкрити вікно "Комп'ютер"</p>
            </div>
            <div class="step-item">
              <span class="step-number">2</span>
              <p>Вибрати Диск D:</p>
            </div>
            <div class="step-item">
              <span class="step-number">3</span>
              <p>На вільному місці клацнути ПКМ → "Створити" → "Папку"</p>
            </div>
            <div class="step-item">
              <span class="step-number">4</span>
              <p>Увести назву та натиснути <kbd>Enter</kbd></p>
            </div>
          </div>
        </div>

        <div class="keyboard-shortcuts">
          <h3>⌨️ Корисні комбінації клавіш</h3>
          <div class="shortcuts-grid">
            <div class="shortcut-card">
              <div class="keys">
                <kbd>Ctrl</kbd> + <kbd>C</kbd>
              </div>
              <p>Копіювати</p>
            </div>
            <div class="shortcut-card">
              <div class="keys">
                <kbd>Ctrl</kbd> + <kbd>X</kbd>
              </div>
              <p>Вирізати</p>
            </div>
            <div class="shortcut-card">
              <div class="keys">
                <kbd>Ctrl</kbd> + <kbd>V</kbd>
              </div>
              <p>Вставити</p>
            </div>
            <div class="shortcut-card">
              <div class="keys">
                <kbd>Delete</kbd>
              </div>
              <p>Видалити</p>
            </div>
            <div class="shortcut-card">
              <div class="keys">
                <kbd>F2</kbd>
              </div>
              <p>Перейменувати</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Знання та вміння виконувати операції над файлами, папками та ярликами є базовими для ефективної роботи з будь-яким персональним комп'ютером. Розуміння файлової системи допомагає організувати інформацію та швидко знаходити потрібні дані.</p>
    </div>
  </div>
</template>

<script setup>
// Vue 3 component for Computer Science Lesson 5 - Files, Folders, and Operations
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

.section-5 {
  background: #f8f9fa;
  border-left-color: #007bff;
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

.definition-box ul {
  margin-top: 10px;
  padding-left: 20px;
}

.filename-demo {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 30px;
  margin: 20px 0;
  text-align: center;
}

.filename-example {
  font-family: 'Courier New', monospace;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
}

.filename-name {
  color: #007bff;
  background: rgba(0, 123, 255, 0.1);
  padding: 8px 12px;
  border-radius: 4px;
}

.filename-dot {
  color: #6c757d;
  margin: 0 8px;
  font-size: 1.2em;
}

.filename-extension {
  color: #dc3545;
  background: rgba(220, 53, 69, 0.1);
  padding: 8px 12px;
  border-radius: 4px;
}

.filename-labels {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
}

.label {
  font-size: 0.9em;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 4px;
}

.name-label {
  color: #007bff;
  background: rgba(0, 123, 255, 0.1);
}

.dot-label {
  color: #6c757d;
  background: rgba(108, 117, 125, 0.1);
}

.ext-label {
  color: #dc3545;
  background: rgba(220, 53, 69, 0.1);
}

.rules-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.rules-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid;
  text-align: center;
}

.rules-card.allowed {
  border-color: #28a745;
  background: rgba(40, 167, 69, 0.02);
}

.rules-card.forbidden {
  border-color: #dc3545;
  background: rgba(220, 53, 69, 0.02);
}

.rules-card .icon {
  font-size: 2em;
  margin-bottom: 10px;
  display: block;
}

.rules-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
}

.rule-item {
  background: rgba(255,255,255,0.8);
  padding: 8px 12px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

.file-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.file-type-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.file-type-card:hover {
  border-color: #6f42c1;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(111, 66, 193, 0.1);
}

.file-type-card .icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.extensions {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.ext {
  background: #6f42c1;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

.folder-visualization {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
}

.folder-demo {
  text-align: center;
}

.folder-icon {
  font-size: 4em;
  margin-bottom: 15px;
}

.folder-name {
  font-weight: bold;
  font-size: 1.2em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.folder-contents {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}

.file-in-folder, .subfolder {
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.9em;
  color: #495057;
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
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.1);
}

.info-card .icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.feature-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.hierarchy-demo {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
}

.level-1, .level-2, .level-3, .level-4 {
  margin-left: 20px;
}

.folder-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  font-size: 0.9em;
}

.folder-icon {
  font-size: 1.2em;
}

.comparison-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;
}

.comparison-item {
  text-align: center;
}

.file-icon-demo {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.file-icon-demo.shortcut {
  border-color: #fd7e14;
}

.file-icon {
  font-size: 3em;
}

.shortcut-arrow {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1em;
  color: #fd7e14;
  background: white;
  border-radius: 50%;
  padding: 2px;
}

.file-name {
  font-size: 0.9em;
  font-weight: 500;
}

.comparison-label {
  margin-top: 10px;
  font-weight: 600;
  color: #495057;
}

.arrow-separator {
  font-size: 2em;
  color: #6c757d;
}

.operations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.operation-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.operation-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.operation-card.create {
  border-left-color: #28a745;
}

.operation-card.rename {
  border-left-color: #17a2b8;
}

.operation-card.copy {
  border-left-color: #007bff;
}

.operation-card.move {
  border-left-color: #ffc107;
}

.operation-card.delete {
  border-left-color: #dc3545;
}

.operation-card.restore {
  border-left-color: #6f42c1;
}

.operation-card .icon {
  font-size: 2.5em;
  margin-bottom: 15px;
  display: block;
  text-align: center;
}

.operation-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  text-align: center;
}

.operation-steps, .operation-methods {
  font-size: 0.9em;
}

.step, .method {
  margin-bottom: 10px;
  padding: 8px 0;
}

.step h5, .method h5 {
  color: #495057;
  font-weight: 600;
  margin-bottom: 5px;
}

.drag-drop-demo {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.drag-drop-card {
  text-align: center;
  margin-bottom: 20px;
}

.drag-drop-card .icon {
  font-size: 3em;
  margin-bottom: 10px;
  display: block;
}

.drag-drop-options {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
}

.option {
  background: #f8f9fa;
  padding: 10px 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9em;
  font-weight: 500;
}

.option-icon {
  font-size: 1.2em;
}

.step-by-step {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.step-number {
  background: #007bff;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.shortcuts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.shortcut-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.shortcut-card:hover {
  border-color: #007bff;
  transform: translateY(-2px);
}

.keys {
  margin-bottom: 10px;
}

kbd {
  background: #495057;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  margin: 0 2px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

  .rules-grid {
    grid-template-columns: 1fr;
  }

  .filename-labels {
    flex-direction: column;
    gap: 10px;
  }

  .comparison-grid {
    flex-direction: column;
    gap: 20px;
  }

  .arrow-separator {
    transform: rotate(90deg);
  }

  .operations-grid {
    grid-template-columns: 1fr;
  }

  .drag-drop-options {
    flex-direction: column;
  }

  .shortcuts-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 20px 15px;
  }

  .filename-example {
    font-size: 1.5em;
  }

  .folder-contents {
    grid-template-columns: 1fr;
  }

  .file-types-grid {
    grid-template-columns: 1fr;
  }
}
</style>