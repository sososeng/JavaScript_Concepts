function Ninja(){}
const ninja = new Ninja();
const ninja2 = new ninja.constructor();

if(ninja2 instanceof Ninja){
	console.log("It's a Ninja!");
}


if(ninja !== ninja2){
	console.log("But not the same Ninja!");
}
