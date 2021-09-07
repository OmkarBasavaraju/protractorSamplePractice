// class Emp{
// let name;
// let position;

// constructor(name,position){
//     this.name = name;
//     this.position = position;
// }
// Onboarding(name,position){
//     this.name = name;
//     this.position = position;
// }
// setup(a,b){
//     return a+b
// }

// let c = new Emp();
// c.setup



// }
// let onboard = new Emp("omkar","automation tester");
// // onboard.Onboarding("omkar","automation tester")
// // onboard.Onboarding("omkar1","automation tester")
//     console.log(onboard.name);
//     console.log(onboard.position);

// constructor function
// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// let person1 = new Person();
// let person2 = new Person();

// // adding new property to constructor function
// Person.prototype.gender = 'Male';

// console.log(person1.gender); // Male
// console.log(person2.gender); // Male

// const z = {
//     x : "test",
//     y : "testOne"
// }

// z.v = "tes"




// console.log(z.v)

// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// Person.prototype.x = "col"

// let g = new Person();

// console.log(g.x);


// constructor function
// function Person() {
//     this.name = 'John'
// }

// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype = { age: 50 }

// // creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age); // 20

// function Person() {
//     this.name = 'John'
// }

// // adding property 
// Person.prototype.name = 'Peter';
// Person.prototype.age = 23

// const person1 = new Person();

// console.log(person1.name); // John
// console.log(person1.age); // 23

// let arr = ['h', 'e'];
// arr.name = 'John';
// console.log(arr[2])

// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello`);
    }
}

// inheriting parent class
class Student extends Person {

    constructor(name) {
    
        console.log("Creating student class");
        
        // call the super class constructor and pass in the name parameter
        // super(name);
    }

}

let student1 = new Student('Jack');
student1.greet();