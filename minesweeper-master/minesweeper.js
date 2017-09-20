document.addEventListener('DOMContentLoaded', startGame)

var board = { cells: [] }
var lives = 3
var difficulty = "Easy"

function startGame () {
  initDifficulty()
  initStatus()
  initBoard(4, 4, 4)
}

function initDifficulty () {
  createDifficultyButton("Hard", 6, 6, 9)
  createDifficultyButton("Medium", 5, 5, 6)
  createDifficultyButton("Easy", 4, 4, 4)
}

function initStatus() {
  var livesNode = document.getElementById('status')
  livesNode.innerHTML = "Difficulty: " + difficulty + " Lives remaining: " + lives
}

function createDifficultyButton(name, rows, cols, numOfMines) {
  var button = document.createElement("button")
  button.innerText = name
  button.onclick = function() {
    lives = 3
	difficulty = name
    initStatus()
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
