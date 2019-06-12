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
    };

    var calculateTotal = function(type){
        var sum = 0;
        // loops through adds total.
        data.allItems[type].forEach(function(cur){
            sum = sum + cur.value;

        })
        // calcu;ates sum
        data.totals[type] = sum;
    };
    

    var data ={
        allItems: {
            exp: [],
            inc: []
        },
        totals:{
            exp:0,
            inc:0
        },
        budget:0,
        percentage:-1
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

        calculateBudget: function (){

            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            // claculate the budget: income -expenses.
            data.budget = data.totals.inc - data.totals.exp;

            // calcuate the percentage of income that we suggest.
            if (data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                // to avoid not baing able to divide by 0; vid  lecture 86 time 19:30;
                data.percentage = -1;
            }
            
        
        }, 

        // function that returns budget total.
        getBudget: function(){
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        // calls the annonymus function for testing
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
            //  parsefloat turns the value that will be inpt into a int not a string(by default).
             value: parseFloat( document.querySelector(DOMstrings.inputValue).value)
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

    // delete the input fileds method.
    clearFields: function(){
        var fields, fieldsArr;

       fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + 
        DOMstrings.inputValue);

        // slice mehrod on the array fileds using teh call function
        // fields will be a list so it needs call.
        fieldsArr = Array.prototype.slice.call(fields);

        // call back function. loops through all the array and returns them
        // to empty string
        fieldsArr.forEach(function(current,index,array){
            current.value = "";
        });

        // gets teh first element then puts the mouse back to inputdescripttion 
        // element.
        fieldsArr[0].focus();


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

var updateBudget = function (){
    //1. calculate the budget
    budgetCtrl.calculateBudget();
    //2.return the budget 
    var budget = budgetCtrl.getBudget();
    //3.
    console.log(budget);

};
   

// To avoid dry.
var ctrlAddItem = function(){
    var input, newItem;

    // 1. get the filed input data
    var input = UICtrl.getInput();
    
    if(input.description !== "" && !isNaN(input.value) && input.value > 0){

    // 2. add the item to the budget calculator
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. add the item to the UI
    UICtrl.addListItem(newItem, input.type);

    // 4.clear thr fields;
    UICtrl.clearFields();
    // 5. calculate and update budegt.
    updateBudget();
    }
   

};
    
return {
    init: function(){
        console.log('Application has started');
        setUpEventListeners();
    }
};
  
    
})(budgetController, UIController);

controller.init();
