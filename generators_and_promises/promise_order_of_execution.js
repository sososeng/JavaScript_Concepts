console.log("At code start");

var ninjaDelayedPromise = new Promise((resolve, reject) => {
	console.log("ninjaDelayedPromise executor"); //Calling the Promise constructor immediately invokes the passed-in function.
    setTimeout(() => {
    console.log("Resolving ninjaDelayedPromise");
    console.log("Hattori"); //We’ll resolve this promise as successful after a 500ms timeout expires.
}, 500); });

if (ninjaDelayedPromise !== null){
	console.log("After creating ninjaDelayedPromise");
}

//The Promise then method is used to set up a callback that will be called when the promise resolves, in our case when the timeout expires.
ninjaDelayedPromise.then(ninja => {
  if(ninja === "Hattori"){
	console.log("ninjaDelayedPromise resolve handled with Hattori");
  }
});
//Creates a new promise that gets immediately resolved
const ninjaImmediatePromise = new Promise((resolve, reject) => { console.log("ninjaImmediatePromise executor. Immediate resolve."); resolve("Yoshi"); });


//Sets up a callback to be invoked when the promise resolves. But our promise is already resolved!
ninjaImmediatePromise.then(ninja => {
  if(ninja === "Yoshi"){
         console.log("ninjaImmediatePromise resolve handled with Yoshi");
  }
});

console.log("At code end");