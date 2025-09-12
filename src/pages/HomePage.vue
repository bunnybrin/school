<template>
  <div class="container">
    <h1>🎓 Інтерактивні уроки для школярів</h1>
    <p style="text-align: center; font-size: 1.2em; color: #666; margin-bottom: 40px;">
      Оберіть свій клас для вивчення інтерактивних матеріалів
    </p>
    
    <div class="home-grid">
      <router-link to="/5-class" class="class-card">
        <span class="class-icon">📚</span>
        <h3>5 клас</h3>
        <p>Комп'ютерна наука</p>
      </router-link>
      
      <router-link to="/6-class" class="class-card">
        <span class="class-icon">💻</span>
        <h3>6 клас</h3>
        <p>Комп'ютерна наука</p>
      </router-link>
      
      <router-link to="/7-class" class="class-card">
        <span class="class-icon">🔬</span>
        <h3>7 клас</h3>
        <p>Комп'ютерна наука</p>
      </router-link>
      
      <router-link to="/8-class" class="class-card">
        <span class="class-icon">📐</span>
        <h3>8 клас</h3>
        <p>Геометрія, Алгебра, Комп'ютерна наука</p>
      </router-link>
      
      <router-link to="/9-class" class="class-card">
        <span class="class-icon">🧮</span>
        <h3>9 клас</h3>
        <p>Комп'ютерна наука</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Pure template component - no logic needed
</script>