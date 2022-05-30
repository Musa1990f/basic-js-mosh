// // Object operators
// const person = {
//   name: 'musa',
//   age: 30
// };

// // we can use dot notation!
// person.name = 'mus';
// // dot notation is best used 

// // we acn also use [] bracket notation
// let selection = 'name';
// person[selection] = 'john';

// console.log(person.name)



// // Array operators
// let selectColors = ['red', 'yellow'];
// selectColors[3] = 'green';
// console.log(selectColors.length);



// // Functions / performing task function
// // function greet  (name, lastName) {
// //   console.log('hello'  +  name + ' ' + lastName)
// // }
// // greet('musa', 'farid')

// function colors (tea, lastColor) {
//   console.log('hello '   + tea + '  ' + lastColor);
// }
// colors('red',  'black');

// //calculating task function
// function square(number){
//   return number * number
// }
// square(2);
// console.log(square(2));



// // Operators
// let x = 10;
// let y = 3;
// console.log(x + y)// additional operator
// console.timeLog(x - y)// subtraction
// console.log(x * y)// multiplication
// console.log(x / y)// division
// console.log(x % y)// reminder
// console.log(x ** y)// power of

// //Increment or increase operator
// console.log(++x);// inreases 1 to x

// // Decrement or decrease
// console.log(--x);// decreases 1 from x

// // Assignment operators

// let m = 20;
 
// m = m +5;
// m += 5; // This expression is the same as m + 5

// let s = 1;

// //Relational operators
// console.log(s < 1);// lesss than
// console.log(s > 1);
// console.log(s <= 1);// less or equal to
// console.log(s >= 1);

// //Equality 
// console.log(s === 1);
// console.log(s !== 1);// not equal to 1

// // Strict Equality operators
// console.log(1 === 1)// will come out true
// console.log( '1' === 1);// will come out false because this is strict

// // Lose operators
// console.log(1 == 1);
// console.log('1' == 1);// will come out true because it does not care

// // Ternary operators
// // Example,
// // If a customer has more than 100 points,
// // they are 'gold ' customers, otherwise,
// // they are 'silevr' customers

// let points = 100;
// let type  = points > 100 ? 'gold' : 'silver';
// console.log(type);


// // Logical Operator
// // The and (&&)operator will always be true if both the expressions are true
 
// let  highIcome = true;
// let goodCreditScore = true;
// let eligibleForLoans = highIcome && goodCreditScore;
// console.log('Eligible', eligibleForLoans);

// // The or( || ) operator always returns true expressions even if theres a false expr

// const  lowIcome = true;
// const badCreditScore = false;
// const allowedForLoans = highIcome || goodCreditScore;
// console.log('Eligible', eligibleForLoans);

// // The Not operator (!)
// let applicationRefused = !eligibleForLoans;
// console.log('Application Refused', applicationRefused);

// // logical operators with non boolean
// // Examples
// // falsy(false)
// // undefined
// //0
// // false
// // ''
// // NaN
 
// let userColor = 'red';
// let defaultColor = 'blue';
// let currenColor = userColor || defaultColor;
// console.log(currenColor);

// // Bitwise operators 

// // read, write, Execute
// // 00000100
// // 00000010
// // 00000001
// // Here we use binary Converter to change it to decimals

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | writePermission;

// let message = (myPermission & readPermission) ? 'yes': 'no';
// console.log(message)



// //if .. else statements
 
// let hour = 11;

// if (hour <= 6 && hour > 12) {
//   console.log('Good morning');
// }
// else if (hour <= 12 && hour < 6) {
//   console.log('good afternoon');
// }
// else {
//   console.log('Good evening');
// }

// let time = 20;

// if (time <= 6 && time > 12) {
//   console.log('Breakfast');
// }
// else if (time >= 6 && time > 18) {
//   console.log('lunchtime');
// }
// else {
//   console.log('dinner time')
// }




// //switch statements

// const shoppingList = 'Sugar';

// switch (shoppingList) {
//   case 'Sugar':
//     console.log('its sold out');
//     break;
//     case 'bread':
//       console.log('bread is $49');
//       break;
//       default:
//         console.log('shop closed')
// }

// loops!

// for loop
// for (let i = 0; i < 8; i++){
//   console.log('hello world', i)
// };

// // Or
// for(let i = 8; i <= 0; i++){
//   if(i % 2 !== 0)console.log(i)
// }

// for (let i = 0; i <= 7; i-- ){
//   if(i % 2 !== 0)console.log(i);
// }

// while loop

// let i = 0;
// while (i <= 8){
//   if(i % 2 !== 0)console.log(i)
//   i++
// }


// do ... while loop

// let i = 9;
// do {
//   if(i % 2 !==0)console.log(i)
//   i++
// } while(i <= 5);


// let i = 9;
// do{
//   if(i % 2 !== 0)console.log(i)
//   i++
// }while( i <= 5);

// // for...in loops

// const person = {
//   name: 'musa',
//   age: 30
// };
// for(let key in person)
// console.log(key, person[key]);

// const colors = ['red','green','blue'];
// for(let index in colors)
// console.log (index, colors);

// const robot = {
//   name : 'james', 
//   age : 45
// };
// for(let key in robot)
// console.log(key,robot[key]);

// const mango = ['yellow','black','pink','brown'];
// for(let index in mango)
// console.log(index,mango); 


// // for...of
// const colors = ['red','green','blue'];
// for (color of colors)
// console.log(color)

// // break and continue
// let x = 0;
// while(x <= 12){
//   // 
//   if(x % 2 === 0){
//     x++;
//     continue;
//   }
//   console.log(x);
//   x++;
// }

// const userInput = {
//   name: "Musa",
//   age : 47,
//   email:"me@gmail.com",
//   city:"Tokyo",
//   ishost: false
// }

// const zoom = [
//   {
//     name: "Musa",
//     age : 47,
//     email:"me@gmail.com",
//     city:"Tokyo",
//     ishost: false
//   },
//   {
//     name: "Farouk",
//     age : 47,
//     email:"me@gmail.com",
//     city:"Tokyo",
//     ishost: true
//   }
// ]

// console.log()


// // functions

// let number = max(3, 3);
// console.log(number);
// function(a, b){
//   return (a > b) ? a : b;
// }