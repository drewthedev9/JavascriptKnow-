
// note cant use arro functions when making constructors.
const Car = function(model, year, engine){
    this.model = model;
    this.year = year;
    this.engine = engine;

}

var Evo = new Car ('lancer', 2006, '2.5l MIVEC');

console.log(Evo);