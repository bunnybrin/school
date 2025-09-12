import { ref, onMounted, nextTick } from 'vue'

export function useCanvas(canvasRef) {
  const ctx = ref(null)
  const canvas = ref(null)
  
  onMounted(async () => {
    await nextTick()
    if (canvasRef.value) {
      canvas.value = canvasRef.value
      ctx.value = canvas.value.getContext('2d')
    }
  })
  
  const clearCanvas = () => {
    if (ctx.value && canvas.value) {
      ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
    }
  }
  
  const drawLine = (startX, startY, endX, endY, style = {}) => {
    if (!ctx.value) return
    
    ctx.value.beginPath()
    ctx.value.moveTo(startX, startY)
    ctx.value.lineTo(endX, endY)
    ctx.value.strokeStyle = style.color || '#2d3748'
    ctx.value.lineWidth = style.width || 3
    if (style.dash) {
      ctx.value.setLineDash(style.dash)
    }
    ctx.value.stroke()
    ctx.value.setLineDash([])
  }
  
  const drawCircle = (x, y, radius, style = {}) => {
    if (!ctx.value) return
    
    ctx.value.beginPath()
    ctx.value.arc(x, y, radius, 0, 2 * Math.PI)
    
    if (style.fill) {
      ctx.value.fillStyle = style.fill
      ctx.value.fill()
    }
    
    if (style.stroke) {
      ctx.value.strokeStyle = style.stroke
      ctx.value.lineWidth = style.strokeWidth || 2
      ctx.value.stroke()
    }
  }
  
  const drawPolygon = (vertices, style = {}) => {
    if (!ctx.value || !vertices.length) return
    
    ctx.value.beginPath()
    ctx.value.moveTo(vertices[0].x, vertices[0].y)
    
    for (let i = 1; i < vertices.length; i++) {
      ctx.value.lineTo(vertices[i].x, vertices[i].y)
    }
    ctx.value.closePath()
    
    if (style.fill) {
      ctx.value.fillStyle = style.fill
      ctx.value.fill()
    }
    
    ctx.value.strokeStyle = style.stroke || '#2d3748'
    ctx.value.lineWidth = style.strokeWidth || 3
    ctx.value.stroke()
  }
  
  const drawText = (text, x, y, style = {}) => {
    if (!ctx.value) return
    
    ctx.value.fillStyle = style.color || '#1a202c'
    ctx.value.font = style.font || 'bold 16px Arial'
    ctx.value.fillText(text, x, y)
  }
  
  return {
    ctx,
    canvas,
    clearCanvas,
    drawLine,
    drawCircle,
    drawPolygon,
    drawText
  }
}