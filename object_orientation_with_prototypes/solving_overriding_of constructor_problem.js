function Person(){}
Person.prototype.dance = function(){};
function Ninja(){} Ninja.prototype = new Person();

Object.defineProperty(Ninja.prototype, "constructor", { //We define a new non- enumerable constructor property pointing back to Ninja.
  enumerable: false,
  value: Ninja,
  writable: true
});

var ninja = new Ninja();

if(ninja.constructor === Ninja){ //We’ve reestablished the connection.
    console.log("Connection from ninja instances to Ninja constructorreestablished!");
}

for(let prop in Ninja.prototype){
	if(prop === "dance"){ //We haven’t added any enumerable properties to the Ninja.prototype.
		console.log("The only enumerable property is dance!");
	}
}