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