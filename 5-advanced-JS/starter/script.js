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

/*// primitives
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
*/

// functions. ->// an array with calcuated ages 
// function saccepting functions as inputs.

var years =[1990 , 1965, 1937, 2005, 1998];

// acts liek a machine to chun out the age results.
function arrayCalc (arr, fn){
    //  epmpty array to loop through.
    var arrRes = [];
    // starts from 0: as long as i is less than arr.lenghth: increment ++ every loop.
    for ( var i = 0; i < arr.length;
        i++) {
            // inserts an element at the end of the array
            // fn() uses the function below as a callback and claculates whats being
            // pushed onto the new arrRes array. PRETTY COOL!
            arrRes.push(fn(arr[i]));
        }
        // returns that aray with all the calculated ages.
        return arrRes;
}

// call back function fn -> meaning we will call teh function into teh function above 
// later. in the arrRes.push(fnarr[i]).
function calculateAge(el){
    return 2019 -el;
}

const isFulllAge=(el)=>{
    // are ages older than 18 
    return el >= 18;
}

// max heart rate function 
const maxHeartRate =(el)=> {

    if (el >= 18 && el <= 81){
             // rounds to the closest integer.
    // numbers are the max heart rate formula
    return Math.round (206.9 - (0.67 * el));
    } else {
        return -1;
    }
   
}

// uses calculateAge as a call back function for the fn() function in arrayCalc().
var ages = arrayCalc(years, calculateAge);

// function return an array if ages are older than 18. COOL!
var fullAges = arrayCalc(ages,isFulllAge);

// var for maxHeartrate.
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

//  Functions returning functions
//  funstions in javascript are first class functions because they are objects.

const interviewQuestion=(job)=> {
    if (job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what youur UX design is?');
        }
    } else if ( job === 'teacher'){
        return function(name) {
            console.log(name = 'What subject do you teach ' +  name + '?');
        } 
    } else {
        return function(name){
            cosnole.log('Hello' + name + 'what do you do?');
        } 
    }

}

// can write one generic function above and run diffrent functions from it
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

// have a more specific fuction with this one.
teacherQuestion('john');
designerQuestion('emily');

// 0quickway of doing the two steps from above.
// looks a bit different but works.
interviewQuestion('teacher')('mark');