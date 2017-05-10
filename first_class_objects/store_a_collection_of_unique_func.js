var store = {
  nextId: 1, //Keeps track of the next available ID to be assigned
  cache: {}, //Creates an object to serve as a cache in which we’ll store functions
  add: function(fn) {
    if (!fn.id) {
      fn.id = this.nextId++; 	//Adds functions to the cache, but only if they’re unique
      this.cache[fn.id] = fn;
      return true;
} }
};

function ninja(){}

//Tests that all works as planned
if (store.add(ninja)){ 
	console.log("Function was safely added.");
}				

if (!store.add(ninja)){
	console.log("But it was only added once.");
}
