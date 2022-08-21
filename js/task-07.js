const inputEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

textEl.style.fontSize = '55px';

inputEl.addEventListener('input', e => {
  const size = inputEl.value;
  //   console.log(size);

  textEl.style.fontSize = size + 'px';
});
