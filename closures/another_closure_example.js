var outerValue = "samurai";
var later;
function outerFunction(){
  var innerValue = "ninja"; //Declares a value inside the function. This variable’s scope is limited to the function and can’t be accessed from outside the function.
  function innerFunction(){
  //Declares an inner function within the outerFunction. innerValue is in scope when we create this function.
  if(outerValue === "samurai"){
   console.log("I can see the samurai.");
  }
  if(innerValue === "ninja") {
  	console.log("I can see the ninja.");
  }
  }
  
  later = innerFunction;
}

outerFunction();
later();