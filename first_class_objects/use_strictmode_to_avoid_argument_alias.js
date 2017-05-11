"use strict"; //Enables strict mode
  function infiltrate(person){
  if(person === 'gardener'){
    console.log('The person is a gardener');
  }
  if(arguments[0] === 'gardener'){
    console.log('The first argument is a gardener');
   }
arguments[0] = 'ninja'; //Changes the first argument

  if(arguments[0] === 'ninja'){ //The first argument is changed.
    console.log('The first argument is now a ninja');
  }

   if(person === 'gardener'){
    console.log('The person is still a gardener'); //The value of the person parameter hasn’t changed.
   }
}
infiltrate("gardener");