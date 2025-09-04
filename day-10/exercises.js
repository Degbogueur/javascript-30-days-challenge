const sentence = "JavaScript is the best language!";
const words = sentence.replace('!', '').split(' ');

console.log(`The sentence contains ${words.length} words.`);

let longest = '';
for (let i = 0; i < words.length; i++) {
    if (longest.length < words[i].length) {
        longest = words[i];
    }
}
console.log(`The longest word is "${longest}"`);

const wordsCount = {};
for (let i = 0; i < words.length; i++) {
    wordsCount[words[i]] = (wordsCount[words[i]] || 0) + 1;
}

console.log(wordsCount);