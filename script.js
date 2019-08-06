var face = [11, 12, 17, 18, 21, 22, 27, 28, 44, 45, 54, 55, 61, 68, 72, 77, 83, 84, 85, 86];

var squares = document.querySelectorAll(".square");
var drawFaceButton = document.getElementById("drawFaceButton");
var clearGridButton = document.getElementById("clearGridButton");

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", clickSquare);
}

drawFaceButton.addEventListener("click", drawFace);
clearGridButton.addEventListener("click", clearGrid);

function clickSquare() {
    this.classList.toggle("selected");
}

function drawFace() {
    clearGrid();

    for (var i = 0; i < face.length; i++) {
        var faceSquare = face[i];
        squares[faceSquare].classList.add("selected");
    }
}

function clearGrid() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.remove("selected");
    }
}
