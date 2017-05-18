const ninjaPromise = new Promise((resolve, reject) => { //Creates a promise by calling a built-in Promise constructor and passing in a callback function with two parameters: resolve and reject
  resolve("Hattori"); //A promise is successfully resolved by calling the passed-in resolve function (and rejected by calling the reject function).
  //reject("An error resolving a promise!");
});
ninjaPromise.then(ninja => {
  if(ninja === "Hattori"){ //By using the then method on a promise, we can pass in two callbacks; the first is called if a promise is successfully resolved.
  	console.log("We were promised Hattori!"); 
  }
}, err => { //And the second is called if an error occurs.
  fail("There shouldn't be an error")
});