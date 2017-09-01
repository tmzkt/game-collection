document.addEventListener('DOMContentLoaded', startGame)

var board = { cells: [] }

function startGame () {
  initDifficulty()
  initBoard()
}

function initDifficulty () {
  var hardBtn = document.createElement("button")
  hardBtn.innerText = "Hard"
  hardBtn.onclick = function() {
    alert("hard");
  };
  
  var medBtn = document.createElement("button")
  medBtn.innerText = "Medium"
  medBtn.onclick = function() {
    alert("medium");
  };
  
  var easyBtn = document.createElement("button")
  easyBtn.innerText = "Easy"
  easyBtn.onclick = function() {
    alert("easy");
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
