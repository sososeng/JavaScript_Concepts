var ninjaFunction = function() {}; //Assigns a new function to a variable

var ninjaFunction = [];
ninjaArray.push(function(){}); //Adds a new function to an array

var ninja = {};
ninja.data = function(){}; //Assigns a new function as a property of another object

function call(ninjaFunction){ //A newly created function passed as an argument to a function
     ninjaFunction();
   }
   call(function(){});


  function returnNewNinjaFunction() { // Returns a new function
     return function(){};
}


var ninjaFunction = function(){}; // Adds a new property to a function
ninjaFunction.name = "Hanzo";