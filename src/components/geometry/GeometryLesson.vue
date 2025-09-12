<template>
  <div class="container">
    <h1>📐 Конспект: Чотирикутники</h1>

    <div class="instruction">
      <strong>Натискайте на різні частини чотирикутників!</strong><br>
      Клікніть на вершину, сторону або всередину фігури, щоб дізнатися більше
    </div>

    <div class="shapes-grid">
      <QuadrilateralCanvas
        v-for="shape in shapes"
        :key="shape.type"
        :shape-type="shape.type"
        :title="shape.title"
      />
    </div>

    <div class="legend">
      <h3>🎨 Легенда кольорів</h3>
      <div class="legend-grid">
        <div class="legend-item">
          <div class="color-box highlight-vertices"></div>
          <span>Вершини (A, B, C, D)</span>
        </div>
        <div class="legend-item">
          <div class="color-box highlight-sides"></div>
          <span>Сторони чотирикутника</span>
        </div>
        <div class="legend-item">
          <div class="color-box highlight-diagonals"></div>
          <span>Діагоналі</span>
        </div>
        <div class="legend-item">
          <div class="color-box highlight-adjacent"></div>
          <span>Сусідні елементи</span>
        </div>
        <div class="legend-item">
          <div class="color-box highlight-opposite"></div>
          <span>Протилежні елементи</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuadrilateralCanvas from './QuadrilateralCanvas.vue'

export default {
  name: 'GeometryLesson',
  components: {
    QuadrilateralCanvas
  },
  setup() {
    const shapes = [
      { type: 'square', title: 'Квадрат' },
      { type: 'rectangle', title: 'Прямокутник' },
      { type: 'rhombus', title: 'Ромб' },
      { type: 'arbitrary', title: 'Довільний чотирикутник' }
    ]
    
    return {
      shapes
    }
  }
}
</script>