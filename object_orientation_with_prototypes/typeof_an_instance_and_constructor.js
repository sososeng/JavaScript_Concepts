function Ninja(){}

const ninja = new Ninja();

if(typeof ninja === "object"){
	console.log("The type of the instance is object.");
}

if(ninja instanceof Ninja){
    console.log("instanceof identifies the constructor." );
}
if(ninja.constructor === Ninja){
    console.log("The ninja object was created by the Ninja function.");
}
