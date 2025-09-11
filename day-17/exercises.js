// 1
const car = {
    brand: 'Honda',
    model: 'Civic',
    drive() {
        return "Vroom!";
    }
};
console.log(car);
console.log(car.drive());

// 2
const student = {
    name: 'John Doe',
    grades: {
        math: 'A',
        science: 'A',
        english: 'A'
    }
};
console.log(student.grades.math);

// 3
const user = {
    firstName: 'Teddy',
    lastName: 'Bear',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(user.getFullName());

// 4
const account = {
    number: 'C-001-234-08XX',
    balance: 7500.935,
    getDetails() {
        return `The account ${this.number} balance is $ ${this.balance.toFixed(2)}`;
    }
}
console.log(account.getDetails());