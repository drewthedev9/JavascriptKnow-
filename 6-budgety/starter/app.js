// Budget controller;
var budgetController = (function(){
    // constructor toinstatntiate lots of objects.
    // private as well because they are in the IIFE.
    var Expense =function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    //creating a methid off the prototype of the expense constructor
    // this method calculates it.
    Expense.prototype. calcPercentage = function(totalIncome){
        if (totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);

        }else{
            this.percentage = -1;
        }
    };
    // this function returns the calculated percentage.
    Expense.prototype.getPercentage = function() {
        return this.percentage;
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
        // object with a functio in it = mehtod.
        // to add exp or inc onto a new data structure.
        addItem : function(type, des, val){
            var newItem, ID;

            // [1 2 3 4], next ID = 6;
            // [1 2 4 6 8], next ID = 9
            // ID = last ID + 1 

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

        // method for deleting and Item.
        deleteItem: function(type,id){
            var ids, index;
            // [1 2 4 6 8]
            // need to delete the index 
            // example delete 6 has index of 3.
            // index = 3
            // using the method map which recives a fucntion.
            // map actuallly returns a bradnew array.
            // In this case maps over all the array and creates a new one with 
            // all the current id's.
            ids = data.allItems[type].map(function(current){
                return current.id;
            });

            // find gthe index of the ID's in the array.
            index = ids.indexOf(id);
            if (index !== -1) {
                // splice removes objects.
                // arguments for splice ( what to dleete, howmany) in this case
                // itts teh indexes and only one item.
                data.allItems[type].splice(index, 1);
            } 

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
        // function for calculating the percentages.
        calulatePercentages: function(){
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function(){
            // map returns something and stores it in a variable while
            // forEach fdoes not.
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            })
            return allPerc;
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
    // we do it here in the object instead of everywhere,
    // allof the clas namesin the HTML to be accesed.
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel : '.budget__title--month'

    };

    var formatNumber = function(num,type){
        var numSplit, int, dec, type;
        // absoloute removes the sign of the number.
        num = Math.abs(num);
        // to fixed turns it also into a string.
        num = num.toFixed(2);
        // splits the number on the . and into an array.
        numSplit = num.split('.')

        int = numSplit[0];

       
        if(int.length > 3){
            // int overrides this as we only want the excecution result.
            // substring(substr) is getting the first number then stopping
            // at the second.
            // then it starts at psoiton 1 and reds 3 numbers.
             int = int.substr(0,int.length - 3) + ',' + int.substr(int.length-3, 3)// input 2310, output 2,310.
        }

        dec = numSplit[1];

        

        return (type === 'exp' ? sign = '-' :sign = '+') + '' + int + '.' + dec;
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
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        
        // replace the place holder text witj some actual data.
        // replace searches for a strinfg then replaces taht sring with 
        // the data in the method.
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace ('%value%',formatNumber(obj.value,type));
        
        // Insert the HTML into the DOM.
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

    },

    deleteListItem: function(selectorID) {
         // can only remove a child element in javascript.
        // traverse dom then select the 
        var el = document.getElementById(selectorID);
        el.parentNode.removeChild(el);
       
       
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

    displayBudget: function(obj){
        var type;
        obj.budget > 0 ? type = 'inc' :type =  'exp';
        // obj.budegt being the budget object above.in the getBudget function.
        document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget,type);
        document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
        document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
       

        if(obj.percentage > 0){
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
        } else {
            document.querySelector(DOMstrings.percentageLabel).textContent = ('----');
        }
    },

    displayPercentages: function(percentages) {

        var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

        var nodeListForEach = function(list, callback){
            for (var i = 0; i < list.length; i++){
                callback(list[i],i);
            }
        };

        nodeListForEach(fields, function(current, index){

            if (percentages[index] > 0){
                current.textContent = percentages[index] + '%';
            } else {
                current.textContent = '---';
            }
            
        });

    },

    displayMonth: function(){
        var now, year;
        var now = new Date();
        //var christmas = new Date(2016, 11, 25);

        year = now.getFullYear
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

    // selects he Dom element and adds click function with the function we make ctrlDeleteItem.
    document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);
};

var updateBudget = function (){
    //1. calculate the budget
    budgetCtrl.calculateBudget();
    //2.return the budget 
    var budget = budgetCtrl.getBudget();
    //3.
   UICtrl.displayBudget(budget);

};

var updatePercentages = function(){
    //1.calaculate the percentages
    budgetCtrl.calulatePercentages();
    //2. Read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();
    //3. update the UI with thenew percentages.
    console.log(percentages);
    UICtrl.displayPercentages(percentages);
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
        //6. calculate an update percentages.
        updatePercentages();
    }
   

};
    
var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID ;
    // traversing the DOM to get the parent element and do bubbling.
   itemID = (event.target.parentNode.parentNode.parentNode.parentNode.id);

   if (itemID){

     //inc-1 ["inc" "1"]
    //  split makes a an array with strings from the inputs. (vid 90 time 15:00).
     splitID  = itemID.split('-');
     type = splitID[0];
    // CRUCIAL, convert the string from the split array into a nd integer.
    ID = parseInt(splitID[1]);

     // delete the item from the data structure.
        budgetCtrl.deleteItem(type, ID);
     // 2. delete the item form the user interface.
     UICtrl.deleteListItem(itemID);
    //  3. Update and show the new budget.
      updateBudget();
   }
};

return {
    // runs the entire program.
    init: function(){
        console.log('Application has started');
        // resets all the values once restarting app to 0.
        UICtrl.displayBudget({
            budget: 0,
            totalInc: 0,
            totalExp: 0,
            percentage: -1
        });
        setUpEventListeners();
    }
};


    
})(budgetController, UIController);

controller.init();
