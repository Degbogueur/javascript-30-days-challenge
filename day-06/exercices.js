//1
const fruits = ["banana", "apple", "mango", "orange", "pineapple"];
console.log(`The first fruit is ${fruits[0]}`);
console.log(`The last fruit fruit ${fruits[4]}`);
// console.log(`The last fruit fruit ${fruits[fruits.length - 1]}`);

//2
fruits[2] = "watermelon";

//3
fruits.push("strawberry");
console.log(fruits);

//4
fruits.splice(0, 1);
// fruits.shift();
console.log(fruits);