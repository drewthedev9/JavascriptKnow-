// crucial and advanced.
// CLOSURES.


// GENERIC function
function retirement (retirementAge){
    var a = ' years left until retirement';
    // annonymous function.
    return function(yearOfBirth){
var age = 2019 -yearOfBirth;
console.log ((retirementAge - age) + a);

    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
// howmany years left for US citiznes that are born in1990 because
//  they retire at age 66.
// calling th declred US function above.
// More specific function
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


// short way of doing above.
// retirement(1990)(66);

// because of closures cn use three different types of functions from one
// over and over again.

// rewrite jobinterview fucntion as closure

// const interviewQuestion=(job)=> {
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what youur UX design is?');
//         }
//     } else if ( job === 'teacher'){
//         return function(name) {
//             console.log(name = 'What subject do you teach ' +  name + '?');
//         } 
//     } else {
//         return function(name){
//             cosnole.log('Hello' + name + 'what do you do?');
//         } 
//     }

// }

// Closure function

function interviewQuestion(job){
    // design speech
    a = ' can you tell please what UX design is?';
    b = ' what subject do you teach?';
    c = ' what do you do?';
    // annonymous functionn with naame parameter.
    return function(name){
        if (job === 'designer'){
            console.log( name + a);
        } else if (job === 'teacher'){
            console.log(name + b);
        }else {
            console.log(name + c );
        }
    }
};

var teaecherQuestion = interviewQuestion('designer');
teaecherQuestion('john');

interviewQuestion('teacher')('mike');

