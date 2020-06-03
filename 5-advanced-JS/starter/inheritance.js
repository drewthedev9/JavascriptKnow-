
var john = {
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

// puts calculateAge into the prototype property of person
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


// Onject.create method. Another way for inheritance.
var personProto = {
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


// practice inheritance

// note cant use arroW functions when making constructors.
const Car = function(model, year, engine){
    this.model = model;
    this.year = year;
    this.engine = engine;

}

// NEW MAKES A OBJECT WITHT THE FOLLOWING INPUTS.
var Evo = new Car ('lancer', 2006, '2.5l MIVEC');

console.log(Evo);