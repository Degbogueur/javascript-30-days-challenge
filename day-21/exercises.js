// 1
let nums = [1, 2, 3, 4, 5];
const numSquared = nums.map(num => num ** 2);
console.log(numSquared);

// 2
nums = [10, 15, 20, 25, 30];
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 3
nums = [5, 10, 15];
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 4
nums = [2, 4, 6, 8];
const numsDoubled = nums.filter(num => num > 5).map(num => num * 2);
console.log(numsDoubled);