// Bind , call, and apply

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    // methofd for john to present stuff.
    presentation : function(style,timeOfDay){
        if (style === 'formal'){
            console.log('good '  + timeOfDay + ' ladies and gentle men! I\'m',
             this.name + ', I\'m a ' + 
             this.job + ' and I\'m ' +
             this.age  + 'years old');
        } else if (style === 'friendly'){
            console.log( 'Hey! whats\'s up? I\'m ' + 'I\'m a ' + 
            this.job + ' and I\'m ' +
            this.age  + ' years old. Have a nice ' + timeOfDay 
            );
        }
    }
}

var emily = {
    name: 'emily',
    age: 35,
    job : 'designer'
};

//  call function john variable,presentaion method

john.presentation ('formal', 'morning');

// call method on the function above.
// call method allows for the 'this' method to be set as the
// first variable in this case, emily object -<> so the method above will run 
// the emily object.
john.presentation.call(emily, 'friendly', 'aftrernoon');
// apply method

// john.presentation.apply(emily,['friendly,'afternoon']);

// bind method  generates copy of the function
// so we can store it somewhere.
// can preset some arguments and store in a variable.
// ALSO KNOWN AS CURRYING.

var johnfriendly = john.presentation.bind(john,'friendly');

johnfriendly('morning');
johnfriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('aftrernoon');

// functions. ->// an array with calcuated ages 
// functions accepting functions as arguments.

var years =[1990 , 1965, 1937, 2005, 1998];
// set functions as parameters.
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

// call bac function fn -> meaning we will call teh function into teh function above 
// later. in the arrRes.push(fnarr[i]).
function calculateAge(el){
    return 2019 -el;
}

const isFullAge=(limit ,el)=>{
    // are ages older than 18 
    return el >= limit;
}


var ages = arrayCalc(years, calculateAge);
// age limt beming for japan is 20
// using bind and currying to preset
//  and pass funtion in fullJapan
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);