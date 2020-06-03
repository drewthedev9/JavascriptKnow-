
// var -> scoped to the function.
/*function sayHello() {
    for (var i = 0; i < 5; i ++){
        console.log(i);
    }

    // i is still accessable from out side the block of 
    // code.
    console.log(i);
}

sayHello();*/

//  will produce an error.
// let -> scoped to the block of code.
// use let when you need to reassign variable.
function sayHello() {
    for (let i = 0; i < 5; i ++){
        console.log(i);
    }
    
}

sayHello();

// const -> block only defined in the block they are defined.
// variables cannot be reassigned.

/*// OBJECTS ////////////
// collections of key value pairs.
const person = {
    // property 
    name: 'marsh',
    // method = function inside of an object.
    walk: function(){

    },
    // Es6 way of writing a method.
    talk(){

    }
};


// accessing mebemers of objects.
// .notation to acces mebers of the objects.
person.talk();
// brackets method.
//  here we are reassiging name -> john
person['name'] = 'john';*/

// THIS in javascript
//  this returns a refernce to the current object.
const person = {
    name: "Mosh",
    walk (){
        console.log(this);
    }
}

person.walk();

// Arrow functions

// const square = (number) => {
//     return number * number;
// }

// can do if only has one line to return.
const square = (number) =>  number * number;
console.log(square(5));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: true},
];

// functin to display the active jobs.
// const activeJobs = jobs.filter(function(job){
//     return job.isActive;
// })

// arrow function way.
const activeJobs = jobs.filter(job =>job.isActive
);

// Array "map" method.

const colors = ['red', 'green', 'blue'];
// arrow function with a template literal
// map method creates a new array for each element.
const items = colors.map( color => `<Li>{$color}</Li>`);

// object destructuring.

const address = {
    street: '',
    city: '',
    country : '',
}

// OLD WAY.
const street = address.street;
const city = address.city;
const country = address.country;

// destructured way.
// :st kis setting an alias for the steet property.
// const {street : st, city, country} = address;

// Spread operator
// combining arrays

const first =[1,2,3];
const second = [4,5,6];

// const combined = first.concat(second);
// ... represnt the spread operator. adding 'a' and 'b'.
const combined = [...first, 'a',  ...second,'b'];
// cloning an array or object,

const clone ={...first};

const display =()=>{
    console.log(clone);
}

display();

// making a new object with the constructor above acting as blueorint.
const person = new Person('Mosh');

// Inheritance

// classes need a capital letter.
class Person {

    // constructor is a special method reserved key word as well.
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("Walk");
    }
}

// new operator imoprtant for making a new instance of that class.
const person = new Person('Mosh');


// whenever we add a constructor of it's parent class we need to add a 
// super to reference itparent class this case the Teacher from Person.
class Teacher extends Person {
constructor(name, degree){
    // initializes the name property.
    super(name);
    this.degree = degree;
}

    teach(){
        cosnole.log("teach");
    }
}

const teacher = new Teacher("Mosh","Msc");
