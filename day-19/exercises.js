// 1
class Animal {
    speak() {
        return "This animal makes noise.";
    }
}
const animal = new Animal();
console.log(animal.speak());

// 2
class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}
const dog = new Dog();
console.log(dog.speak());

// 3
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name} and I'm ${this.age} years old`;
    }
}

// 4
const john = new Person('John Doe', 25);
const alan = new Person('Alan Turing', 34);
console.log(john.introduce());
console.log(alan.introduce());