var values = [0, 3, 2, 5, 7, 4, 8, 1];
values.sort(function(value1,value2){ // function declaration
  return value1 – value2;
});


var values = [0, 3, 2, 5, 7, 4, 8, 1]; 
//param => expression
values.sort((value1,value2) => value1 – value2); // arrow function



var greet = name => "Greetings " + name; //Defines an arrow function 



 var anotherGreet = function(name){ //Defines a function expression
  return "Greetings " + name;
};


var greet = name => { //// arrow function
  var helloString = 'Greetings ';
  return helloString + name;
};
