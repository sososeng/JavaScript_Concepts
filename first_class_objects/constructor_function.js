function Ninja() { //A constructor that creates a skulk property on whatever object is the function context. The method once again returns the function context so that we can test it externally.
  this.skulk = function() {
    return this;
  };
}

var ninja1 = new Ninja();//Creates two objects by invoking the constructor with new. The newly created objects are referenced by ninja1 and ninja2.
var ninja2 = new Ninja();

//Tests the skulk method of the constructed objects. Each should return its own constructed object.
if(ninja1.skulk() === ninja1){ 
  console.log("The 1st ninja is skulking");
}
if(ninja2.skulk() === ninja2){
  console.log("The 2nd ninja is skulking");
}
