// strings and string methods

// 3 ways to create strings:
// 1. single quotes ('')
// 2. double quotes ("")
// 3. with backticket (``)

let name = 'jimmy';
console.log(name); // jimmy

console.log(`Hello ${name.toUpperCase()}!`); // Hello JIMMY!

// .toUpperCase() and other methods - have to be followed with parenthesis ()

console.log(name.length); // 5

// .length -> property is NEVER followed with parenthesis

//console.log(String);

console.log(`${name} is ${15 + 12} years old!`);

const str = 'this is our test string';

console.log('the first letter is:', str[0]); // t

console.log(`the first letter is: ${str[0]}`); // t

// check if string includes some substring or a specific character

// .includes() - returns true or false
// .indexOf() - returns the position where a specific character is found or gives -1 if it's not found

const bootcamp = 'web dev';

console.log(bootcamp.includes('web')); // true
console.log(bootcamp.includes(' web')); // false

console.log(bootcamp.indexOf('dev')); // 4
console.log(bootcamp.indexOf('hello')); // -1

// --------------------------------------------------

// how we can access a specific character in a string
// .charAt(index)

console.log(bootcamp.charAt(0)); // w
console.log(bootcamp.charAt(4)); // d

// --------------------------------------------------

// const str = 'this is our test string'

// .substring(start, end) - end is not included

let substring1 = str.substring(5, 10);
console.log(substring1); // is ou

// .slice(start, end)

let sliced1 = str.slice(-5);
console.log(sliced1); // tring - when going backwards index does not begin with 0

// --------------------------------------------------

// .startsWith() - returns true or false depending if string begins with a specific character

console.log('does a string start with "this": ', str.startsWith('this')); // true

console.log('does a string start with "hello": ', str.startsWith('hello')); // false

// . endsWith() - returns true or false depending if a string ends with some character(s)

console.log('ends with "this" :', str.endsWith('this')); // false
console.log('ends with "string" :', str.endsWith('string')); // true

let num = 3;

num += 11;

console.log(num); // 14

num = '4';

// num = Number(num) // turn string into number
// num = +num; // turn string into number

num += 11;

console.log(num); // 411
