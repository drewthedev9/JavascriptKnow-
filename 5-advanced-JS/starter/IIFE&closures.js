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