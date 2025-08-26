// 1
console.log('\n==== Exercise 1 ====')
const a = 10;
const b = 5;
console.log(`Addition: ${a} + ${b} = ${a + b}`);
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`Multiplication: ${a} x ${b} = ${a * b}`);
console.log(`Division: ${a} ÷ ${b} = ${a / b}`);

// 2
console.log('\n==== Exercise 2 ====')
const firstNumber = 3;
const secondNumber = 3;
let result = '';
if (firstNumber > secondNumber) {
    result = 'greater than';
} else if (firstNumber < secondNumber) {
    result = 'smaller than';
} else if (firstNumber === secondNumber) {
    result = 'equal to';
}
console.log(`The first number (${firstNumber}) is ${result} the second (${secondNumber}).`);

// 3
console.log('\n==== Exercise 3 ====')
const age = 17;
const hasCard = true;
const paidFee = true;
const isBanned = false;
const canAccess = (age >= 18) && (hasCard || paidFee) && !isBanned;
console.log(`This person ${canAccess ? 'is allowed' : 'is not allowed'} to enter the club.`);

// 4
console.log('\n==== Exercise 4 ====')
const firstItem = 20.5;
const secondItem = 9.99;
const budget = 25;
const totalCost = firstItem + secondItem;

if (totalCost <= budget) {
    console.log('You can afford both items.');
} else {
    console.log('Not enough budget.');
}