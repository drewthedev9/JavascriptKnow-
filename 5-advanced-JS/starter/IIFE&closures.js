// immediatley invoked function expression
var budgetController = (function(){

    x = 23;
    
    const add =(a)=>{
     return x + a;
    }
    
    return {
        publicTest: function(b){
            return add(b);
        }
    }
    
    })();
    
    // es6 function with IIFE. These controllers dont
    //  know about eachother. SEPERATION of concerns.
    const UIController = (() =>{
    
    // some code
    
    })();
    
    
    const controller = ((budgetCtrl, UIctrl) =>{
    
        // this module can now use the other modules code.
        // but it is still private.
       var z = budgetCtrl.publicTest(5);
    
    //    create another public method.
    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
    
    // use in console controller.anotherPublic(z)
        
    })(budgetController, UIController);












    /////////////////////////example///////
    // testig example call the function
    // budgetController.testing() after inputing intp UI

    // Budget controller;
var budgetController = (function(){
    // constructor toinstatntiate lots of objects.
    // private as well because they are in the IIFE.
    var Expense =function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    // another fucntion constructor.
    var Income = function(id,description,value){
        this.id = id;
        this.descritpion = description;
        this.value = value;
    }

    var data ={
        allItems: {
            exp: [],
            inc: []
        },
        totals:{
            exp:0,
            inc:0
        }
    }

    return {
        // onject with a functio in it = mehtod.
        // to add exp or inc onto a new data structure.
        addItem : function(type, des, val){
            var newItem;

            //  Create new ID 

            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id;
            } else {
                ID = 0;
            }
           

            //  Create new item based on 'inc' or 'exp' type;
            if (type === 'exp'){
                newItem  = new Expense (ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }
           
            // pushes the type in the if else stat
            //  onto the areay above. ( data structure)
            data.allItems[type].push(newItem);

            // return the new element.
            return newItem;
        },

        testing:function(){
            console.log(data);
        } 
    };

})();



// UI controller.
const UIController = (() =>{

    // object to centralize changing the classtypes,
    // we do it here in the object instead of everywhere in the
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    };

return {

   
     getInput: function() {
         return {
             type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp\
            //  gets the value of of the input html elemnet.
             description:document.querySelector(DOMstrings.inputDescription).value,
             value :document.querySelector(DOMstrings.inputValue).value
         };
    },
    // expose DOMstrings to the public.
    getDOMstrings: function(){
        return DOMstrings;
    }
 }

})();

// GLOBAL APP controller /w IIFE.
var controller = (function(budgetCtrl, UIctrl){

    var setUpEventListeners = function(){
        // can now access the DOM strings
        var DOM = UIctrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
    
        document.addEventListener('keypress', function(event){
    // keycode for the enter button, which is for older browsers.
    if(event.keyCode === 13|| event.which === 13){
       
        }

    });
}

   

// To avoid dry.
var ctrlAddItem = function(){
    var input, newItem;

    // 1. get the filed input data
    var input = UIctrl.getInput();
    

    // 2. add the item to the budget calculator
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. add the item to the UI

    // 4. calculate the budget.

    // 5. Display teh budget on th UI.

};
    
return {
    init: function(){
        console.log('Application has started');
        setUpEventListeners();
    }
};
  
    
})(budgetController, UIController);

controller.init();
