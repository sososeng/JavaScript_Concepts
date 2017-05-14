var outerValue = "ninja"; //Defines a value in global scope
function outerFunction(){
	if(outerValue === "ninja"){ //Declares a function in global scope
		console.log("I can see the ninja."); 
	}
}
outerFunction();