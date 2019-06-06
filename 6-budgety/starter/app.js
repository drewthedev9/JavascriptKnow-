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
        this.description = description;
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'

    };

return {

    // Function when someone hits teh input key.
    // this function acts liekthe control center.
     getInput: function() {
         return {
             type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp\
            //  gets the value of of the input html elemnet.
             description:document.querySelector(DOMstrings.inputDescription).value,
             value :document.querySelector(DOMstrings.inputValue).value
         };
    },

    addListItem: function (obj, type){
        var html, newHtml, element;
        // creat HTML with place holder tags

        if (type === 'inc'){
            element = DOMstrings.incomeContainer;

            html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else if (type ==='exp'){
            element = DOMstrings.expensesContainer;
            html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"></div><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        
        // replace the place holder text witj some actual data.
        // replace searches for a strinfg then replaces taht sring with 
        // the data in the method.
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace ('%value%', obj.value);
        
        // Insert the HTML into the DOM.
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

    },
    // expose DOMstrings to the public.
    getDOMstrings: function(){
        return DOMstrings;
    }
 }

})();

// GLOBAL APP controller /w IIFE.
var controller = (function(budgetCtrl, UICtrl){

    var setUpEventListeners = function(){
        // can now access the DOM strings
        var DOM = UICtrl.getDOMstrings();

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
    var input = UICtrl.getInput();
    

    // 2. add the item to the budget calculator
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. add the item to the UI
    UICtrl.addListItem(newItem, input.type);

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
