const GLOBAL_NINJA = "Yoshi";


function reportActivity(){
  const functionActivity = "jumping";
  for(let i = 1; i < 3; i++) {
    let forMessage = GLOBAL_NINJA + " " + functionActivity;
    if(forMessage === "Yoshi jumping"){
    	console.log("Yoshi is jumping within the for block");
    }
    if(i){
    	console.log("Current loop counter:" + i);
    }
}

if(typeof i === "undefined" && typeof forMessage === "undefined"){
	console.log("Loop variables not accessible outside the loop");
}
}

reportActivity();
if(typeof functionActivity === "undefined" && typeof i === "undefined" && typeof forMessage === "undefined"){
	console.log("We cannot see function variables outside of a function");
}
