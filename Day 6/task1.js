class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
}

let person1 = new Person('praveen', 19, 'praveen@gmail.com');
let person2 = new Person('arun',18,'arun@gmail.com');

person1.getDetails();
person2.getDetails();
