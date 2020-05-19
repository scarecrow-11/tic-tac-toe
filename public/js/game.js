import Board from './utils/Board.js'
import { getResult } from './utils/getResult.js'
import { gameOver } from './utils/gameOver.js'

const canvas = document.getElementById('canvas-board')
const ctx = canvas.getContext('2d')

// Set players
let players = {
    x : 'X',
    o: 'O'
}

// Set Turns and Board Cell States
let turn = 'X'
let boardCells = [[{cell: null}, {cell: null}, {cell: null}], [{cell: null}, {cell: null}, {cell: null}], [{cell: null}, {cell: null}, {cell: null}]]
let result = {}

let turnElement = document.getElementById('player-turn')
turnElement.innerHTML = turn + '\'s Turn...'

// Draw Canvas Object
const board = new Board(canvas, ctx)
// Set Canvas Dimension
board.setDimension(510, 510)

// Draw Canvas Board
board.drawBoard()

// Add Mouse Event Listeners
board.canvas.addEventListener('click', (event) => {
    // Stop Propagation
    event.stopPropagation()

    // Get Mouse Position
    let mousePosition = board.getMousePosition(event)

    // For Cell 1
    if(mousePosition.x < 170 && mousePosition.y < 170) {
        // Check for Cell availability
        if(boardCells[0][0].cell) {
            console.log('Cell Not Available!!')
            return
        }

        // Check for player turn
        if(turn === 'X') {
            board.drawXAt(50, 50)
            boardCells[0][0].cell = 'X'
            turn = 'O'
        } else if(turn === 'O') {
            board.drawOAt(95, 95)
            boardCells[0][0].cell = 'O'
            turn = 'X'
        }

        // Update Turn display
        turnElement.innerHTML = turn + '\'s Turn...'

    } else if((mousePosition.x > 170 && mousePosition.x < 340) && (mousePosition.y < 170)) {
        // For Cell 2
        // Check for Cell availability
        if(boardCells[0][1].cell) {
            console.log('Cell Not Available!!')
            return
        }

        // Check for player turn
        if(turn === 'X') {
            board.drawXAt(210, 50)
            boardCells[0][1].cell = 'X'
            turn = 'O'
        } else if(turn === 'O') {
            board.drawOAt(255, 95)
            boardCells[0][1].cell = 'O'
            turn = 'X'
        }

        // Update Turn display
        turnElement.innerHTML = turn + '\'s Turn...'

    } else if((mousePosition.x > 340) && (mousePosition.y < 170)) {
        // For Cell 3
        // Check for Cell availability
        if(boardCells[0][2].cell) {
            console.log('Cell Not Available!!')
            return
        }

        // Check for player turn
        if(turn === 'X') {
            board.drawXAt(375, 50)
            boardCells[0][2].cell = 'X'
            turn = 'O'
        } else if(turn === 'O') {
            board.drawOAt(416, 95)
            boardCells[0][2].cell = 'O'
            turn = 'X'
        }

        // Update Turn display
        turnElement.innerHTML = turn + '\'s Turn...'

    } else if((mousePosition.x < 170) && (mousePosition.y > 170 && mousePosition.y < 340)) {
        // For Cell 4
        // Check for Cell availability
        if(boardCells[1][0].cell) {
            console.log('Cell Not Available!!')
            return
        }

        // Check for player turn
        if(turn === 'X') {
            board.drawXAt(50, 210)
            boardCells[1][0].cell = 'X'
            turn = 'O'
        } else if(turn === 'O') {
            board.drawOAt(95, 255)
            boardCells[1][0].cell = 'O'
            turn = 'X'
        }

        // Update Turn display
        turnElement.innerHTML = turn + '\'s Turn...'

    } else if((mousePosition.x > 170 && mousePosition.x < 340) && (mousePosition.y > 170 && mousePosition.y < 340)) {
        // For Cell 5
        // Check for Cell availability
        if(boardCells[1][1].cell) {
            console.log('Cell Not Available!!')
            return
        }

        // Check for player turn
        if(turn === 'X') {
            board.drawXAt(210, 210)
            boardCells[1][1].cell = 'X'
            turn = 'O'
        } else if(turn === 'O') {
            board.drawOAt(255, 255)
            boardCells[1][1].cell = 'O'
            turn = 'X'
        }

        // Update Turn display
        turnElement.innerHTML = turn + '\'s Turn...'

    } else if((mousePosition.x > 340) && (mousePosition.y > 170 && mousePosition.y < 340)) {
        // For Cell 6
        // Check for Cell availability
        if(boardCells[1][2].cell) {
            console.log('Cell Not Available!!')
            return
        }

        // Check for player turn
        if(turn === 'X') {
            board.drawXAt(375, 210)
            boardCells[1][2].cell = 'X'
            turn = 'O'
        } else if(turn === 'O') {
            board.drawOAt(416, 255)
            boardCells[1][2].cell = 'O'
            turn = 'X'
        }

        // Update Turn display
        turnElement.innerHTML = turn + '\'s Turn...'

    } else if((mousePosition.x < 170) && (mousePosition.y > 340)) {
        // For Cell 7
        // Check for Cell availability
        if(boardCells[2][0].cell) {
            console.log('Cell Not Available!!')
            return
        }

        // Check for player turn
        if(turn === 'X') {
            board.drawXAt(50, 375)
            boardCells[2][0].cell = 'X'
            turn = 'O'
        } else if(turn === 'O') {
            board.drawOAt(95, 416)
            boardCells[2][0].cell = 'O'
            turn = 'X'
        }

        // Update Turn display
        turnElement.innerHTML = turn + '\'s Turn...'

    } else if((mousePosition.x > 170 && mousePosition.x < 340) && (mousePosition.y > 340)) {
        // For Cell 8
        // Check for Cell availability
        if(boardCells[2][1].cell) {
            console.log('Cell Not Available!!')
            return
        }

        // Check for player turn
        if(turn === 'X') {
            board.drawXAt(210, 375)
            boardCells[2][1].cell = 'X'
            turn = 'O'
        } else if(turn === 'O') {
            board.drawOAt(255, 416)
            boardCells[2][1].cell = 'O'
            turn = 'X'
        }

        // Update Turn display
        turnElement.innerHTML = turn + '\'s Turn...'

    } else if((mousePosition.x > 340) && (mousePosition.y > 340)) {
        // For Cell 9
        // Check for Cell availability
        if(boardCells[2][2].cell) {
            console.log('Cell Not Available!!')
            return
        }

        // Check for player turn
        if(turn === 'X') {
            board.drawXAt(375, 375)
            boardCells[2][2].cell = 'X'
            turn = 'O'
        } else if(turn === 'O') {
            board.drawOAt(416, 416)
            boardCells[2][2].cell = 'O'
            turn = 'X'
        }

        // Update Turn display
        turnElement.innerHTML = turn + '\'s Turn...'

    }

    // Check for result
    result = getResult(boardCells)
    console.log(result)
    if(result.winner) {
        board.disableBoard()
        turnElement.style.display = 'none'
        gameOver('Winner: ' + result.winner + '!', board)
    } else if(result.draw) {
        board.disableBoard
        turnElement.style.display = 'none'
        gameOver('Match Drawn!', board)
    }

})