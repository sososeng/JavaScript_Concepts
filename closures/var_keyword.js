var globalNinja = "Yoshi"; //Defines a global variable, using var

function reportActivity(){ 
  var functionActivity = "jumping";//Defines a function local variable, using var

for(var i = 1; i < 3; i++) { //Defines two variables in the for loop, using var
    var forMessage = globalNinja + " " + functionActivity; 
    //Within the for loop, we can access the block variables, function variables, and global variables— nothing surprising there.
    if(forMessage === "Yoshi jumping"){
        console.log("Yoshi is jumping within the for block");
    }
    if(i){
    	console.log("Current loop counter:" + i);
    }
}

if(i === 3 && forMessage === "Yoshi jumping") //But the variables of the for loop are also accessible outside the for loop.
    console.log("Loop variables accessible outside of the loop");
}

reportActivity();

if(typeof functionActivity === "undefined" && typeof i === "undefined" && typeof forMessage === "undefined"){ //Normally, none of the function variables are accessible outside of the function.
	console.log("We cannot see function variables outside of a function");
}
