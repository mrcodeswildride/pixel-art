let squares = document.getElementsByClassName(`square`)
let clearButton = document.getElementById(`clearButton`)
let faceButton = document.getElementById(`faceButton`)

let face = [11, 12, 17, 18, 21, 22, 27, 28, 44, 45, 54, 55, 61, 68, 72, 77, 83, 84, 85, 86]

for (let square of squares) {
  square.addEventListener(`click`, toggleSquare)
}

clearButton.addEventListener(`click`, clearGrid)
faceButton.addEventListener(`click`, drawFace)

function toggleSquare() {
  if (this.classList.contains(`selected`) == false) {
    this.classList.add(`selected`)
  }
  else {
    this.classList.remove(`selected`)
  }
}

function clearGrid() {
  for (let square of squares) {
    square.classList.remove(`selected`)
  }
}

function drawFace() {
  clearGrid()

  for (let i of face) {
    squares[i].classList.add(`selected`)
  }
}