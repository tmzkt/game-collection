document.addEventListener('DOMContentLoaded', startGame)

var board = { cells: [] }

function startGame () {
  initBoard()
}

function checkForWin () {
  if (board.cells.reduce((x,y) => x && (!y.hidden || (y.isMarked && y.isMine)), true)) {
    displayMessage('You win!')
	removeListeners()
  }
}
function countSurroundingMines (cell) {
  var surrounding = getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (s in surrounding) {
    if (surrounding[s].isMine) {
	  count++
	}
  }
  return count
}

