const body = document.body;
const canvas = document.querySelector(".canvas");

// Global variables
const ROWS = 10;
const COLUMNS = 10;
let key = null;
let x = null;
let y = null;

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
  switch (key) {
    case "ArrowRight":
      erase(coordinates);

      x = coordinates[coordinates.length - 1][0];
      y = coordinates[coordinates.length - 1][1];

      if (x >= 10) {
        x = 0;
      }

      coordinates.push([x + 1, y]);
      coordinates.shift();

      return draw(coordinates);

    case "ArrowDown":
      erase(coordinates);

      x = coordinates[coordinates.length - 1][0];
      y = coordinates[coordinates.length - 1][1];

      if (y >= 10) {
        y = 0;
      }

      coordinates.push([x, y + 1]);
      coordinates.shift();

      return draw(coordinates);

    case "ArrowLeft":
      erase(coordinates);

      x = coordinates[coordinates.length - 1][0];
      y = coordinates[coordinates.length - 1][1];

      if (x <= 1) {
        x = 11;
      }

      coordinates.push([x - 1, y]);
      coordinates.shift();

      return draw(coordinates);

    case "ArrowUp":
      erase(coordinates);

      x = coordinates[coordinates.length - 1][0];
      y = coordinates[coordinates.length - 1][1];

      if (y <= 1) {
        y = 11;
      }

      coordinates.push([x, y - 1]);
      coordinates.shift();

      return draw(coordinates);
  }
}, 300);

body.addEventListener("keydown", (event) => {
  key = event.key;
});
