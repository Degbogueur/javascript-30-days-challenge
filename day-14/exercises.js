// 1
function factorial(num) {
    return num === 0 ? 1 : num * factorial(num - 1);
}
console.log(`0! = ${factorial(0)}`);
console.log(`3! = ${factorial(3)}`);
console.log(`5! = ${factorial(5)}`);

// 2
function fibonacci(nth) {
    if (nth === 0) {
        return 0;
    } else if (nth === 1) {
        return 1;
    }
    return fibonacci(nth - 1) + fibonacci(nth - 2);
}
console.log(fibonacci(9));
console.log(fibonacci(10));

// 3
function countdown(num) {
    console.log(num);    
    if (num === 0) return;
    
    countdown(num - 1);
}
countdown(10);

// 4
const nums = [23, 11, 6, 14];
function sum(nums, i = 0) {
    if (i === nums.length) {
        return 0;
    }
    let num = nums[i];
    return num + sum(nums, i + 1);
}
console.log(sum(nums));