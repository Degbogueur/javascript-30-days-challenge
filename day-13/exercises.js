// 1
console.log('===== Exercise 1 =====');
function greet() {
    const name = 'Julia';
    console.log(`Hello, ${name}!`);
}
greet();
// console.log(name); // name is not accessible

// 2
console.log('\n===== Exercise 2 =====');
function makeCounter() {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    }
}
const counter = makeCounter();
counter();
counter();
counter();

// 3
console.log('\n===== Exercise 3 =====');
const nums = [0, 1, 2];
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
console.log(`Value of i: ${i}`);

for (let j = 0; j < nums.length; j++) {
    console.log(nums[j]);
}
// console.log(`Value of j: ${j}`); // j is not accessible

for (const num of nums) {
    console.log(num);
}
// console.log(`Value of num: ${num}`); // num is not accessible

// 4
console.log('\n===== Exercise 4 =====');
function printMessage(message) {
    return () => message;
}
const secretMessage = printMessage('This message is secret.');
console.log(secretMessage());
console.log(secretMessage());
console.log(secretMessage());