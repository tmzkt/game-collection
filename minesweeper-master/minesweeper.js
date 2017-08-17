document.addEventListener('DOMContentLoaded', startGame)

var board = { cells: [] }

function startGame () {
  lib.initBoard()
}

function checkForWin () {
  if (board.cells.reduce((x,y) => x && (!y.hidden || (y.isMarked && y.isMine)), true)) {
    lib.displayMessage('You win!')
	removeListeners()
  }
}
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (s in surrounding) {
    if (surrounding[s].isMine) {
	  count++
	}
  }
  return count
}

