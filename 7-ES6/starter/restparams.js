// /////////
// Lecture: Rest Paramemters
// Allw us to pass a number of arbitrary arguments into a function.
//  and use thm in that function.
// reayes an array with and is used with multiple arguments.

// Es5

/*
// arguments is a special variable that you have 
// access to in all functions like the this leyword
// produces and array LIKE object.
function isFullAges5(){
    //  console .log(arguments)
    // turns the arguments variable into an array,
     var argsArr = Array.protoype.slice.call(arguments);
    //  cur being the argument that is being used when the 
    //  funciton is called
     argsArr.forEach(function(cur){
        console.log((2019 - cur) >= 18);
     })
}

// isFullAges5(1990,1999,1965);



// Es6
// rest params...years when called with the function
// below turns the arguments into an array. that you can access
//  no need to turn it into an array like above.
// can put in multiple arguments into a fucntion.
function isFullAges6(...years){
    // can look at array here uncomment.
    // console.log(years)
    years.forEach(cur =>console.log((2016 - cur ) >= 18));
}

isFullAges6(1990,1999,1965);*/

// another example.
// Es5


// arguments is a special variable that you have 
// access to in all functions like the this leyword
// produces and array LIKE object.
function isFullAges5(limit){
     console .log(arguments);
    // turns the arguments variable into an array.
    // slice cuts at the part of an array or the 1 in the argument.
     var argsArr = Array.prototype.slice.call(arguments,1);
     
    //  cur being the argument that is being used when the 
    //  funciton is called
   
     argsArr.forEach(function(cur){
        console.log((2019 - cur) >= limit);
     })
}

isFullAges5(21,1990,1999,1965);



// Es6
// rest params...years when called with the function
// below turns the arguments into an array. that you can access
//  no need to turn it into an array like above.
// can put in multiple arguments into a fucntion.
function isFullAges6(limit,...years){
    // can look at array here uncomment.
    // console.log(years)
    years.forEach(cur =>console.log((2016 - cur ) >= limit));
}

// isFullAges6(1990,1999,1965);