function *IdGenerator(){
	let id = 0;
	while(true){
	yield ++id;
	}

 }

const idIterator = IdGenerator();
const ninja1 = { id: idIterator.next().value };
const ninja2 = { id: idIterator.next().value };
const ninja3 = { id: idIterator.next().value };

if(ninja1.id === 1){
	console.log("First ninja has id 1");
}
if(ninja2.id === 2){
	console.log("Second ninja has id 2");
}
if(ninja3.id === 3){
	console.log("Third ninja has id 3");
}
