function forEach(list, callback) { //Our iteration function accepts the collection to be iterated over and a callback function.
  for (var n = 0; n < list.length; n++) {
  callback.call(list[n], n); //The callback is invoked such that the current iteration item is the function context.
  }
}

////Calls the iteration function and ensures that the function context is correct for each invocation of the callback
var weapons = [ { type: 'shuriken' }, 
			    { type: 'katana' },
                { type:'nunchucks' }]; //Our test subject

forEach(weapons, function(index){
                  if(this === weapons[index]){
                  		console.log("Got the expected value of " + weapons[index].type);
                  }
});
