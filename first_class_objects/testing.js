
 /* var ninja1 = {
      whoAmI: function(){
        return this;
      }
};
   var ninja2 = {
     whoAmI: ninja1.whoAmI
};

var identify = ninja2.whoAmI;

if(ninja1.whoAmI() === ninja1){
	console.log("ninja1?");//pass
} 

if(ninja2.whoAmI() === ninja2){
 console.log(" ninja1 again?"); // fail
}
if(identify() === global){
	console.log("ninja1 again?"); // fail
} 
if(ninja1.whoAmI.call(ninja2) === ninja2){
 console.log("ninja2 here?"); //pass
}



function Ninja(){
  this.whoAmI = () => this;
}

var ninja1 = new Ninja();

var ninja2 = {
  whoAmI: ninja1.whoAmI
};

if(ninja1.whoAmI() === ninja1) {
	console.log("ninja1 here?"); //pass
}

if(ninja2.whoAmI() === ninja1){
 console.log("ninja2 here?");// fail
}*/


function Ninja(){
  this.whoAmI = function(){
    return this;
  }.bind(this);
}
var ninja1 = new Ninja();
var ninja2 = {
  whoAmI: ninja1.whoAmI
};
if(ninja1.whoAmI() === ninja1){
	console.log("ninja1 here?");
}
if(ninja2.whoAmI() === ninja1) {
	console.log("ninja2 here?");
}
