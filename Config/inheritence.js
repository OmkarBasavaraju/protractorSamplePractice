// class Animal{

//     sound(sound){
//      this.sound = sound;
//      console.log("voice of the animal is " + this.sound)
//     }

//     functionCall(){
//         console.log("called in Animal class")
//     }
// }

// class Cat extends Animal{

//     sound(sound){
//         this.sound = sound;
//         console.log("voice of the animal is " + this.sound)
//     }

//      meoew(){
//         console.log("Calling in cat class")
//     }
    

// }

// let animal = new Cat();
// animal.sound("meow");
// animal.meoew();
// animal.functionCall();

// function abc(){
// return console.log("ds");
// }

// let a = new abc()
// console.log(a);

// let x = function(){
//     return("anpther abc")
// }
// console.log(x());


// function ac(){
//     console.log("dnhfdf")
//     let abc = function(){
//         return("test")
        
//     }
//     console.log(abc());
  
// }
// ac()
//  console.log (ac().yz);

// console.log(yz());
// const user = {
//     fisrtName: 'John',
//     lastName: 'Doe',
//     age: 29,
//     fullName: function () {
//         return `${this.fisrtName} ${this.lastName}`;
//     }
// };

// let b = new user();

//  console.log(typeof x)
//  console.log(typeof ac)
//  console.log(x);
//  ac().
//  ac.y
//  console.log("tesqt")
// console.log(user.fisrtName)


const ob = {
    name : "omkar",
    fullName : function(){
       let surname = "abc"
console.log(this.name +  "---" + surname )
    }
}

ob.fullName();


