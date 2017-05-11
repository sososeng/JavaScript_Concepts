function infiltrate(person) {  //The person parameter has the value “gardener” sent as a first argument.

  if(person === 'gardener'){
    console.log('The person is a gardener');
  }
  if(arguments[0] === 'gardener'){
    console.log('The first argument is a gardener');
  }
  arguments[0] = 'ninja';    //Changing the arguments object will also change the matching parameter.
  if(person === 'ninja'){
    console.log('The person is a ninja now');
  }
  if(arguments[0] === 'ninja'){
    console.log('The first argument is a ninja');
  }
  person = 'gardener';

  if(person === 'gardener'){
    console.log('The person is a gardener once more');
  }
  if(arguments[0] === 'gardener'){
    console.log('The first argument is a gardener again');//The alias works both ways.
  }
}
infiltrate("gardener");