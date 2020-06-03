// /////////////
//  Lecture: Default Parameters.
// When we want one or more parameters to be preset

// es5 
// function costructor.
/*function smithPerson(firstName, yearOfBirth, lastName,
     nationality){

        lastName === undefined ? lastName = 'smith' :
        lastname = lastName;
        nationality === undefined ? nationality = 'american'
        : natinality = nationality;
        // references the objects  giving access to the paramsof 
        // the function
         this.firstName = firstName;
         this.lastName = lastName;
         this.yearOfBirth = yearOfBirth;
         this. nationality = nationality;
     }*/


// Es6
//  IN es6 you can just specify defalut parameters in the function.
function smithPerson (firstName, yearOfBirth, lastName ='smith',
nationality = 'american'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this. nationality = nationality;
}
     var john = new smithPerson("john", 1990);
    //  over wrote the values
     var emily = new smithPerson('Emily', 1983 , 'Diaz', 'spanish')