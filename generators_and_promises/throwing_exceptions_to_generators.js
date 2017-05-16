function* NinjaGenerator() {
  try{
    yield "Hattori";
    console.log("The expected exception didn't occur");
} catch(e){
   if(e === "Catch this!"){
   	console.log("Aha! We caught an exception");
   }
}

}

const ninjaIterator = NinjaGenerator();
const result1 = ninjaIterator.next();
if(result1.value === "Hattori"){
	console.log("We got Hattori");
}
 ninjaIterator.throw("Catch this!");