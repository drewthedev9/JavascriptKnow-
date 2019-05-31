// Budget controller;
var budgetController = (function(){



})();

// UI controller.
const UIController = (() =>{

    // object to centralize changing the classtypes,
    // we do it here in the object instead of everywhere in the
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'

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

    // can now access the DOM strings
var DOM = UIctrl.getDOMstrings();

// To avoid dry.
var ctrlAddItem = function(){
    // 1. get the filed input data
    var input = UIctrl.getInput();
    console.log(input);

    // 2. add the item to the budget calculator

    // 3. add the item to the UI

    // 4. calculate the budget.

    // 5. Display teh budget on th UI.

};
    
document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
    
document.addEventListener('keypress', function(event){
    // keycode for the enter button, which is for older browsers.
    if(event.keyCode === 13|| event.which === 13){
       
    }

})
  
    
})(budgetController, UIController);
