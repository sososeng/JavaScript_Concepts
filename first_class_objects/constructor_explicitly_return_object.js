var puppet = { //Creates our own object with a known property
  rules: false
};

function Emperor() { //Returns that object despite initializing the object passed as this
  this.rules = true;
  return puppet;
}
var emperor = new Emperor(); //Invokes the function as a constructor


//Tests show that the object returned by the constructor is assigned to the variable emperor (and not the object created by the new expression).
if(emperor === puppet){
  console.log("The emperor is merely a puppet!");
}
if(emperor.rules === false){
  console.log("The puppet does not know how to rule!");
}
