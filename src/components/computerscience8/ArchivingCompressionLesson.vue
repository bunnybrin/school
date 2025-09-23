<template>
  <div class="container">
    <!-- Вступ з метафорою валізи -->
    <section id="intro" class="section intro-section">
      <h2>🧳 Навіщо нам валіза?</h2>

      <div class="intro-visual">
        <div class="suitcase-demo">
          <div class="before-packing">
            <h3>🔄 Без валізи</h3>
            <div class="items-scattered">
              <span class="item">👕</span>
              <span class="item">👖</span>
              <span class="item">📚</span>
              <span class="item">👟</span>
              <span class="item">🧴</span>
              <span class="item">📱</span>
            </div>
            <p class="chaos-label">Хаос та незручність!</p>
          </div>

          <div class="arrow-transform">➡️</div>

          <div class="after-packing">
            <h3>✅ З валізою</h3>
            <div class="suitcase">
              <div class="suitcase-icon">🧳</div>
              <div class="suitcase-contents">
                <span>👕👖📚👟🧴📱</span>
              </div>
            </div>
            <p class="organized-label">Компактно та зручно!</p>
          </div>
        </div>
      </div>

      <div class="definition-box">
        <p><strong>Валіза = Архів</strong>, речі складені компактно = <strong>Стиснення</strong></p>
        <div class="example-highlight">
          💡 <strong>Приклад із життя:</strong> Коли ви завантажуєте гру на телефон, вона часто приходить у вигляді одного архівного файлу. Це як "валіза" з усіма потрібними речами!
        </div>
      </div>
    </section>

    <!-- Розділ 1: Що таке стиснення даних -->
    <section id="compression-basics" class="section section-1">
      <h2>1️⃣ Що таке стиснення даних?</h2>

      <div class="definition-box">
        <strong>Стиснення даних</strong> — це коли комп'ютер "прибирає зайве" і зменшує розмір файлів.
      </div>

      <div class="compression-demo">
        <h3>📊 Навіщо стискати файли?</h3>
        <div class="reasons-grid">
          <div class="reason-card speed">
            <span class="icon">🚀</span>
            <h4>Швидша передача</h4>
            <p>50 фото з дня народження краще запакувати в один архів</p>
            <div class="demo-comparison">
              <div class="before">
                <div class="files">📷📷📷📷📷...</div>
                <span class="size">500 МБ</span>
                <span class="time">⏱️ 10 хвилин</span>
              </div>
              <div class="after">
                <div class="archive">🗜️ photos.zip</div>
                <span class="size">200 МБ</span>
                <span class="time">⏱️ 4 хвилини</span>
              </div>
            </div>
          </div>

          <div class="reason-card space">
            <span class="icon">💾</span>
            <h4>Економія місця</h4>
            <p>Більше місця для нових ігор та фото</p>
            <div class="storage-demo">
              <div class="storage-bar">
                <div class="used-space before-compression"></div>
                <div class="free-space"></div>
              </div>
              <p>До стиснення: 80% зайнято</p>
              <div class="storage-bar">
                <div class="used-space after-compression"></div>
                <div class="free-space"></div>
              </div>
              <p>Після стиснення: 50% зайнято</p>
            </div>
          </div>

          <div class="reason-card backup">
            <span class="icon">🛡️</span>
            <h4>Зручні резервні копії</h4>
            <p>Один архів замість сотень окремих файлів</p>
            <div class="backup-visual">
              <div class="many-files">
                <span>📄📊📸📹📝...</span>
                <p>Важко зберігати</p>
              </div>
              <div class="single-archive">
                <span>🗃️</span>
                <p>Backup.7z</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="example-box">
        💡 <strong>Приклад із життя:</strong> Відправляючи домашнє завдання вчителю, краще заархівувати папку з файлами. Так вона не "розсиплеться" і завантажиться швидше.
      </div>
    </section>

    <!-- Розділ 2: Типи стиснення -->
    <section id="compression-types" class="section section-2">
      <h2>2️⃣ Два типи стиснення</h2>

      <div class="compression-types-grid">
        <div class="compression-type lossless">
          <div class="type-header">
            <span class="icon">💎</span>
            <h3>Стиснення БЕЗ втрат</h3>
            <span class="type-label">Lossless</span>
          </div>

          <div class="analogy-box">
            <h4>🛍️ Як вакуумний пакет для одягу</h4>
            <div class="vacuum-demo">
              <div class="before-vacuum">
                <span class="clothes">👕👖🧥</span>
                <p>Великий об'єм</p>
              </div>
              <div class="vacuum-arrow">➡️</div>
              <div class="after-vacuum">
                <span class="compressed-clothes">📦</span>
                <p>Компактно, але речі ті ж самі</p>
              </div>
            </div>
          </div>

          <div class="usage-info">
            <h4>🎯 Використовується для:</h4>
            <div class="file-examples">
              <span class="file-type">📝 Тексти</span>
              <span class="file-type">⚙️ Програми</span>
              <span class="file-type">📊 Таблиці</span>
              <span class="file-type">📋 Документи</span>
            </div>
            <p class="guarantee">✅ <strong>Гарантія:</strong> Жодної інформації не втрачається!</p>
          </div>

          <div class="example-highlight">
            <strong>Приклад:</strong> Ваш реферат у .zip архіві буде 100% таким самим після розпакування.
          </div>
        </div>

        <div class="compression-type lossy">
          <div class="type-header">
            <span class="icon">🎨</span>
            <h3>Стиснення З втратами</h3>
            <span class="type-label">Lossy</span>
          </div>

          <div class="analogy-box">
            <h4>🗣️ Як переказати фільм другові</h4>
            <div class="retelling-demo">
              <div class="original-story">
                <span class="movie">🎬</span>
                <p>Повний фільм (2 години деталей)</p>
              </div>
              <div class="retelling-arrow">➡️</div>
              <div class="retold-story">
                <span class="summary">💬</span>
                <p>Переказ (5 хвилин, але суть зрозуміла)</p>
              </div>
            </div>
          </div>

          <div class="usage-info">
            <h4>🎯 Використовується для:</h4>
            <div class="media-examples">
              <div class="media-type">
                <span class="icon">🖼️</span>
                <span class="format">JPEG</span>
                <p>Схожі кольори зливаються</p>
              </div>
              <div class="media-type">
                <span class="icon">🎵</span>
                <span class="format">MP3</span>
                <p>Видаляються звуки, які вухо не чує</p>
              </div>
              <div class="media-type">
                <span class="icon">🎥</span>
                <span class="format">MP4</span>
                <p>Менше деталей, але відео залишається якісним</p>
              </div>
            </div>
            <p class="trade-off">⚖️ <strong>Компроміс:</strong> Менший розмір за рахунок якості</p>
          </div>
        </div>
      </div>

      <div class="interactive-comparison">
        <h3>🔍 Інтерактивне порівняння</h3>
        <div class="comparison-slider">
          <div class="image-comparison">
            <div class="original-quality">
              <span class="quality-demo">🖼️ HD</span>
              <p>Оригінал: 5 МБ</p>
            </div>
            <div class="compressed-quality">
              <span class="quality-demo">🖼️</span>
              <p>JPEG: 500 КБ (90% якості збережено)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Розділ 3: Архіватори та типи файлів -->
    <section id="archivers" class="section section-3">
      <h2>3️⃣ Інструменти для пакування</h2>

      <div class="definition-box">
        <strong>Архіватори</strong> — це програми-помічники, які вміють пакувати та розпаковувати файли.
      </div>

      <div class="archivers-showcase">
        <h3>🛠️ Популярні архіватори</h3>
        <div class="archivers-grid">
          <div class="archiver-card winrar">
            <div class="archiver-icon">📦</div>
            <h4>WinRAR</h4>
            <div class="archiver-info">
              <span class="format">.rar</span>
              <span class="feature">🏆 Найкращий ступінь стиснення</span>
              <span class="popularity">⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <div class="archiver-card sevenzip">
            <div class="archiver-icon">7️⃣</div>
            <h4>7-Zip</h4>
            <div class="archiver-info">
              <span class="format">.7z</span>
              <span class="feature">🆓 Безкоштовний</span>
              <span class="feature">⚡ Найшвидший</span>
            </div>
          </div>

          <div class="archiver-card winzip">
            <div class="archiver-icon">🗜️</div>
            <h4>WinZip</h4>
            <div class="archiver-info">
              <span class="format">.zip</span>
              <span class="feature">📱 Підтримка на всіх пристроях</span>
              <span class="popularity">⭐⭐⭐⭐</span>
            </div>
          </div>

          <div class="archiver-card builtin">
            <div class="archiver-icon">🪟</div>
            <h4>Вбудований Windows</h4>
            <div class="archiver-info">
              <span class="format">.zip</span>
              <span class="feature">🎯 Не потребує встановлення</span>
              <span class="feature">✅ Завжди доступний</span>
            </div>
          </div>
        </div>
      </div>

      <div class="file-formats-demo">
        <h3>📋 Типи архівних файлів</h3>
        <div class="formats-comparison">
          <div class="format-card zip">
            <div class="format-header">
              <span class="format-icon">📄</span>
              <span class="format-name">.ZIP</span>
              <span class="popularity-badge">Найпопулярніший</span>
            </div>
            <div class="format-stats">
              <div class="stat">
                <span class="label">Швидкість:</span>
                <div class="progress-bar"><div class="progress" style="width: 80%"></div></div>
              </div>
              <div class="stat">
                <span class="label">Стиснення:</span>
                <div class="progress-bar"><div class="progress" style="width: 70%"></div></div>
              </div>
              <div class="stat">
                <span class="label">Сумісність:</span>
                <div class="progress-bar"><div class="progress" style="width: 100%"></div></div>
              </div>
            </div>
          </div>

          <div class="format-card rar">
            <div class="format-header">
              <span class="format-icon">📦</span>
              <span class="format-name">.RAR</span>
              <span class="feature-badge">Найкраще стиснення</span>
            </div>
            <div class="format-stats">
              <div class="stat">
                <span class="label">Швидкість:</span>
                <div class="progress-bar"><div class="progress" style="width: 60%"></div></div>
              </div>
              <div class="stat">
                <span class="label">Стиснення:</span>
                <div class="progress-bar"><div class="progress" style="width: 95%"></div></div>
              </div>
              <div class="stat">
                <span class="label">Сумісність:</span>
                <div class="progress-bar"><div class="progress" style="width: 80%"></div></div>
              </div>
            </div>
          </div>

          <div class="format-card seven-z">
            <div class="format-header">
              <span class="format-icon">7️⃣</span>
              <span class="format-name">.7Z</span>
              <span class="feature-badge">Найефективніший</span>
            </div>
            <div class="format-stats">
              <div class="stat">
                <span class="label">Швидкість:</span>
                <div class="progress-bar"><div class="progress" style="width: 90%"></div></div>
              </div>
              <div class="stat">
                <span class="label">Стиснення:</span>
                <div class="progress-bar"><div class="progress" style="width: 98%"></div></div>
              </div>
              <div class="stat">
                <span class="label">Сумісність:</span>
                <div class="progress-bar"><div class="progress" style="width: 70%"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="example-box">
        💡 <strong>Приклад із життя:</strong> Завантажуючи гру з інтернету, вона часто приходить у форматі .rar або .zip. Без розархівування встановити її не вийде!
      </div>
    </section>

    <!-- Розділ 4: Практичні операції -->
    <section id="operations" class="section section-4">
      <h2>4️⃣ Практичні навички роботи з архівами</h2>

      <div class="operations-demo">
        <div class="operation-group create-archive">
          <h3>📦 Як створити архів?</h3>
          <div class="step-by-step">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <div class="step-visual">
                  <span class="cursor">🖱️</span>
                  <span class="files">📄📊📸</span>
                </div>
                <p>Виділити файли або папку</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <div class="step-visual">
                  <span class="right-click">👆</span>
                  <span class="context-menu">📋</span>
                </div>
                <p>Правою кнопкою миші → "Додати до архіву…"</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <div class="step-visual">
                  <span class="settings">⚙️</span>
                  <span class="format-choice">🎛️</span>
                </div>
                <p>Обрати формат і ступінь стиснення</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <div class="step-visual">
                  <span class="archive-result">🗜️</span>
                  <span class="success">✅</span>
                </div>
                <p>Готово! Архів створено</p>
              </div>
            </div>
          </div>
        </div>

        <div class="operation-group extract-archive">
          <h3>📂 Як розпакувати архів?</h3>
          <div class="extraction-demo">
            <div class="extraction-method simple">
              <h4>🎯 Простий спосіб</h4>
              <div class="method-steps">
                <div class="method-step">
                  <span class="archive-icon">🗜️</span>
                  <span class="arrow">➡️</span>
                  <span class="right-click-icon">👆</span>
                  <span class="arrow">➡️</span>
                  <span class="extract-option">"Видобути…"</span>
                </div>
              </div>
            </div>
            <div class="extraction-method advanced">
              <h4>⚡ Швидкий спосіб</h4>
              <div class="method-steps">
                <div class="method-step">
                  <span class="archive-icon">🗜️</span>
                  <span class="arrow">➡️</span>
                  <span class="double-click">👆👆</span>
                  <span class="arrow">➡️</span>
                  <span class="auto-extract">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="special-archives">
        <h3>🎮 Особливі типи архівів</h3>
        <div class="special-types-grid">
          <div class="special-type sfx">
            <span class="type-icon">⚙️</span>
            <h4>SFX-архів (.exe)</h4>
            <p>Самостійно розпаковується без додаткових програм</p>
            <div class="demo-sfx">
              <span class="exe-file">📄.exe</span>
              <span class="arrow">➡️</span>
              <span class="auto-extract">🚀</span>
              <span class="arrow">➡️</span>
              <span class="extracted-files">📁</span>
            </div>
          </div>

          <div class="special-type multipart">
            <span class="type-icon">🧩</span>
            <h4>Багатотомний архів</h4>
            <p>Великий файл розділяється на кілька частин</p>
            <div class="demo-multipart">
              <div class="big-file">
                <span class="large-archive">📦 8GB</span>
                <span class="error">❌ Не поміщається</span>
              </div>
              <div class="arrow-down">⬇️</div>
              <div class="parts">
                <span class="part">📦.001</span>
                <span class="part">📦.002</span>
                <span class="part">📦.003</span>
                <span class="success">✅ По 2GB кожна</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="example-box">
        💡 <strong>Приклад із життя:</strong> Хочете передати фільм на флешку, але він 6 ГБ, а флешка витримує тільки 4 ГБ? Архіватор розділить його на дві частини!
      </div>
    </section>

    <!-- Розділ 5: Резервне копіювання -->
    <section id="backup" class="section section-5">
      <h2>5️⃣ Рятівне коло: Резервне копіювання</h2>

      <div class="definition-box">
        <strong>Резервне копіювання (бекап)</strong> — це створення копій важливих даних на випадок їх втрати.
      </div>

      <div class="backup-importance">
        <h3>⚠️ Чому це критично важливо?</h3>
        <div class="disaster-scenarios">
          <div class="scenario">
            <span class="disaster-icon">💥</span>
            <h4>Поломка комп'ютера</h4>
            <p>Жорсткий диск може зламатися в будь-який момент</p>
          </div>
          <div class="scenario">
            <span class="disaster-icon">🦠</span>
            <h4>Вірусна атака</h4>
            <p>Вірус може зашифрувати або знищити всі файли</p>
          </div>
          <div class="scenario">
            <span class="disaster-icon">🗑️</span>
            <h4>Випадкове видалення</h4>
            <p>Людська помилка — найчастіша причина втрати даних</p>
          </div>
          <div class="scenario">
            <span class="disaster-icon">🔥</span>
            <h4>Природні катастрофи</h4>
            <p>Пожежа, повінь або крадіжка</p>
          </div>
        </div>
      </div>

      <div class="golden-rule">
        <h3>🏆 Золоте правило 3-х копій</h3>
        <div class="three-copies-visual">
          <div class="copy-location primary">
            <div class="location-icon">💻</div>
            <h4>1️⃣ Основна копія</h4>
            <p>На вашому комп'ютері</p>
            <span class="risk-level low">Ризик: низький</span>
          </div>

          <div class="copy-location local">
            <div class="location-icon">💽</div>
            <h4>2️⃣ Локальна копія</h4>
            <p>На зовнішньому диску або флешці</p>
            <span class="risk-level medium">Ризик: середній</span>
          </div>

          <div class="copy-location cloud">
            <div class="location-icon">☁️</div>
            <h4>3️⃣ Хмарна копія</h4>
            <p>Google Диск, Dropbox, OneDrive</p>
            <span class="risk-level very-low">Ризик: дуже низький</span>
          </div>
        </div>

        <div class="rule-explanation">
          <p><strong>Чому саме ТРИ копії?</strong></p>
          <ul>
            <li>Якщо зламається комп'ютер — є копія на диску</li>
            <li>Якщо загубиться диск — є копія в хмарі</li>
            <li>Якщо немає інтернету — є локальна копія</li>
          </ul>
        </div>
      </div>

      <div class="backup-demo">
        <h3>💼 Практичний приклад</h3>
        <div class="backup-scenario">
          <div class="scenario-description">
            <p>📚 Ви зробили презентацію для уроку, але комп'ютер вдома зламався.</p>
          </div>

          <div class="backup-solutions">
            <div class="solution bad">
              <span class="result-icon">❌</span>
              <h4>Без бекапу</h4>
              <p>Доведеться переробляти всю презентацію заново</p>
            </div>

            <div class="solution good">
              <span class="result-icon">✅</span>
              <h4>З бекапом</h4>
              <p>Завантажуєте презентацію з Google Диску та спокійно показуєте в школі</p>
            </div>
          </div>
        </div>
      </div>

      <div class="backup-tools">
        <h3>🛠️ Інструменти для резервного копіювання</h3>
        <div class="tools-grid">
          <div class="tool cloud-storage">
            <span class="tool-icon">☁️</span>
            <h4>Хмарні сховища</h4>
            <div class="tool-examples">
              <span class="service">Google Drive</span>
              <span class="service">Dropbox</span>
              <span class="service">OneDrive</span>
            </div>
            <p>Автоматична синхронізація файлів</p>
          </div>

          <div class="tool external-drives">
            <span class="tool-icon">💽</span>
            <h4>Зовнішні накопичувачі</h4>
            <div class="tool-examples">
              <span class="device">USB флешки</span>
              <span class="device">Зовнішні HDD</span>
              <span class="device">SSD диски</span>
            </div>
            <p>Фізичні копії поза комп'ютером</p>
          </div>

          <div class="tool backup-software">
            <span class="tool-icon">⚙️</span>
            <h4>Спеціальні програми</h4>
            <div class="tool-examples">
              <span class="software">Windows Backup</span>
              <span class="software">Time Machine</span>
              <span class="software">Acronis</span>
            </div>
            <p>Автоматичне створення архівів</p>
          </div>
        </div>
      </div>

      <div class="example-box">
        💡 <strong>Головне правило:</strong> Завжди майте копії важливих файлів у РІЗНИХ місцях! Один пожар не повинен знищити всі ваші спогади та роботи.
      </div>
    </section>

    <!-- Розділ 6: Тест для самоперевірки -->
    <section id="quiz" class="section quiz-section">
      <h2>🧠 Перевір свої знання</h2>
      <LessonQuiz
        title="Тест: Архівування та стиснення даних"
        description="Перевір, як добре ти засвоїв матеріал про архіви, стиснення та резервні копії!"
        :questions="quizQuestions"
      />
    </section>

    <!-- Підсумок -->
    <div class="conclusion">
      <h3>🎓 Підсумок уроку</h3>
      <div class="summary-cards">
        <div class="summary-card">
          <span class="summary-icon">🧳</span>
          <h4>Архівування</h4>
          <p>Це як "валіза" для цифрових файлів — зручно зберігати та передавати</p>
        </div>
        <div class="summary-card">
          <span class="summary-icon">🗜️</span>
          <h4>Стиснення</h4>
          <p>Буває без втрат (для документів) та з втратами (для медіа-файлів)</p>
        </div>
        <div class="summary-card">
          <span class="summary-icon">🛠️</span>
          <h4>Архіватори</h4>
          <p>WinRAR, 7-Zip, WinZip — ваші помічники для роботи з архівами</p>
        </div>
        <div class="summary-card">
          <span class="summary-icon">🛡️</span>
          <h4>Резервні копії</h4>
          <p>Правило 3-х копій рятує від втрати важливих даних</p>
        </div>
      </div>

      <div class="final-message">
        <h4>🌟 Головне, що потрібно запам'ятати:</h4>
        <p>Архіви економлять час і місце, а резервні копії рятують від катастроф. Зробіть архівування та бекапи своєю корисною звичкою!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import LessonQuiz from '../common/LessonQuiz.vue'

const quizQuestions = [
  {
    question: 'Яка головна мета стиснення даних?',
    options: [
      'Зробити файли красивішими',
      'Зменшити розмір файлів для економії місця та швидшої передачі',
      'Покращити якість зображень'
    ],
    correct: 1,
    hint: 'Згадай метафору з валізою у вступі — головна мета стиснення полягає в тому, щоб зменшити розмір.',
    sectionId: 'intro'
  },
  {
    question: 'Чим відрізняється стиснення без втрат від стиснення з втратами?',
    options: [
      'Стиснення без втрат зберігає всю інформацію, з втратами — частково втрачає',
      'Стиснення з втратами працює швидше',
      'Немає різниці між ними'
    ],
    correct: 0,
    hint: 'Пригадай аналогію з вакуумним пакетом (без втрат) та переказом фільму (з втратами).',
    sectionId: 'compression-types'
  },
  {
    question: 'Який формат архіву найпоширеніший і підтримується на всіх пристроях?',
    options: ['.7z', '.rar', '.zip'],
    correct: 2,
    hint: 'Подивись на розділ про архіватори — один формат має найкращу сумісність.',
    sectionId: 'archivers'
  },
  {
    question: 'Як створити архів у Windows?',
    options: [
      'Подвійний клік на файлі',
      'Правою кнопкою миші → "Додати до архіву"',
      'Перетягнути файл на робочий стіл'
    ],
    correct: 1,
    hint: 'Перегляньте крок за кроком інструкцію створення архіву в практичному розділі.',
    sectionId: 'operations'
  },
  {
    question: 'Скільки копій важливих файлів рекомендує "золоте правило"?',
    options: ['2 копії', '3 копії', '5 копій'],
    correct: 1,
    hint: 'Згадай "золоте правило 3-х копій" з розділу про резервне копіювання.',
    sectionId: 'backup'
  },
  {
    question: 'Що таке SFX-архів?',
    options: [
      'Архів, який не можна відкрити',
      'Архів, який розпаковується сам без додаткових програм',
      'Архів тільки для Linux'
    ],
    correct: 1,
    hint: 'Подивись на розділ про особливі типи архівів — один з них має розширення .exe.',
    sectionId: 'operations'
  },
  {
    question: 'Для чого використовується стиснення з втратами?',
    options: [
      'Для текстових документів і програм',
      'Для фото, музики та відео',
      'Для резервних копій'
    ],
    correct: 1,
    hint: 'Пригадай приклади JPEG, MP3 та MP4 з розділу про типи стиснення.',
    sectionId: 'compression-types'
  }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 12px;
  border-left: 6px solid #dee2e6;
  background: #f8f9fa;
}

.intro-section {
  border-left-color: #6f42c1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.intro-section h2 {
  color: white;
  text-align: center;
  font-size: 2.2em;
  margin-bottom: 30px;
}

.intro-visual {
  background: rgba(255,255,255,0.1);
  padding: 30px;
  border-radius: 10px;
  margin: 25px 0;
}

.suitcase-demo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.before-packing, .after-packing {
  flex: 1;
  text-align: center;
  min-width: 200px;
}

.before-packing h3, .after-packing h3 {
  color: white;
  margin-bottom: 20px;
}

.items-scattered {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
  min-height: 100px;
  align-items: center;
}

.item {
  font-size: 2em;
  background: rgba(255,255,255,0.2);
  padding: 10px;
  border-radius: 8px;
  transform: rotate(var(--rotation, 0deg));
  animation: scatter 2s ease-in-out infinite;
}

.item:nth-child(1) { --rotation: -15deg; animation-delay: 0s; }
.item:nth-child(2) { --rotation: 10deg; animation-delay: 0.3s; }
.item:nth-child(3) { --rotation: -8deg; animation-delay: 0.6s; }
.item:nth-child(4) { --rotation: 12deg; animation-delay: 0.9s; }
.item:nth-child(5) { --rotation: -5deg; animation-delay: 1.2s; }
.item:nth-child(6) { --rotation: 7deg; animation-delay: 1.5s; }

@keyframes scatter {
  0%, 100% { transform: rotate(var(--rotation)) translateY(0px); }
  50% { transform: rotate(var(--rotation)) translateY(-5px); }
}

.suitcase {
  text-align: center;
  margin: 20px 0;
}

.suitcase-icon {
  font-size: 4em;
  margin-bottom: 15px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.suitcase-contents {
  background: rgba(255,255,255,0.2);
  padding: 15px;
  border-radius: 8px;
  font-size: 1.5em;
}

.arrow-transform {
  font-size: 3em;
  color: white;
  animation: bounce 1s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(0px); }
  50% { transform: translateX(10px); }
}

.chaos-label, .organized-label {
  color: white;
  font-weight: bold;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
}

.chaos-label {
  background: rgba(220, 53, 69, 0.3);
}

.organized-label {
  background: rgba(40, 167, 69, 0.3);
}

.definition-box {
  background: rgba(255,255,255,0.95);
  color: #2c3e50;
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
  border-left: 4px solid #6c757d;
  font-size: 1.1em;
}

.example-highlight {
  background: #fff3cd;
  color: #856404;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
  border-left: 4px solid #f39c12;
}

.section-1 { border-left-color: #007bff; }
.section-2 { border-left-color: #28a745; }
.section-3 { border-left-color: #fd7e14; }
.section-4 { border-left-color: #dc3545; }
.section-5 { border-left-color: #6f42c1; }

.section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0,0,0,0.1);
}

.section h3 {
  color: #34495e;
  font-size: 1.4em;
  margin: 25px 0 15px 0;
}

.compression-demo {
  margin: 30px 0;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.reason-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  text-align: center;
  transition: all 0.3s ease;
}

.reason-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.reason-card.speed { border-left-color: #007bff; }
.reason-card.space { border-left-color: #28a745; }
.reason-card.backup { border-left-color: #6f42c1; }

.reason-card .icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
}

.demo-comparison {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 15px;
}

.before, .after {
  flex: 1;
  text-align: center;
  padding: 15px;
  border-radius: 8px;
}

.before {
  background: rgba(220, 53, 69, 0.1);
  border: 2px solid #dc3545;
}

.after {
  background: rgba(40, 167, 69, 0.1);
  border: 2px solid #28a745;
}

.files, .archive {
  font-size: 1.5em;
  margin-bottom: 10px;
  display: block;
}

.size, .time {
  display: block;
  font-weight: bold;
  margin: 5px 0;
}

.storage-demo {
  margin-top: 20px;
}

.storage-bar {
  width: 100%;
  height: 20px;
  background: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;
  display: flex;
}

.used-space {
  height: 100%;
  transition: width 0.3s ease;
}

.used-space.before-compression {
  width: 80%;
  background: linear-gradient(90deg, #dc3545, #fd7e14);
}

.used-space.after-compression {
  width: 50%;
  background: linear-gradient(90deg, #28a745, #20c997);
}

.free-space {
  flex: 1;
  background: #f8f9fa;
}

.backup-visual {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.many-files, .single-archive {
  text-align: center;
  flex: 1;
}

.many-files span, .single-archive span {
  font-size: 2em;
  display: block;
  margin-bottom: 10px;
}

.compression-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.compression-type {
  background: white;
  border-radius: 12px;
  padding: 30px;
  border: 3px solid #e9ecef;
  transition: all 0.3s ease;
}

.compression-type:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.compression-type.lossless {
  border-color: #28a745;
}

.compression-type.lossy {
  border-color: #fd7e14;
}

.type-header {
  text-align: center;
  margin-bottom: 25px;
}

.type-header .icon {
  font-size: 3em;
  margin-bottom: 10px;
  display: block;
}

.type-header h3 {
  color: #2c3e50;
  margin: 10px 0;
}

.type-label {
  background: #6c757d;
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: bold;
}

.lossless .type-label {
  background: #28a745;
}

.lossy .type-label {
  background: #fd7e14;
}

.analogy-box {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.vacuum-demo, .retelling-demo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin: 15px 0;
}

.before-vacuum, .after-vacuum, .original-story, .retold-story {
  text-align: center;
  flex: 1;
}

.clothes, .compressed-clothes, .movie, .summary {
  font-size: 2em;
  display: block;
  margin-bottom: 10px;
}

.vacuum-arrow, .retelling-arrow {
  font-size: 1.5em;
  color: #6c757d;
}

.usage-info {
  margin: 20px 0;
}

.file-examples, .media-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 0;
}

.file-type, .media-type {
  background: #e9ecef;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

.media-type {
  background: white;
  border: 2px solid #e9ecef;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  min-width: 120px;
}

.media-type .icon {
  font-size: 2em;
  margin-bottom: 5px;
  display: block;
}

.format {
  background: #fd7e14;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8em;
}

.guarantee, .trade-off {
  background: rgba(255,255,255,0.7);
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  font-weight: 500;
}

.guarantee {
  color: #155724;
  background: #d4edda;
}

.trade-off {
  color: #721c24;
  background: #f8d7da;
}

.interactive-comparison {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin: 30px 0;
  border: 2px solid #e9ecef;
}

.image-comparison {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.original-quality, .compressed-quality {
  text-align: center;
  flex: 1;
  padding: 20px;
  border-radius: 8px;
}

.original-quality {
  background: rgba(40, 167, 69, 0.1);
  border: 2px solid #28a745;
}

.compressed-quality {
  background: rgba(253, 126, 20, 0.1);
  border: 2px solid #fd7e14;
}

.quality-demo {
  font-size: 3em;
  display: block;
  margin-bottom: 15px;
}

.archivers-showcase {
  margin: 30px 0;
}

.archivers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.archiver-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.archiver-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.archiver-card.winrar { border-left-color: #dc3545; }
.archiver-card.sevenzip { border-left-color: #007bff; }
.archiver-card.winzip { border-left-color: #28a745; }
.archiver-card.builtin { border-left-color: #6f42c1; }

.archiver-icon {
  font-size: 3em;
  margin-bottom: 15px;
}

.archiver-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.archiver-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.format {
  background: #6c757d;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  align-self: center;
}

.feature {
  background: #f8f9fa;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.9em;
}

.popularity {
  font-size: 1.2em;
}

.file-formats-demo {
  margin: 30px 0;
}

.formats-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.format-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.format-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.format-card.zip { border-left-color: #28a745; }
.format-card.rar { border-left-color: #dc3545; }
.format-card.seven-z { border-left-color: #007bff; }

.format-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
}

.format-icon {
  font-size: 2em;
}

.format-name {
  font-weight: bold;
  font-size: 1.3em;
  color: #2c3e50;
}

.popularity-badge, .feature-badge {
  background: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: bold;
}

.feature-badge {
  background: #28a745;
}

.format-stats {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 10px;
}

.label {
  min-width: 100px;
  font-weight: 500;
  color: #495057;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #007bff, #28a745);
  transition: width 0.3s ease;
}

.operations-demo {
  margin: 30px 0;
}

.operation-group {
  background: white;
  padding: 30px;
  border-radius: 12px;
  margin: 25px 0;
  border: 2px solid #e9ecef;
}

.create-archive {
  border-left-color: #28a745;
}

.extract-archive {
  border-left-color: #007bff;
}

.step-by-step {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 25px 0;
}

.step {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.step-number {
  background: #28a745;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-visual {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 1.5em;
}

.extraction-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.extraction-method {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.method-steps {
  margin-top: 15px;
}

.method-step {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.2em;
  padding: 15px;
  background: white;
  border-radius: 6px;
}

.special-archives {
  margin: 30px 0;
}

.special-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.special-type {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  text-align: center;
}

.special-type.sfx { border-left-color: #fd7e14; }
.special-type.multipart { border-left-color: #6f42c1; }

.type-icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
}

.demo-sfx {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 1.2em;
}

.demo-multipart {
  margin: 20px 0;
}

.big-file {
  text-align: center;
  margin-bottom: 15px;
}

.large-archive {
  font-size: 2em;
  display: block;
  margin-bottom: 10px;
}

.arrow-down {
  text-align: center;
  font-size: 2em;
  margin: 10px 0;
}

.parts {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.part {
  background: #e9ecef;
  padding: 10px 15px;
  border-radius: 6px;
  font-weight: bold;
}

.error {
  color: #dc3545;
  font-weight: bold;
}

.success {
  color: #28a745;
  font-weight: bold;
}

.backup-importance {
  margin: 30px 0;
}

.disaster-scenarios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.scenario {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e9ecef;
  border-left-color: #dc3545;
}

.disaster-icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
}

.golden-rule {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 30px;
  border-radius: 12px;
  margin: 30px 0;
  color: white;
}

.golden-rule h3 {
  color: white;
  text-align: center;
  margin-bottom: 25px;
}

.three-copies-visual {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.copy-location {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid rgba(255,255,255,0.2);
}

.copy-location.primary {
  border-color: rgba(255, 193, 7, 0.5);
}

.copy-location.local {
  border-color: rgba(0, 123, 255, 0.5);
}

.copy-location.cloud {
  border-color: rgba(40, 167, 69, 0.5);
}

.location-icon {
  font-size: 3em;
  margin-bottom: 15px;
}

.copy-location h4 {
  color: white;
  margin: 15px 0 10px 0;
}

.risk-level {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 10px;
}

.risk-level.low {
  background: rgba(255, 193, 7, 0.8);
  color: #212529;
}

.risk-level.medium {
  background: rgba(253, 126, 20, 0.8);
  color: white;
}

.risk-level.very-low {
  background: rgba(40, 167, 69, 0.8);
  color: white;
}

.rule-explanation {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 8px;
  margin-top: 25px;
}

.rule-explanation ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.rule-explanation li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
}

.rule-explanation li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.backup-demo {
  margin: 30px 0;
}

.backup-scenario {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
}

.scenario-description {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.1em;
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #f39c12;
}

.backup-solutions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.solution {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 2px solid;
}

.solution.bad {
  background: rgba(220, 53, 69, 0.1);
  border-color: #dc3545;
}

.solution.good {
  background: rgba(40, 167, 69, 0.1);
  border-color: #28a745;
}

.result-icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
}

.backup-tools {
  margin: 30px 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.tool {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  text-align: center;
  transition: all 0.3s ease;
}

.tool:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.tool.cloud-storage { border-left-color: #007bff; }
.tool.external-drives { border-left-color: #28a745; }
.tool.backup-software { border-left-color: #6f42c1; }

.tool-icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
}

.tool-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin: 15px 0;
}

.service, .device, .software {
  background: #e9ecef;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.9em;
  font-weight: 500;
}

.example-box {
  background: #fff3cd;
  padding: 20px;
  border-radius: 8px;
  margin: 25px 0;
  border-left: 4px solid #f39c12;
  font-size: 1.05em;
}

.quiz-section {
  background: #eef8ff;
  border-left-color: #0d6efd;
}

.conclusion {
  text-align: center;
  margin: 40px 0;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.conclusion h3 {
  color: white;
  margin-bottom: 25px;
  font-size: 2em;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.summary-card {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  border: 2px solid rgba(255,255,255,0.2);
}

.summary-icon {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
}

.summary-card h4 {
  color: white;
  margin: 15px 0 10px 0;
}

.final-message {
  background: rgba(255,255,255,0.1);
  padding: 25px;
  border-radius: 10px;
  margin-top: 30px;
}

.final-message h4 {
  color: white;
  margin-bottom: 15px;
}

.final-message p {
  font-size: 1.1em;
  line-height: 1.6;
}

/* Адаптивний дизайн */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .section {
    padding: 20px;
  }

  .suitcase-demo {
    flex-direction: column;
    gap: 15px;
  }

  .arrow-transform {
    transform: rotate(90deg);
    margin: 15px 0;
  }

  .compression-types-grid {
    grid-template-columns: 1fr;
  }

  .image-comparison {
    flex-direction: column;
    gap: 20px;
  }

  .demo-comparison {
    flex-direction: column;
    gap: 10px;
  }

  .step {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .three-copies-visual {
    grid-template-columns: 1fr;
  }

  .backup-solutions {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .intro-section h2 {
    font-size: 1.8em;
  }

  .item {
    font-size: 1.5em;
    padding: 8px;
  }

  .suitcase-icon {
    font-size: 3em;
  }

  .summary-cards {
    grid-template-columns: 1fr;
  }

  .reasons-grid,
  .archivers-grid,
  .formats-comparison,
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>