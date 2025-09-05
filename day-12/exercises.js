// 1
const sum = function(a, b) {
    return a + b;
}
console.log(sum(2, 5));
console.log(sum(0, -4));
console.log(sum(-2, 2));
console.log(sum(-6, -1));

// 2
const greet = (name) => `Hello, ${name}!`;
console.log(greet('John'));
console.log(greet('Jane'));

// 3
const cube = (num) => num ** 3;
console.log(cube(2));
console.log(cube(-3));
console.log(cube(0));

// 4
const isEven = (num) => num % 2 === 0;
console.log(isEven(2));
console.log(isEven(25));
console.log(isEven(63));