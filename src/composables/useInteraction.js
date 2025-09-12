import { ref } from 'vue'
import { useGeometry } from './useGeometry'

export function useInteraction() {
  const { 
    isPointOnSide, 
    isPointInside, 
    getSideNames, 
    getAdjacentElements, 
    getOppositeElement,
    getShapeInfo 
  } = useGeometry()
  
  const currentHighlight = ref(null)
  const infoText = ref('')
  
  const handleCanvasClick = (event, vertices, shapeType) => {
    const rect = event.target.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    // Check vertex click
    for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i]
      const distance = Math.sqrt((x - vertex.x) ** 2 + (y - vertex.y) ** 2)
      if (distance < 15) {
        showVertexInfo(i, vertices)
        return
      }
    }
    
    // Check side click
    for (let i = 0; i < 4; i++) {
      if (isPointOnSide(x, y, i, vertices)) {
        showSideInfo(i)
        return
      }
    }
    
    // Check if inside quadrilateral
    if (isPointInside(x, y, vertices)) {
      showGeneralInfo(shapeType)
      return
    }
    
    // Click outside - show diagonals
    showDiagonalInfo()
  }
  
  const showVertexInfo = (index, vertices) => {
    const vertex = vertices[index]
    const adjacent = getAdjacentElements(index).map(i => vertices[i].label)
    const opposite = vertices[getOppositeElement(index)].label
    
    currentHighlight.value = { type: 'vertex', index }
    infoText.value = `
      <strong>Вершина ${vertex.label}</strong><br>
      📍 <span style="color: #ff8c42">Сусідні вершини:</span> ${adjacent.join(', ')}<br>
      📍 <span style="color: #a8e6cf">Протилежна вершина:</span> ${opposite}<br>
      📝 Вершина - це точка з'єднання двох сторін
    `
  }
  
  const showSideInfo = (index) => {
    const sideNames = getSideNames()
    const currentSide = sideNames[index]
    const adjacent = getAdjacentElements(index).map(i => sideNames[i])
    const opposite = sideNames[getOppositeElement(index)]
    
    currentHighlight.value = { type: 'side', index }
    infoText.value = `
      <strong>Сторона ${currentSide}</strong><br>
      📏 <span style="color: #ff8c42">Сусідні сторони:</span> ${adjacent.join(', ')}<br>
      📏 <span style="color: #a8e6cf">Протилежна сторона:</span> ${opposite}<br>
      📝 Сусідні сторони мають спільну вершину
    `
  }
  
  const showDiagonalInfo = () => {
    currentHighlight.value = { type: 'diagonal' }
    infoText.value = `
      <strong>Діагоналі чотирикутника</strong><br>
      ↗️ <span style="color: #ffe66d">Діагональ AC:</span> з'єднує протилежні вершини A і C<br>
      ↙️ <span style="color: #ffe66d">Діагональ BD:</span> з'єднує протилежні вершини B і D<br>
      📝 Діагональ - відрізок між протилежними вершинами
    `
  }
  
  const showGeneralInfo = (shapeType) => {
    currentHighlight.value = { type: 'all-sides' }
    infoText.value = `
      <strong>${getShapeInfo(shapeType)}</strong><br>
      🔷 <span style="color: #4ecdc4">Сторони:</span> AB, BC, CD, DA<br>
      🔴 <span style="color: #ff6b6b">Вершини:</span> A, B, C, D<br>
      📝 Чотирикутник має 4 вершини, 4 сторони і 2 діагоналі
    `
  }
  
  const resetInteraction = () => {
    currentHighlight.value = null
    infoText.value = 'Клікніть на фігуру для вивчення її елементів'
  }
  
  return {
    currentHighlight,
    infoText,
    handleCanvasClick,
    showVertexInfo,
    showSideInfo,
    showDiagonalInfo,
    showGeneralInfo,
    resetInteraction
  }
}