function Ninja(){}

Ninja.prototype.swingSword = function(){
  return true;
};

const ninja1 = Ninja();
if(ninja1 === undefined){
	console.log("No instance of Ninja created.");
}
const ninja2 = new Ninja(); 
if(ninja2 && ninja2.swingSword && ninja2.swingSword()){
    console.log("Instance exists and method is callable." );

}
