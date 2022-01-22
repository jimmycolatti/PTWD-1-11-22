// 1. Turn string to number

let price1 = '30.14xxx';
let price2 = '45';

let cleanPrice = parseFloat(price1)

console.log(Number(cleanPrice))
console.log(Number(price2))

// 2. Given the number as string, remove comma and add dot

let num = '2,45';
let newNum = num.replace(',', '.');

console.log(newNum)

// 3. Turn number to string

let price3 = 55;
let text = price3.toString()

console.log(text)

// 4. Write if-else or switch that will console.log() message if someone is eligible to drink, and send them warning if they are not eligible to drink

let age = 20;

if (age < 21) {
  console.log('You are not eligible to drink')
} else if (age >= 21) {
  console.log('You are eligible to drink!')
} else {
  console.log('Please enter your age.')
}

// // ternary operator
// age < 21 ? console.log('You are not eligible to drink') : console.log('You are eligible to drink!')

// 5. Find js method that will help you to get rid of the white space around the string

let weirdString = '   this string has some white space around    ';

let cleanString = weirdString.trim()

console.log(cleanString)

// 6. Create two variables with your first name and last name, make the first letters capitalized and concatenate them

let firstName = 'jimmy'
let lastName = 'colatti'

let fullName = firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + lastName.slice(1)

console.log(fullName)

// 7. Using the new Date().getDay() method you can get the numerical representation of a current day in the week.


// The rule is that number 0 represents Sunday, number 1 represents Monday and so on till number 6 that represents Saturday. Using the given expression as an argument in the switch statement, output in the console which day is today. Ex. of return from new Date().getDay() is 1, you should see in the console It's Monday. To get you started, you can use this resource.

let today = new Date().getDay();

switch (today) {
  case 0:
    console.log('It\'s Sunday')
    break;
  case 1:
    console.log('It\'s Monday')
    break;
  case 2:
    console.log('It\'s Tueday')
    break;
  case 3:
    console.log('It\'s Wednesday')
    break;
  case 4:
    console.log('It\'s Thursday')
    break;
  case 5:
    console.log('It\'s Friday')
    break;
  case 6:
    console.log('It\'s Saturday')
    break;
  default:
    console.log('Input is not valid.')
}