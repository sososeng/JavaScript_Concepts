function samurai() { 
	return "samurai here"; //Defines function samurai in the global code
}

function ninja() {  //Defines function ninja in the global code

	function hiddenNinja() {  // Defines function hiddenNinja within the ninja function
		return "ninja here";
	}
	return hiddenNinja(); 

}