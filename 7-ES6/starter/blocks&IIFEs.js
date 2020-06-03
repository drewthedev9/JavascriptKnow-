// Block & iFFES

// ES6 way

{
    const a = 1;
    let b = 2;
    // var is not block cscoped it is function scoped
    // so you will see it.
    var c = 3;

}
// Not accesable
console.log( a + b);


// not accesable
//  ES5 
(function(){

})();

console.log(c);