function* WarriorGenerator(){ 
	yield "Sun Tzu";
	yield* NinjaGenerator(); //yield* delegates to another generator.
	yield "Genghis Khan";
}
function* NinjaGenerator(){
  yield "Hattori";
  yield "Yoshi";
}
for(let warrior of WarriorGenerator()){
	if(warrior !== null){
		console.log(warrior);
	}
}