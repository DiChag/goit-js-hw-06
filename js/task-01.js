const categoriresEl = document.querySelector('ul#categories');
const itemEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${itemEl.length}`);
console.log('\n');

const ul = document.querySelectorAll('#categories>li');
ul.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
  console.log('\n');
});
