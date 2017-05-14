if(typeof fun === "function"){
	console.log("We access the function"); 
}

var fun = 3; //Defines a variable fun and assigns a number to it 

if(typeof fun === "number"){
	console.log("Now we access the number"); 
}

function fun(){} 

if(typeof fun === "number"){
	console.log("Still a number"); 
}
