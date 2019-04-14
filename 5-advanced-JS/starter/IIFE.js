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