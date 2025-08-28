// 1
console.log('\n==== Exercise 1 ====');
const a = -7;
if (a > 0) {
    console.log(`The number ${a} is positive.`);
} else if (a < 0) {
    console.log(`The number ${a} is negative.`);
} else if (a === 0) {
    console.log(`The number ${a} is zero.`);
}

// 2
console.log('\n==== Exercise 2 ====');
const age = 17.5;
const canVote = age >= 18;
console.log(`This person ${canVote ? 'is old enough' : 'is not old enough'} to vote.`);

// 3
console.log('\n==== Exercise 3 ====');
const day = 7;
let dayOfWeek;
switch (day) {
    case 1:
        dayOfWeek = "Monday";
        break;
    case 2:
        dayOfWeek = "Tuesday";
        break;
    case 3:
        dayOfWeek = "Wednesday";
        break;
    case 4:
        dayOfWeek = "Thursday";
        break;
    case 5:
        dayOfWeek = "Friday";
        break;
    case 6:
        dayOfWeek = "Saturday";
        break;
    case 7:
        dayOfWeek = "Sunday";
        break;
    default:
        dayOfWeek = "Error";
        break;
};
console.log(`The day is: ${dayOfWeek}`);

// 4
console.log('\n==== Exercise 4 ====');
const num = 16;
const isEven = num % 2 === 0;
console.log(`The number ${num} is ${isEven ? 'even' : 'odd'}.`);