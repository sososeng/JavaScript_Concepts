function Ninja() {
	  this.skulk = function () {//Defines a constructor function named Ninja
	   return true;
	  };
	  return 1; //The constructor returns a specific primitive value, the number 1.
}

if(Ninja() === 1){ //The function is called as a function and its return value is 1, as expected.
  console.log("Return value honored when not called as a constructor");
}

var ninja = new Ninja(); //The function is called as a constructor via the new operator.

//Tests verify that the return value of 1 is ignored, and that a new, initialized object has been returned from new.

if(typeof ninja === "object"){
  console.log("Object returned when called as a constructor");
}
if(typeof ninja.skulk === "function"){
  console.log("ninja object has a skulk method");
}
