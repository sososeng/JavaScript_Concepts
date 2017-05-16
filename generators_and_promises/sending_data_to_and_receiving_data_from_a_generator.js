function* NinjaGenerator(action) { //A generator can receive standard arguments, like any other function.

  const imposter = yield ("Hattori " + action); //The magic happens. By yielding a value, the generator returns an intermediary calculation. By calling the iterator’s next method with an argument, we send data back to the generator.

//The value sent over next becomes the value of the yielded expression, so our imposter is Hanzo.
if(imposter === "Hanzo"){
	console.log("The generator has been infiltrated");
}

yield ("Yoshi (" + imposter + ") " + action);
}


const ninjaIterator = NinjaGenerator("skulk"); //Triggers the execution of the generator and checks that we get the correct value

const result1 = ninjaIterator.next();

if(result1.value === "Hattori skulk"){
	console.log("Hattori is skulking");
}

const result2 = ninjaIterator.next("Hanzo"); //Sends data to the generator as an argument to the next method and checks whether the value was correctly transferred

if(result2.value === "Yoshi (Hanzo) skulk"){
	console.log("We have an imposter!");
}
