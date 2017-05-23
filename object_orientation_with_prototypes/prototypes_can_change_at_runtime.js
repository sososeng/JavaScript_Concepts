function Ninja(){
  this.swung = true; //Defines a constructor that creates a Ninja with a single Boolean property
}

const ninja1 = new Ninja(); //Creates an instance of Ninja by calling the constructor function via the “new” operator

Ninja.prototype.swingSword = function(){ //Adds a method to the prototype after the object has been created
  return this.swung;
};

if(ninja1.swingSword()){ //Shows that the method exists in the object
    console.log("Method exists, even out of order.");
}

Ninja.prototype = { //Completely overrides the Ninja’s prototype with a new object via the pierce method
 pierce: function() {
   return true;
 }
}

//Even though we’ve completely replaced the Ninja constructor’s prototype, our Ninja can still swing a sword, because it keeps a reference to the old Ninja prototype.
if(ninja1.swingSword()){
    console.log("Our ninja can still swing!");
}

//Newly created ninjas reference the new prototype, so they can pierce but can’t swing.
const ninja2 = new Ninja();

if(ninja2.pierce()){
	console.log("Newly created ninjas can pierce");
}

if(!ninja2.swingSword){
	console.log("But they cannot swing!");
}
