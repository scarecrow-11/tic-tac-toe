// Game Over Display

export function gameOver(message, board) {
    let gameOverDisplay = document.getElementById('game-over-display')
    let gameOverItems = document.getElementById('game-over-items')
    let winnerItem = gameOverItems.querySelector('#winner-name')
    let restartButton = gameOverItems.querySelector('#game-restart')

    gameOverDisplay.style.display = 'flex'

    winnerItem.innerHTML = message

    restartButton.onclick = () => {
        gameOverDisplay.style.display = 'none'
        window.location.href = '/game.html'
        board.enableBoard()
    }
}

