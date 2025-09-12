<template>
  <div id="app">
    <nav class="main-nav">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">🎓 Школа</router-link>
        <div class="nav-links">
          <router-link to="/5-class">5 клас</router-link>
          <router-link to="/6-class">6 клас</router-link>
          <router-link to="/7-class">7 клас</router-link>
          <router-link to="/8-class">8 клас</router-link>
          <router-link to="/9-class">9 клас</router-link>
        </div>
      </div>
    </nav>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>