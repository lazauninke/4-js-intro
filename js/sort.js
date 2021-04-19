// ... spread/rest operator

const list = [10, 2, 8, 4, 6, 6, 159, 123, 44, 67];
const randomNumbers = [-10, 10, -8, 0, 8, -4, 4];

const texts = ['as', 'labas', 'ryta', 'tu', 'suo', 'miau'];

const sortedList = [...list].sort((a, b) => b - a);
console.log(list);
console.log(sortedList);

const sortedTexts = [...texts].sort().reverse();

console.log(texts);
console.log(sortedTexts);