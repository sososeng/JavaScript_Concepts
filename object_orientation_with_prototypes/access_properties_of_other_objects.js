
//Creates three objects, each with its own property
const yoshi = { skulk: true };
const hattori = { sneak: true };
const kuma = { creep: true };


//yoshi has access to only its own, skulk, property.
if("skulk" in yoshi){
	console.log("Yoshi can skulk");
}

if(!("sneak" in yoshi)){
	console.log("Yoshi cannot sneak");
}
if(!("creep" in yoshi)){
	console.log("Yoshi cannot creep");
}

Object.setPrototypeOf(yoshi, hattori); //Use the Object .setPrototypeOf method to set one object as the prototype of another object.
//By setting hattori as yoshi’s prototype, yoshi now has access to hattori’s properties.
if("sneak" in yoshi){
	console.log("Yoshi can now sneak");
}
if(!("creep" in hattori)){ //Currently, hattori can’t creep.
	console.log("Hattori cannot creep");
}

//Sets kuma as a prototype of hattori
Object.setPrototypeOf(hattori, kuma);

if("creep" in hattori){
	console.log("Hattori can now creep"); //Now hattori has access to creep.
}

if("creep" in yoshi)
	console.log("Yoshi can also creep"); //yoshi also has access to creep, through hattori.

