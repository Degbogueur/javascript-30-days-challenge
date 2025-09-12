// 1
let a = 4;
let b = -3;
[a, b] = [b, a];
console.log(a, b);

// 2
const person = {
    name: 'John Doe',
    age: 26
};
const { name, age } = person;
console.log(`${name} is ${age} years old.`);

// 3
const numsOne = [1,2,3];
const numsTwo = [4,5,6];
const result = [...numsOne, ...numsTwo];
console.log(result);

// 4
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 3));
console.log(sum(1, 3, 0, 13, 11, -2));