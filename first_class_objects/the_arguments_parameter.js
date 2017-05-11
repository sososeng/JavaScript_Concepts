function whatever(a, b, c){

  if(a === 1){
    console.log("The value of a is 1");
  } 
  if(b === 2){
    console.log('The value of b is 2');
  }

  if(c === 3){
    console.log('The value of c is 3');
  }
  if(arguments.length === 5){
    console.log('We’ve passed in 5 parameters');
  }
  if(arguments[0] === a){
    console.log('The first argument is assigned to a');
  }
  if(arguments[1] === b){
    console.log('The second argument is assigned to b');
  }
  if(arguments[2] === c){
    console.log('The third argument is assigned to c');
  }
  if(arguments[3] === 4){
    console.log('We can access the fourth argument');
  }
  if(arguments[4] === 5){
    console.log('We can access the fifth argument');
  }

}


whatever(1,2,3,4,5);


function sum() { //A function without any explicitly defined parameters var sum = 0;
    for(var i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
  return sum; 
}

if(sum(1, 2) === 3){
  
  console.log("We can add two numbers");
}

if(sum(1, 2, 3) === 6){

 console.log("We can add three numbers");
}

if(sum(1, 2, 3, 4) === 10){

  console.log("We can add four numbers");
}



