export function getResult(boardCells) {
    let winner = null
    let draw = false

    let countX, countO, nullCount

    ///////////////////////////
    // Check for Win Pattern //
    ///////////////////////////
    
    // Check for Horizontal
    for(let i = 0; i < boardCells.length; ++i) {
        countX = 0
        countO = 0
        for(let j = 0; j < boardCells[i].length; ++j) {
            if(boardCells[i][j].cell === 'X') {
                countX++
            } else if(boardCells[i][j].cell === 'O') {
                countO++
            }
        }

        if(countX === 3) {
            winner = 'X'
            return {
                winner,
                draw
            }
        } else if(countO === 3) {
            winner = 'O'
            return {
                winner,
                draw
            }
        }
    }

    // Check For Verticals
    for(let i = 0; i < boardCells.length; ++i) {
        countX = 0
        countO = 0
        for(let j = 0; j < boardCells[i].length; ++j) {
            if(boardCells[j][i].cell === 'X') {
                countX++
            } else if(boardCells[j][i].cell === 'O') {
                countO++
            }
        }

        if(countX === 3) {
            winner = 'X'
            return {
                winner,
                draw
            }
        } else if(countO === 3) {
            winner = 'O'
            return {
                winner,
                draw
            }
        }
    }

    // Check for Diagonal Left-to-Right
    countX = 0
    countO = 0
    for(let i = 0; i < boardCells.length; ++i){
        if(boardCells[i][i].cell === 'X') {
            countX++
        } else if(boardCells[i][i].cell === 'O') {
            countO++
        }
    }

    if(countX === 3) {
        winner = 'X'
        return {
            winner,
            draw
        }
    } else if(countO === 3) {
        winner = 'O'
        return {
            winner,
            draw
        }
    }

    // Check for Diagonal Right-to-Left
    countX = 0
    countO = 0
    for(let i = 0, j = boardCells[i].length-1; i < boardCells.length && j >= 0; ++i, --j) {
        if(boardCells[i][j].cell === 'X') {
            countX++
        } else if(boardCells[i][j].cell === 'O') {
            countO++
        }
    }

    if(countX === 3) {
        winner = 'X'
        return {
            winner,
            draw
        }
    } else if(countO === 3) {
        winner = 'O'
        return {
            winner,
            draw
        }
    }

    // Check for Draw
    nullCount = 0
    for(let i = 0; i < boardCells.length; ++i) {
        for(let j = 0; j < boardCells[i].length; ++j) {
            if(!boardCells[i][j].cell) {
                nullCount++
            }
        }
    }

    // Draw if no null
    if(nullCount === 0) {
        winner = null
        draw = true
        return {
            winner,
            draw
        }
    }

    // Return Result
    return {
        winner,
        draw
    }
}