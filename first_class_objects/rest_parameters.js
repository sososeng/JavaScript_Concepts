function multiMax(first, ...remainingNumbers){ //Rest parameters are prefixed with ...
	var sorted = remainingNumbers.sort(function(a, b){ 
	      return (b – a); //Sort the remaining numbers, descending.
	});
	return first * sorted[0];
}

if (multiMax(3, 1, 2, 3) == 9){  //The function is called just like any other function.
 	console.log("3*3=9 (First arg, by largest.)");

}