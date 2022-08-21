const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const allIngredientsEl = document.querySelector('ul#ingredients');

const ingredient = ingredients.map(element => {
  const newElement = document.createElement('li');
  newElement.textContent = element;
  newElement.classList.add('item');
  return newElement;
});

allIngredientsEl.append(...ingredient);
