var ninja = {};
ninja.name = "Yoshi";
ninja.weapon = "kusarigama";

Object.defineProperty(ninja, "sneaky", {
  configurable: false,
  enumerable: false,
  value: true,
  writable: true
});

if("sneaky" in ninja){
	console.log("We can access the new property");
}

for(let prop in ninja){
  if(prop !== undefined){
  	console.log("An enumerated property: " + prop);
  }
}