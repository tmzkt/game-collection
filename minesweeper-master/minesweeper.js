document.addEventListener('DOMContentLoaded', startGame)

var board = { cells: [] }

function startGame () {
  // create board
  var rows = 6, cols = 6
  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
	  var isMine = Math.random() < 0.2 ? true : false
	  board.cells.push({row: i, col: j, isMine:isMine, hidden:true})
	}
  }

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  if (board.cells.reduce((x,y) => x && (!y.hidden || (y.isMarked && y.isMine)), true)) {
    lib.displayMessage('You win!')
	removeListeners()
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
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

