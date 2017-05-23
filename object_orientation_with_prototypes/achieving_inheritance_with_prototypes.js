function Person(){}
Person.prototype.dance = function(){};

function Ninja(){} Ninja.prototype = new Person();

const ninja = new Ninja();

if(ninja instanceof Ninja){
    console.log("ninja receives functionality from the Ninja prototype");
}

if(ninja instanceof Person){
	console.log("... and the Person prototype");
}

if(ninja instanceof Object){
	console.log("... and the Object prototype");
}

if(typeof ninja.dance === "function"){
	console.log("... and can dance!");}
