//  classes
// /////////////////

// SYnttactic sugar

// ES5 
/*
var person5 = function(name, yearofBirth, job){
    { this.yearofBirth = yearofBirth;
        this.name = name;
        this.job = job;

    }
}

person5.prototype.calculateAge = function(){
    var age = new Date().getFullyear 
     - this.yearofBirth;
     console.log(age);
}

var john5 = new person5("john", 1990, "teacher");

// ES6 classes ( same thing as above).
// this fdoes hide the Object nature unlike above.

class Person6 {
    constructor (name, yearofBirth, job){
        this.name = name;
        this.yearofBirth = yearofBirth;
        this.job = job;
    }
    // method inside of a class.
    calculateAge(){
    var age = new Date().getFullyear 
     - this.yearofBirth;
     console.log(age);
    }

    static greeting(){
        console.log("Hey there");
    }
}

// creating and instance of the class

const john6 = new Person6('john', 1990, 'teacher');

// just an attached method.
person6.greeting();
*/
// subclases -> taking inheritance one step further
// //////////

// this will act as a super class.
var person5 = function(name, yearofBirth, job){
    { this.yearofBirth = yearofBirth;
        this.name = name;
        this.job = job;

    }
}

person5.prototype.calculateAge = function(){
    // getFullYear is a built in method. 
    var age = new Date().getFullYear()
     - this.yearofBirth;
     console.log(age);
}

var Athelete5 = function(name, yearOfirth, job,olympiGames,medals){
    // have to call these with call function for them to be accessed.
    // because we hve them listed above for the SUPER class.
    // this is acting like the super class function constructor.
    // explanation on the classes with sublcasses video # 115 (4min mark). 
    person5.call(this, name, yearOfirth, job)
    this.olympiGames = olympiGames;
    this.medals = medals;

}

// allows us to manually set a protype of an object
// we want the protope of the thlete and the person to become the same.
// two funciton constructors are connected and protoyoe chain should work 
// good example video Classes with subclasses 116 (5:40min).
Athelete5.prototype = Object.create(person5.prototype);

// adds medal to the althlete class off the person class.
Athelete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athelete5('John', 1990, 'swimmer', 3 ,10 );
//  all the instances of teh athlte class can inherit this method 
// because tey iherit from the person5 class.
johnAthlete5.calculateAge();
johnAthlete5.wonMedal(1);

// ES6 classes (creating a subclass).///////
// the Es6 way is much better. Just have to undestand what is happening
// under the hood.

class Person6 {
    constructor (name, yearofBirth, job){
        this.name = name;
        this.yearofBirth = yearofBirth;
        this.job = job;
    }
    // method inside of a class.
    calculateAge(){
    var age = new Date().getFullYear()
     - this.yearofBirth;
     console.log(age);
    }
 
}

// Extends from the super class in this case the person6 class
class Athlete6 extends Person6 {
    // this kinda looks like what they do in react.
    // name teh constructor of athlete6
    constructor(name, yearofBirth,job, olympicgames, medals){
        // Get them from Person 6
        super(name,yearofBirth,job);
        // add the new construcors to teh Athlete6 class.
        this.olympiGames = olympicgames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

// created a new instance from the athlete class. using ist constructors
// the new makes a new object
const johnAthlete6 = new Athlete6('john', 1990, 'swimwear', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();