// IIFE used for data pricvacy

// function game (){
//     var score = Math.random() + 10;
//     console.log(score >= 5);
// }

// game();

// heres the IIFE statement.
( function (){
    var score = Math.random() + 10;
    console.log(score >= 5);
}) ();

( function (goodLuck){
    var score = Math.random() + 10;
    console.log(score >= 5 -
    goodLuck);
}) (5);

// great IIFE example. 
// section 6 implementing teh module.

// immediatley invoked function expression, 
// close off functins from public.
var budgetController = (function(){

    x = 23;
    // add is private and wont be able to be called from
    // console.
    // for example using in console budgetController.add(a) wont work
    // its private.
    const add =(a)=>{
     x + a;
    }
    
    // Public test however will be
    // calls add function
    // budgetController.pusblicTest(b) will work its not
    // private buy the IIFE.
    return {
        publicTest: function(b){
            console.log(add(b));
        }
    }
    
    })();
    