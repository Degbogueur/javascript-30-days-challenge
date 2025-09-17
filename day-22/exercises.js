// 1
function doTwice(callback) {
    callback();
    callback();
}
const greet = function() {
    console.log(`Hello!`);
}
doTwice(greet);

// 2
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => console.log(`[${index}] ==> ${fruit}`));

// 3
const nums = [1, 2, 3, 4, 5];
function increment(num) {
    return num + 1;
}
function applyToEach(arr, callback) {
    return arr.map(callback);
}

const doubled = applyToEach(nums, n => n * 2);
const incremented = applyToEach(nums, increment);
console.log(doubled);
console.log(incremented);

// 4
setTimeout(() => {
    console.log('Hello after 2 seconds')
}, 2000);