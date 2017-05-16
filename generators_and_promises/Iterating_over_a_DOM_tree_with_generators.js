function* DomTraversal(element){
  yield element;
  element = element.firstElementChild;
  while (element) {
	yield* DomTraversal(element);
	element = element.nextElementSibling;
  } 
}

const subTree = document.getElementById("subTree"); 

for(let element of DomTraversal(subTree)) {
  if(element !== null){
  	console.log(element.nodeName);
  }
}