// 1
console.log('\n==== Exercise 1 ====');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2
console.log('\n==== Exercise 2 ====');
for (let i = 0; i <= 12; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 3
console.log('\n==== Exercise 3 ====');
let i = 1;
let sum = 0;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(`The sum of numbers from 1 to 100 is ${sum}`);

// 4
console.log('\n==== Exercise 4 ====');
let num = 1;
do {
    if (num % 2 === 0) {
        console.log(`The number ${num} is even.`);
    }
    num++;
} while (num <= 20);