const inputEl = document.querySelector('input#name-input');
const userName = document.querySelector('span#name-output');

inputEl.addEventListener('input', () =>
  inputEl.value !== ''
    ? (userName.textContent = inputEl.value)
    : (userName.textContent = 'Anonymous')
);
