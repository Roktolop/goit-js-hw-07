function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(`.widget`);
const button = document.querySelector(`.change-color`)
const color = document.querySelector(`.color`);
button.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}