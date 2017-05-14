const firstConst = "samurai"; //Defines a const variable and verifies that the value was assigned
if(firstConst === "samurai"){
	console.log("firstConst is a samurai");
}
try{
  firstConst = "ninja";
  console.log("Shouldn't be here");   //Attempting to assign a new value to a const variable throws an exception.
} catch(e){
  console.log("An exception has occurred");
}

if(firstConst === "samurai"){
    console.log("firstConst is still a samurai!");
}

const secondConst = {}; //Creates a new const variable and assigns a new object to it

secondConst.weapon = "wakizashi"; //We can’t assign a completely new object to the secondConst variable, but there’s nothing stopping us from modifying the one we already have.
if(secondConst.weapon === "wakizashi"){
    console.log("We can add new properties");
}

const thirdConst = []; //The exact same thing holds for arrays.
if(thirdConst.length === 0) {
	console.log("No items in our array");
}

thirdConst.push("Yoshi");
if(thirdConst.length === 1){
	console.log("The array has changed");
}
