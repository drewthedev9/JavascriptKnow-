// Budget controller;
var budgetController = (function(){
    // constructor toinstatntiate lots of objects.
    // private as well because they are in the IIFE.
    var Expense =function(id,desription,value){
        this.id = id;
        this.descritpion = description;
        this.value = value;
    }
    // another fucntion constructor.
    var Income = function(id,desription,value){
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
        addItem : function(type, des, val){
            var newItem;

            //  Create new ID 


            ID = data.allItems[type][data.allItems[type].length -1].id;

            //  Create new item based on 'inc' or 'exp' type;
            if (type === 'exp'){
                newItem  = new Expense (ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }
           
            // pushes the type in the if else stat
            //  onto the areay above. ( data structure)
            data.allItems[type].push(newitem);
            return new Item;
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
    // 1. get the filed input data
    var input = UIctrl.getInput();
    console.log(input);

    // 2. add the item to the budget calculator

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
