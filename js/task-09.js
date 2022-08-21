function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('button.change-color');
const currentColor = document.querySelector('span.color');

changeBtn.addEventListener('click', function () {
  const randomColors = getRandomHexColor();

  document.body.style.backgroundColor = randomColors;
  currentColor.textContent = randomColors;

  console.log(`Current color: ${randomColors}`);
});
