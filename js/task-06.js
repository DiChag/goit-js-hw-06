const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const input = event.currentTarget;
  const correctLength = Number(input.dataset.length);

  if (input.value.length === correctLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    return;
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
