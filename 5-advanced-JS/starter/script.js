/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


//  Constructor -> acts a blue print. to create new instances 
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// inspecting objects with the console
//  Can use in the console objoect.hasOenProperty('property')
// for example john.hasOwnProperty('job') if so console will prit true
// if the object has a property called john.
// instanceOf = checks object is and instance of a constructor
// ex. john instanceof Person = true.
// If you want to check the info of something in console use console.info(oibject)
// you could have an array = x = [1,2,3,4,];
// so use console.info(x) -> will give you indfo about the object.
*/

// Onject.create method. Another way for inheritance.
/*var personProto = {
    calculateAge: function (){
        console.log (2019 - yearOfBirth);
    }

}

// builds an object direct from the argument you pass into the onject.
var john = Object.create(personProto);
// hard way to fill in object
john.name ='john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value:'jane'}, 
    yearOfBirth: {value:1969},
    job: {value: 'designer'}
})
*/

// primitives vs objects.
//  undefined , null , boolean , string and number .
//  Everything else is an object.

// primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects 
var obj1 = {
    name:'john',
    age: 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age)
console.log(obj2.age)

// Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'lisbon'
}

function change(a,b){
    a=38;
    b.city ='san fransisco';

} 

console.log(age); //27
console.log(obj.city); //san fransisco
//  the var age valuw wont change but the obj.city proprty will,
// it only makes areference to the object ist creating a new one.
// check in lesson 64 - Primitives and objects. 3rd book mark
