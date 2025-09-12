<template>
  <div id="app">
    <nav class="main-nav">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">🎓 Школа</router-link>
        
        <button 
          class="mobile-menu-button" 
          @click="toggleMobileMenu"
          aria-label="Меню"
        >
          ☰
        </button>
        
        <div class="nav-links" :class="{ 'nav-links-mobile': isMobileMenuOpen }">
          <router-link to="/5-class" @click="closeMobileMenu">5 клас</router-link>
          <router-link to="/6-class" @click="closeMobileMenu">6 клас</router-link>
          <router-link to="/7-class" @click="closeMobileMenu">7 клас</router-link>
          <router-link to="/8-class" @click="closeMobileMenu">8 клас</router-link>
          <router-link to="/9-class" @click="closeMobileMenu">9 клас</router-link>
        </div>
      </div>
    </nav>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style>
.main-nav {
  background: #2d3748;
  color: white;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.nav-logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #4fd1c7;
  text-decoration: none;
  padding: 15px 0;
}

.nav-links {
  display: flex;
  gap: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 20px 15px;
  transition: background-color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  background-color: rgba(79, 209, 197, 0.2);
  color: #4fd1c7;
}

main {
  min-height: calc(100vh - 60px);
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  padding: 10px;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
    position: relative;
  }
  
  .nav-logo {
    font-size: 1.3em;
  }
  
  .mobile-menu-button {
    display: block;
  }
  
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #2d3748;
    flex-direction: column;
    gap: 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
  }
  
  .nav-links-mobile {
    display: flex;
  }
  
  .nav-links a {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  
  .nav-links a:last-child {
    border-bottom: none;
  }
}
</style>