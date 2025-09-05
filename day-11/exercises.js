// 1
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 5));
console.log(sum(0, -4));
console.log(sum(-2, 2));
console.log(sum(-6, -1));

// 2
function toFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}
console.log(`0°C equals ${toFahrenheit(0)}°F`);
console.log(`30°C equals ${toFahrenheit(30)}°F`);
console.log(`-10°C equals ${toFahrenheit(-10)}°F`);
// 3
function square(a) {
    return a ** 2;
    // return a * a;
    // return Math.pow(a, 2);
}
console.log(square(2));
console.log(square(-9));
console.log(square(0));

// 4
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('John'));
console.log(greet('Jane'));