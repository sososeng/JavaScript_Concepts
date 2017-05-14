if(typeof fun === "function"){
	console.log("fun is a function even though its definition isn't reached yet!");
}
if(typeof myFunExp === "undefined"){
	console.log("But we cannot access function expressions");
}
if(typeof myArrow === "undefined"){
	console.log("Nor arrow functions");
}

function fun(){}

var myFunExpr = function(){}; 
var myArrow = (x) => x;