// Object operators
const person = {
  name: 'musa',
  age: 30
};

// we can use dot notation!
person.name = 'mus';
// dot notation is best used 

// we acn also use [] bracket notation
let selection = 'name';
person[selection] = 'john';

console.log(person.name)



// Array operators
let selectColors = ['red', 'yellow'];
selectColors[3] = 'green';
console.log(selectColors.length);



// Functions / performing task function
// function greet  (name, lastName) {
//   console.log('hello'  +  name + ' ' + lastName)
// }
// greet('musa', 'farid')

function colors (tea, lastColor) {
  console.log('hello '   + tea + '  ' + lastColor);
}
colors('red',  'black');

//calculating task function
function square(number){
  return number * number
}
square(2);
console.log(square(2));



// Operators
let x = 10;
let y = 3;
console.log(x + y)// additional operator
console.timeLog(x - y)// subtraction
console.log(x * y)// multiplication
console.log(x / y)// division
console.log(x % y)// reminder
console.log(x ** y)// power of

//Increment or increase operator
console.log(++x);// inreases 1 to x

// Decrement or decrease
console.log(--x);// decreases 1 from x

// Assignment operators

let m = 20;
 
m = m +5;
m += 5; // This expression is the same as m + 5

let s = 1;

//Relational operators
console.log(s < 1);// lesss than
console.log(s > 1);
console.log(s <= 1);// less or equal to
console.log(s >= 1);

//Equality 
console.log(s === 1);
console.log(s !== 1);// not equal to 1

// Strict Equality operators
console.log(1 === 1)// will come out true
console.log( '1' === 1);// will come out false because this is strict

// Lose operators
console.log(1 == 1);
console.log('1' == 1);// will come out true because it does not care

// Ternary operators
// Example,
// If a customer has more than 100 points,
// they are 'gold ' customers, otherwise,
// they are 'silevr' customers

let points = 100;
let type  = points > 100 ? 'gold' : 'silver';
console.log(type);
