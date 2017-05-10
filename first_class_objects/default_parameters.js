function performAction(ninja, action){
     action = typeof action === "undefined" ? "skulking" : action; //If the action parameter is undefined, we use a default value, skulking, and if it’s defined, we keep the passed-in value.
     return ninja + " " + action;
}

if(performAction("Fuma") === "Fuma skulking"){      //We haven’t passed in a second argument, the value of the action parameter; after executing the first function, the body statement will default to skulking.
	console.log("The default value is used for Fuma");
} 

if(performAction("Yoshi") === "Yoshi skulking"){
	console.log("The default value is used for Yoshi");
},
      
if(performAction("Hattori") === "Hattori skulking"){
	console.log("The default value is used for Hattori");
},
      

if(performAction("Yagyu", "sneaking") === "Yagyu sneaking"){  //Pass a string as the value of the action parameter; that value will be used throughout the function body.
	console.log("Yagyu can do whatever he pleases, even sneak!");
},
         