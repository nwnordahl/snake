const canvas = document.querySelector(".canvas");

const ROWS = 10;
const COLUMNS = 10;

for (let i = 1; i <= ROWS; i++) {
  for (let j = 1; j <= COLUMNS; j++) {
    canvas.innerHTML += `<div class="square"></div>`;
  }
}
