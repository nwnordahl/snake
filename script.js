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

let coordinates = [
  [5, 5],
  [5, 6],
  [5, 7],
];

// Draw black tiles on coordinates given
function draw(coordinates) {
  coordinates.forEach((coordinate) => {
    const square = document.querySelector(
      `.x${coordinate[0]}.y${coordinate[1]}`
    );
    square.style.backgroundColor = "black";
  });
}

// Remove black tiles on coordinates given
function erase(coordinates) {
  coordinates.forEach((coordinate) => {
    const square = document.querySelector(
      `.x${coordinate[0]}.y${coordinate[1]}`
    );
    square.style.backgroundColor = "white";
  });
}

// Draw loop
draw(coordinates);
setInterval(() => {
  erase(coordinates);
  coordinates = coordinates.map((coordinate) => {
    let x = coordinate[0];
    let y = coordinate[1];

    if (y <= 1) {
      y = 11;
    }

    return [x, y - 1];
  });
  console.log(coordinates);
  draw(coordinates);
}, 500);
