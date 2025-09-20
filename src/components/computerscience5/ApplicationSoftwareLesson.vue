<template>
  <div class="container application-lesson">
    <section class="hero">
      <div class="hero-text">
        <h1>💻 Прикладні комп'ютерні програми</h1>
        <p>Уяви, що комп'ютер — це чарівна коробка. Але щоб він щось робив, йому потрібні інструкції. Ці інструкції називаються <strong>програмами</strong>. Усі програми разом називають <strong>програмним забезпеченням</strong>.</p>
        <div class="program-types">
          <div class="type-card">
            <span class="emoji">🧠</span>
            <h3>Системні програми</h3>
            <p>Змушують сам комп'ютер працювати (наприклад, операційна система Windows).</p>
          </div>
          <div class="type-card">
            <span class="emoji">🎨</span>
            <h3>Прикладні програми</h3>
            <p>Це ті, якими користуємося ми, щоб робити щось цікаве та корисне.</p>
          </div>
        </div>
        <div class="definition-box">
          <strong>Прикладне програмне забезпечення</strong> — це програми, які допомагають нам виконувати конкретні завдання: малювати, писати, спілкуватися, вчитися або грати.
        </div>
      </div>
      <div class="hero-visual">
        <img :src="learningImg" alt="Учень працює за комп'ютером" />
      </div>
    </section>

    <section class="section">
      <h2>1️⃣ Програми для роботи з текстом</h2>
      <div class="section-content">
        <img :src="textEditorImg" alt="Текстовий редактор" class="section-image" />
        <div class="section-text">
          <p>Це програми, в яких ти можеш створювати текстові документи: писати реферати, листи, казки або просто робити нотатки.</p>
          <ul>
            <li>Дозволяють вводити текст з клавіатури.</li>
            <li>Допомагають виправляти помилки (редагувати).</li>
            <li>Дають можливість робити текст гарним (форматувати).</li>
          </ul>
          <div class="example-box">Приклади: <strong>Microsoft Word</strong>, <strong>Блокнот</strong>.</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>2️⃣ Програми для створення презентацій</h2>
      <div class="section-content reverse">
        <img :src="presentationImg" alt="Презентація" class="section-image" />
        <div class="section-text">
          <p>Це твої помічники для виступів у школі. У них ти створюєш комп'ютерні презентації — набір слайдів з текстом, картинками та навіть відео, які можна показувати на великому екрані.</p>
          <ul>
            <li>Допомагають створювати та оформлювати слайди.</li>
            <li>Додають на слайди текст, малюнки та інші об'єкти.</li>
          </ul>
          <div class="example-box">Приклади: <strong>Microsoft PowerPoint</strong>, <strong>LibreOffice Impress</strong>.</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>3️⃣ Програми для малювання</h2>
      <div class="section-content">
        <img :src="paintingImg" alt="Малювання" class="section-image" />
        <div class="section-text">
          <p>Якщо ти любиш малювати, ці програми тобі точно сподобаються! Вони перетворюють комп'ютер на полотно, а мишку або графічний планшет — на пензлик.</p>
          <ul>
            <li>Дозволяють створювати малюнки на комп'ютері.</li>
            <li>Дають змогу редагувати вже готові малюнки.</li>
          </ul>
          <div class="example-box">Приклад: <strong>Paint</strong>.</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>4️⃣ Програми для подорожей в Інтернеті</h2>
      <div class="section-content reverse">
        <img :src="browserImg" alt="Браузер" class="section-image" />
        <div class="section-text">
          <p>Інтернет — це величезний світ інформації, а браузери — це твій корабель для подорожей по ньому. Завдяки їм ти можеш переглядати вебсторінки та вебсайти.</p>
          <ul>
            <li>Дозволяють шукати інформацію.</li>
            <li>Допомагають дивитися відео та грати в онлайн-ігри.</li>
            <li>Надають можливість відвідувати різні сайти.</li>
          </ul>
          <div class="example-box">Приклади: <strong>Google Chrome</strong>, <strong>Mozilla Firefox</strong>, <strong>Opera</strong>, <strong>Microsoft Edge</strong>.</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>5️⃣ Навчальні програми та комп'ютерні ігри</h2>
      <div class="section-content">
        <img :src="learningToolsImg" alt="Навчальні програми" class="section-image" />
        <div class="section-text">
          <p>Ці програми роблять навчання цікавим, а відпочинок — веселим. Це можуть бути електронні підручники, онлайн-тести або захоплюючі ігри.</p>
          <ul>
            <li>Допомагають вчитися.</li>
            <li>Дозволяють перевіряти знання.</li>
            <li>Дарують розваги.</li>
          </ul>
          <div class="example-box">Приклади: <strong>електронні засоби навчання</strong>, <strong>комп'ютерні ігри</strong>, <strong>онлайн-тести</strong>, <strong>відеоуроки</strong>.</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>6️⃣ Програми для створення програм</h2>
      <div class="section-content reverse">
        <img :src="codingImg" alt="Створення програм" class="section-image" />
        <div class="section-text">
          <p>Це особливий вид програм, які використовують програмісти, щоб створювати нові програми, ігри та сайти. Ти вже знайомий з деякими з них!</p>
          <ul>
            <li>Надають інструменти для написання програмного коду.</li>
          </ul>
          <div class="example-box">Приклади: <strong>середовище Scratch</strong>, <strong>IDLE для мови програмування Python</strong>.</div>
        </div>
      </div>
    </section>

    <section class="final-idea">
      <h2>🌟 Головна ідея</h2>
      <p><strong>Прикладні програми</strong> — це наші головні інструменти на комп'ютері, які допомагають нам у роботі, навчанні та розвагах!</p>
      <div class="callout">
        <p>Тепер ти можеш зробити свій інтерактивний конспект! Для кожної групи програм можна додати іконку, короткий опис та приклад того, що можна в ній зробити. Успіхів!</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import textEditorImg from '../../assets/computerscience5/application/text-editor.svg'
import presentationImg from '../../assets/computerscience5/application/presentation.svg'
import paintingImg from '../../assets/computerscience5/application/painting.svg'
import browserImg from '../../assets/computerscience5/application/browser.svg'
import learningImg from '../../assets/computerscience5/application/learning.svg'
import learningToolsImg from '../../assets/computerscience5/application/learning-tools.svg'
import codingImg from '../../assets/computerscience5/application/coding.svg'
</script>

<style scoped>
.application-lesson {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 30px 60px;
}

.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  background: linear-gradient(135deg, #f3f4ff 0%, #fff 100%);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 20px 45px rgba(79, 114, 251, 0.08);
}

.hero-text {
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-text h1 {
  font-size: 32px;
  margin: 0;
  color: #1b1c33;
}

.hero-text p {
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
}

.program-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.type-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(46, 52, 111, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.type-card h3 {
  margin: 0;
  font-size: 20px;
  color: #2f327d;
}

.type-card p {
  margin: 0;
  line-height: 1.5;
}

.type-card .emoji {
  font-size: 32px;
}

.definition-box {
  background: #fff9db;
  border-left: 6px solid #ffd43b;
  padding: 18px 24px;
  border-radius: 16px;
  font-size: 18px;
  line-height: 1.6;
}

.hero-visual {
  flex: 1 1 260px;
  display: flex;
  justify-content: center;
}

.hero-visual img {
  max-width: 260px;
  width: 100%;
}

.section {
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 16px 40px rgba(31, 41, 55, 0.08);
}

.section h2 {
  margin: 0 0 24px;
  font-size: 26px;
  color: #1b1c33;
}

.section-content {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
}

.section-content.reverse {
  flex-direction: row-reverse;
}

.section-image {
  width: 220px;
  height: 220px;
  flex: 0 0 auto;
  border-radius: 18px;
  background: #f8f9fa;
  padding: 18px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.section-text {
  flex: 1 1 260px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 17px;
  line-height: 1.6;
}

.section-text ul {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 8px;
}

.example-box {
  background: #edf2ff;
  color: #364fc7;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 600;
  width: fit-content;
}

.final-idea {
  background: linear-gradient(135deg, #fff0f6 0%, #ffffff 100%);
  border-radius: 24px;
  padding: 36px;
  box-shadow: 0 18px 42px rgba(214, 31, 105, 0.12);
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 18px;
  line-height: 1.6;
}

.final-idea h2 {
  margin: 0;
  font-size: 28px;
  color: #a61e4d;
}

.callout {
  background: #fff;
  border-radius: 18px;
  padding: 20px 24px;
  border: 1px dashed #f06595;
}

@media (max-width: 900px) {
  .hero {
    padding: 28px;
  }

  .section {
    padding: 24px;
  }

  .section-image {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 600px) {
  .application-lesson {
    padding: 24px 16px 48px;
  }

  .hero {
    gap: 24px;
  }

  .hero-text h1 {
    font-size: 26px;
  }

  .section h2 {
    font-size: 22px;
  }

  .section-content.reverse {
    flex-direction: column;
  }

  .section-content {
    flex-direction: column;
  }

  .section-image {
    width: 160px;
    height: 160px;
  }
}
</style>
