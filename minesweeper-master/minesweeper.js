document.addEventListener('DOMContentLoaded', startGame)

var board = { cells: [] }
var lives = 3

function startGame () {
  initDifficulty()
  initLives()
  initBoard(4, 4, 4)
}

function initDifficulty () {
  createDifficultyButton("Hard", 6, 6, 9)
  createDifficultyButton("Medium", 5, 5, 6)
  createDifficultyButton("Easy", 4, 4, 4)
}

function initLives() {
  var livesNode = document.getElementById('lives')
  livesNode.innerHTML = "Lives remaining: " + lives
}

function createDifficultyButton(name, rows, cols, numOfMines) {
  var button = document.createElement("button")
  button.innerText = name
  button.onclick = function() {
    lives = 3
    initLives()
    initBoard(rows, cols, numOfMines)
  };
  var difficultyNode = document.getElementById('difficulty')
  difficultyNode.appendChild(button)
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
