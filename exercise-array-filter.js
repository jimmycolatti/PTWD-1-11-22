// exercise 1: Given an array of numbers, filter out the numbers that are not even, and are less than 100.

const numbers = [1, 60, 112, 123, 100, 99, 73];

const newArr = numbers.filter((num) => {
  if (num % 2 !== 0 && num < 100) {
    return num;
  }
});

console.log('New Array: ', newArr);

// Exercise 2: From the given array of people, get the people who are allowed to consume alcoholic beverages (based on the US law). Bonus: Get just their names, we don't need their age.

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 },
];

const peopleOfAge = people
  .filter((person) => {
    if (person.age >= 21) {
      return person;
    }
  })
  .map((person) => person.name);

console.log(peopleOfAge);
