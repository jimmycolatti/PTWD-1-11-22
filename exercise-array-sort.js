const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

// Exercise 1: Using the array (arrOfStrings), sort an array from shortest string to the longest.

const sortedByLength = [...arrOfStrings].sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  } else {
    return 0;
  }
});

console.log(sortedByLength);

console.log('------- ------- ------- ------- ------- ');

// Exercise 2: Using the same arr (arrOfStrings), sort its elements alphabetically.

const sortedAlphabetically = [...arrOfStrings].sort((a, b) => {
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
});

console.log(sortedAlphabetically);

console.log('------- ------- ------- ------- ------- ');

// Exercise 3: Sort the objects in the array by age, in descending order.

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 },
];

const sortByAge = [...people]
  .sort((a, b) => {
    if (a.age > b.age) {
      return -1;
    } else if (a.age < b.age) {
      return 1;
    } else {
      return 0;
    }
  })
  .map((el) => `${el.name} is ${el.age} years old.`);

console.log(sortByAge);
