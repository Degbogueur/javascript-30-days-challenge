// 1
const nums = [10, 20, 30, 40];
nums.push(50);
console.log(nums);

// 2
nums.pop();
// nums.splice(nums.length - 1, 1);
console.log(nums);

// 3
const a = 20;
const includesNum = nums.includes(a);
console.log(`The array ${includesNum ? 'includes' : 'doesn\'t include'} the number ${a}.`);

// 4
const b = 30;
console.log(`The index of ${b} in the array is ${nums.indexOf(b)}.`);