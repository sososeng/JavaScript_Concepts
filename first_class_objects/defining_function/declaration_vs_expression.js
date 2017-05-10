function myFunctionDeclaration(){ //Standalone function declaration
  function innerFunction() {} //Inner function declaration
}

var myFunc = function(){}; //Function expression as a part of a variable declaration assignment
myFunc(function(){ //Function expression as an argument of a function call 
  return function(){}; //Function expression as a function return value
});

(function namedFunctionExpression () { })(); //Named function expression as part of a function call that will be immediately invoked



//Function expressions that will be immediately invoked, as arguments to unary operators
+function(){}();
-function(){}();
!function(){}();
~function(){}();