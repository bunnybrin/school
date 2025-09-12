<template>
  <div class="shape-container">
    <div class="shape-title">{{ title }}</div>
    <canvas
      ref="canvasRef"
      class="shape-canvas"
      width="300"
      height="250"
      @click="handleClick"
    ></canvas>
    <div 
      class="info-display" 
      v-html="infoText"
    ></div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useCanvas } from '../../composables/useCanvas'
import { useGeometry } from '../../composables/useGeometry'
import { useInteraction } from '../../composables/useInteraction'

export default {
  name: 'QuadrilateralCanvas',
  props: {
    shapeType: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const canvasRef = ref(null)
    const vertices = ref([])
    
    const { clearCanvas, drawPolygon, drawCircle, drawText, drawLine } = useCanvas(canvasRef)
    const { createShapeVertices, getAdjacentElements, getOppositeElement } = useGeometry()
    const { currentHighlight, infoText, handleCanvasClick, resetInteraction } = useInteraction()
    
    onMounted(() => {
      setupShape()
      draw()
      resetInteraction()
    })
    
    const setupShape = () => {
      if (!canvasRef.value) return
      
      const centerX = canvasRef.value.width / 2
      const centerY = canvasRef.value.height / 2
      vertices.value = createShapeVertices(props.shapeType, centerX, centerY)
    }
    
    const draw = () => {
      if (!vertices.value.length) return
      
      clearCanvas()
      
      // Draw quadrilateral
      drawPolygon(vertices.value, {
        fill: 'rgba(66, 153, 225, 0.1)',
        stroke: '#2d3748',
        strokeWidth: 3
      })
      
      // Draw highlights based on current highlight
      if (currentHighlight.value) {
        drawHighlight()
      }
      
      // Draw vertices
      vertices.value.forEach(vertex => {
        drawCircle(vertex.x, vertex.y, 8, {
          fill: '#ff6b6b',
          stroke: 'white',
          strokeWidth: 2
        })
        
        // Draw labels
        drawText(vertex.label, vertex.x + 12, vertex.y - 8)
      })
    }
    
    const drawHighlight = () => {
      const h = currentHighlight.value
      
      switch (h.type) {
        case 'vertex':
          highlightVertex(h.index)
          break
        case 'side':
          highlightSide(h.index)
          break
        case 'diagonal':
          highlightDiagonals()
          break
        case 'all-vertices':
          highlightAllVertices()
          break
        case 'all-sides':
          highlightAllSides()
          break
      }
    }
    
    const highlightVertex = (index) => {
      const vertex = vertices.value[index]
      
      // Highlight clicked vertex
      drawCircle(vertex.x, vertex.y, 12, { fill: '#ff6b6b' })
      
      // Highlight adjacent vertices
      const adjacentIndices = getAdjacentElements(index)
      adjacentIndices.forEach(i => {
        const v = vertices.value[i]
        drawCircle(v.x, v.y, 10, { fill: '#ff8c42' })
      })
      
      // Highlight opposite vertex
      const oppositeIndex = getOppositeElement(index)
      const opposite = vertices.value[oppositeIndex]
      drawCircle(opposite.x, opposite.y, 10, { fill: '#a8e6cf' })
    }
    
    const highlightSide = (index) => {
      const start = vertices.value[index]
      const end = vertices.value[(index + 1) % 4]
      
      // Highlight clicked side
      drawLine(start.x, start.y, end.x, end.y, {
        color: '#4ecdc4',
        width: 6
      })
      
      // Highlight adjacent sides
      const adjacentIndices = getAdjacentElements(index)
      adjacentIndices.forEach(i => {
        const s = vertices.value[i]
        const e = vertices.value[(i + 1) % 4]
        drawLine(s.x, s.y, e.x, e.y, {
          color: '#ff8c42',
          width: 4
        })
      })
      
      // Highlight opposite side
      const oppositeIndex = getOppositeElement(index)
      const oppStart = vertices.value[oppositeIndex]
      const oppEnd = vertices.value[(oppositeIndex + 1) % 4]
      drawLine(oppStart.x, oppStart.y, oppEnd.x, oppEnd.y, {
        color: '#a8e6cf',
        width: 4
      })
    }
    
    const highlightDiagonals = () => {
      // Diagonal AC
      drawLine(
        vertices.value[0].x, vertices.value[0].y,
        vertices.value[2].x, vertices.value[2].y,
        { color: '#ffe66d', width: 4, dash: [8, 4] }
      )
      
      // Diagonal BD
      drawLine(
        vertices.value[1].x, vertices.value[1].y,
        vertices.value[3].x, vertices.value[3].y,
        { color: '#ffe66d', width: 4 }
      )
    }
    
    const highlightAllVertices = () => {
      vertices.value.forEach(vertex => {
        drawCircle(vertex.x, vertex.y, 12, { fill: '#ff6b6b' })
      })
    }
    
    const highlightAllSides = () => {
      for (let i = 0; i < 4; i++) {
        const start = vertices.value[i]
        const end = vertices.value[(i + 1) % 4]
        drawLine(start.x, start.y, end.x, end.y, {
          color: '#4ecdc4',
          width: 6
        })
      }
    }
    
    const handleClick = (event) => {
      handleCanvasClick(event, vertices.value, props.shapeType)
    }
    
    // Watch for highlight changes and redraw
    watch(currentHighlight, () => {
      draw()
    }, { deep: true })
    
    return {
      canvasRef,
      infoText,
      handleClick
    }
  }
}
</script>