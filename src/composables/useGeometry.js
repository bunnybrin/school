import { computed } from 'vue'

export function useGeometry() {
  const createShapeVertices = (shapeType, centerX, centerY) => {
    switch(shapeType) {
      case 'square': {
        const size = 60
        return [
          { x: centerX - size, y: centerY - size, label: 'A' },
          { x: centerX + size, y: centerY - size, label: 'B' },
          { x: centerX + size, y: centerY + size, label: 'C' },
          { x: centerX - size, y: centerY + size, label: 'D' }
        ]
      }
      
      case 'rectangle': {
        const w = 80, h = 50
        return [
          { x: centerX - w, y: centerY - h, label: 'A' },
          { x: centerX + w, y: centerY - h, label: 'B' },
          { x: centerX + w, y: centerY + h, label: 'C' },
          { x: centerX - w, y: centerY + h, label: 'D' }
        ]
      }
      
      case 'rhombus': {
        const r = 70
        return [
          { x: centerX, y: centerY - r, label: 'A' },
          { x: centerX + r, y: centerY, label: 'B' },
          { x: centerX, y: centerY + r, label: 'C' },
          { x: centerX - r, y: centerY, label: 'D' }
        ]
      }
      
      case 'arbitrary':
        return [
          { x: centerX - 60, y: centerY - 40, label: 'A' },
          { x: centerX + 80, y: centerY - 30, label: 'B' },
          { x: centerX + 50, y: centerY + 60, label: 'C' },
          { x: centerX - 70, y: centerY + 40, label: 'D' }
        ]
        
      default:
        return []
    }
  }
  
  const isPointOnSide = (x, y, sideIndex, vertices) => {
    const start = vertices[sideIndex]
    const end = vertices[(sideIndex + 1) % 4]
    
    const distance = pointToLineDistance(x, y, start.x, start.y, end.x, end.y)
    
    const minX = Math.min(start.x, end.x) - 10
    const maxX = Math.max(start.x, end.x) + 10
    const minY = Math.min(start.y, end.y) - 10
    const maxY = Math.max(start.y, end.y) + 10
    
    return distance < 10 && x >= minX && x <= maxX && y >= minY && y <= maxY
  }
  
  const pointToLineDistance = (px, py, x1, y1, x2, y2) => {
    const dx = x2 - x1
    const dy = y2 - y1
    const length = Math.sqrt(dx * dx + dy * dy)
    
    if (length === 0) return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2)
    
    const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (length * length)))
    const projection = { x: x1 + t * dx, y: y1 + t * dy }
    
    return Math.sqrt((px - projection.x) ** 2 + (py - projection.y) ** 2)
  }
  
  const isPointInside = (x, y, vertices) => {
    let inside = false
    
    for (let i = 0, j = 3; i < 4; j = i++) {
      const xi = vertices[i].x, yi = vertices[i].y
      const xj = vertices[j].x, yj = vertices[j].y
      
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
        inside = !inside
      }
    }
    
    return inside
  }
  
  const getShapeInfo = (shapeType) => {
    const shapeInfo = {
      'square': 'Квадрат - всі сторони рівні, всі кути 90°',
      'rectangle': 'Прямокутник - протилежні сторони рівні, всі кути 90°',
      'rhombus': 'Ромб - всі сторони рівні, протилежні кути рівні',
      'arbitrary': 'Довільний чотирикутник - загальний випадок'
    }
    
    return shapeInfo[shapeType] || 'Невідома фігура'
  }
  
  const getSideNames = () => ['AB', 'BC', 'CD', 'DA']
  
  const getAdjacentElements = (index, total = 4) => {
    return [
      (index - 1 + total) % total,
      (index + 1) % total
    ]
  }
  
  const getOppositeElement = (index, total = 4) => {
    return (index + 2) % total
  }
  
  return {
    createShapeVertices,
    isPointOnSide,
    pointToLineDistance,
    isPointInside,
    getShapeInfo,
    getSideNames,
    getAdjacentElements,
    getOppositeElement
  }
}