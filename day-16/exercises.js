// 1
const person = {
    name: 'John Doe',
    age: 33,
    city: 'Dublin'
};
console.log(person);
console.log(person.name, person.age, person.city);

// 2
person.email = 'johndoe@mail.com';
console.log(person);

// 3
delete person.city;
console.log(person);

// 4
for (let key in person) {
    console.log(`"${key}: ${person[key]}"`);
}