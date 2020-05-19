export default class Board {
    constructor(canvas, context) {
        this.canvas = canvas
        this.context = context
    }

    // Set canvas dimension
    setDimension(width, height) {
        this.canvas.width = width
        this.canvas.height = height
    }

    // Draw Basic Board Structure
    drawBoard(canvas, context) {
        const ctx = this.context
        // Define Each Cell Size
        const cellSize = Math.floor(this.canvas.width / 3)

        // Horizontal Lines
        drawLine(30, cellSize, this.canvas.width-30, cellSize)
        drawLine(30, cellSize*2, this.canvas.width-30, cellSize*2)

        // Vertical Lines
        drawLine(cellSize, 30, cellSize, this.canvas.height-30)
        drawLine(cellSize*2, 30, cellSize*2, this.canvas.height-30)

        // Draw Lines Function
        function drawLine(x1, y1, x2, y2) {
            ctx.lineWidth = 10
            ctx.strokeStyle = 'grey'
            ctx.lineCap = 'round'

            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
            ctx.closePath()
        }
    }

    // Disable Board
    disableBoard() {
        this.canvas.style.cursor = 'not allowed'
        this.canvas.style.pointerEvents = 'none'
    }

    // Enable Board
    enableBoard() {
        this.canvas.style.cursor = 'pointer'
        this.canvas.style.pointerEvents = 'auto'
    }

    // Draw 'X' At
    drawXAt(x, y) {
        const ctx = this.context

        ctx.lineWidth = 6
        ctx.strokeStyle = 'maroon'
    
        // Left to Right line
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x+90, y+90)
        ctx.stroke()
        ctx.closePath()
    
        // Right to Left line
        ctx.beginPath()
        ctx.moveTo(x+90, y)
        ctx.lineTo(x, y+90)
        ctx.stroke()
        ctx.closePath()
    }

    // Draw 'O' At
    drawOAt(x, y) {
        const ctx = this.context

        ctx.lineWidth = 6
        ctx.strokeStyle = 'green'
    
        ctx.beginPath()
        ctx.arc(x, y, 50, 0, Math.PI*2, true)
        ctx.stroke()
        ctx.closePath()
    }

    // Get Mouse Position on Board
    getMousePosition(event) {
        let rect = this.canvas.getBoundingClientRect()
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    }
}