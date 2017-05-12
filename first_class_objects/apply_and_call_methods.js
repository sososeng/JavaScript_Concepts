function juggle() {
  var result = 0;
  for (var n = 0; n < arguments.length; n++) { //The function “juggles” the arguments and puts the result onto whatever object is the function context.
    result += arguments[n];
  }
  this.result = result;
}

//These objects are initially empty and will serve as our test subjects.
var ninja1 = {};
var ninja2 = {};
juggle.apply(ninja1,[1,2,3,4]); //Uses the apply method, passing ninja1 and an array of arguments
juggle.call(ninja2, 5,6,7,8); //Uses the call method, passing ninja2 and a list of arguments


//The tests show how the juggle result is placed on the objects passed to the methods.
if(ninja1.result === 10){
	console.log("juggled via apply");
}
	 
if(ninja2.result === 26){
 	console.log("juggled via call");
 }
