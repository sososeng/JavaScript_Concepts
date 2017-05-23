function Ninja(){
 this.swung = false;//Creates an instance variable that holds a Boolean value initialized to false
 this.swingSword = function(){
   return !this.swung; //Creates an instance method that returns the inverse of the swung instance variable value
 };
}

//Defines a prototype method with the same name as the instance method. Which will take precedence?
Ninja.prototype.swingSword = function(){
  return this.swung;
};

//Constructs a Ninja instance and asserts that the instance method will override the prototype method of the same name
const ninja = new Ninja();
if(ninja.swingSword()){
	console.log("Called the instance method, not the prototype method.");
}
