// exercise 1: Capitalize each element of the array - the whole word:

const fruits = ['pineapple', 'orange', 'mango'];

const newFruits = fruits.map((el) => {
  return el.toUpperCase();
});

console.log(newFruits);

console.log('-----------------------');

// exercise 2: Capitalize the first letter of every city. Bonus: if the city has 2 or more words in the name, capitalize the first letter of each word.

const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'sao paulo',
  'lisbon',
  'mexico city',
  'paris',
];

const newCities = cities.map((el) => {
  const newCity = el[0].toUpperCase() + el.slice(1);

  return newCity;
});

console.log(newCities);
