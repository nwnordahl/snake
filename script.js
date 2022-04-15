const canvas = document.querySelector(".canvas");

// Global variables
const ROWS = 10;
const COLUMNS = 10;

// Make canvas
for (let i = 1; i <= ROWS; i++) {
  for (let j = 1; j <= COLUMNS; j++) {
    canvas.innerHTML += `<div class="square x${j} y${i}"></div>`;
  }
}

const coordinates = [
  [5, 6],
  [5, 5],
  [5, 4],
  [5, 3],
];

function draw(coordinates) {
  coordinates.forEach((coordinate) => {
    const square = document.querySelector(
      `.x${coordinate[0]}.y${coordinate[1]}`
    );
    square.style.backgroundColor = "black";
  });
}

draw(coordinates);
