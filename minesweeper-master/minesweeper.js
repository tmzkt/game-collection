document.addEventListener('DOMContentLoaded', startGame)

var board = { cells: [] }

function startGame () {
  initDifficulty()
  initBoard(4, 4, 4)
}

function initDifficulty () {
  var hardBtn = document.createElement("button")
  hardBtn.innerText = "Hard"
  hardBtn.onclick = function() {
    initBoard(6, 6, 9)
  };
  
  var medBtn = document.createElement("button")
  medBtn.innerText = "Medium"
  medBtn.onclick = function() {
    initBoard(5, 5, 6)
  };
  
  var easyBtn = document.createElement("button")
  easyBtn.innerText = "Easy"
  easyBtn.onclick = function() {
    initBoard(4, 4, 4)
  };

  var difficultyNode = document.getElementById('difficulty')
  difficultyNode.appendChild(hardBtn)
  difficultyNode.appendChild(medBtn)
  difficultyNode.appendChild(easyBtn)
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
