// 1
const colorString = "red,green,blue";
const colorArray = colorString.split(',');
console.log(colorArray);

// 2
const word = "hello";
let reverseWord = '';
for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
}
console.log(reverseWord);

// 3
const words = ["I", "love", "JS"];
console.log(words.join(' '));

// 4
const letter = 'a';
const text = 'JavaScript';
let count = 0;
for (let i = 0; i < text.length; i++) {
    count += text[i] == letter ? 1 : 0;
}
console.log(`The letter "${letter}" appears in "${text}" ${count} times.`);