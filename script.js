// Query selectors
const body = document.body;
const canvas = document.querySelector(".canvas");

// Global variables
let SCORE = 0;
const SPEED = 4;
const ROWS = 10;
const COLUMNS = 10;
let key = null;
let x = null;
let y = null;
let coordinates = [
  [5, 5],
  [5, 6],
  [5, 7],
  [5, 8],
  [5, 9],
];
let food = [[7, 3]];
// Bugs
// 1. It's possible to go the opposite way
// 2. Game does not end when the snake bite itself

// Helper functions
// Draw black tiles on coordinates given
function draw(coordinates, color) {
  // If coordinate is one and only one coordinate
  if (
    typeof coordinates[0] === "number" &&
    typeof coordinates[1] === "number"
  ) {
    const square = document.querySelector(
      `.x${coordinates[0]}.y${coordinates[1]}`
    );
    return (square.style.backgroundColor = color);
  }

  coordinates.forEach((coordinate) => {
    const square = document.querySelector(
      `.x${coordinate[0]}.y${coordinate[1]}`
    );
    square.style.backgroundColor = color;
  });
}

function spawnFood() {
  while (true) {
    food.unshift([
      Math.floor(Math.random() * COLUMNS + 1),
      Math.floor(Math.random() * ROWS + 1),
    ]);

    if (
      !coordinates.some(
        (coordinate) =>
          coordinate[0] === food[0][0] && coordinate[1] === food[0][1]
      )
    ) {
      draw(food[0], "red");
      break;
    }
  }
}

// Make canvas
for (let i = 1; i <= ROWS; i++) {
  for (let j = 1; j <= COLUMNS; j++) {
    canvas.innerHTML += `<div class="square x${j} y${i}"></div>`;
  }
}

draw(food[0], "red");

// Draw loop
draw(coordinates, "green");
setInterval(() => {
  if (coordinates[0][0] === food[0][0] && coordinates[0][1] === food[0][1]) {
    spawnFood();
    coordinates.unshift(coordinates[0]);
  }
  switch (key) {
    case "ArrowRight":
      // Erase
      draw(coordinates, "white");

      x = coordinates[coordinates.length - 1][0];
      y = coordinates[coordinates.length - 1][1];

      if (x >= COLUMNS) {
        x = 0;
      }

      coordinates.push([x + 1, y]);
      coordinates.shift();

      return draw(coordinates, "green");

    case "ArrowDown":
      // Erase
      draw(coordinates, "white");

      x = coordinates[coordinates.length - 1][0];
      y = coordinates[coordinates.length - 1][1];

      if (y >= ROWS) {
        y = 0;
      }

      coordinates.push([x, y + 1]);
      coordinates.shift();

      return draw(coordinates, "green");

    case "ArrowLeft":
      // Erase
      draw(coordinates, "white");

      x = coordinates[coordinates.length - 1][0];
      y = coordinates[coordinates.length - 1][1];

      if (x <= 1) {
        x = COLUMNS + 1;
      }

      coordinates.push([x - 1, y]);
      coordinates.shift();

      return draw(coordinates, "green");

    case "ArrowUp":
      // Erase
      draw(coordinates, "white");

      x = coordinates[coordinates.length - 1][0];
      y = coordinates[coordinates.length - 1][1];

      if (y <= 1) {
        y = ROWS + 1;
      }

      coordinates.push([x, y - 1]);
      coordinates.shift();

      return draw(coordinates, "green");
  }
}, 1000 / SPEED);

// Event listeners
body.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    if (key === null) {
      return (key = event.key);
    }
    if (
      (key.endsWith("Up") && event.key.endsWith("Down")) ||
      (key.endsWith("Down") && event.key.endsWith("Up")) ||
      (key.endsWith("Left") && event.key.endsWith("Right")) ||
      (key.endsWith("Right") && event.key.endsWith("Left"))
    ) {
      return;
    }
    key = event.key;
  }
});
