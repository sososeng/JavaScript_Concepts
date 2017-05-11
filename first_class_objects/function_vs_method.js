function whatsMyContext() { 
  return this; //Returns the function context that will allow us to examine the context from outside
}

if(whatsMyContext() === window){ //Invoking as a function sets the context to the window object.
  console.log("Function call on window");
}

var getMyThis = whatsMyContext; //getMyThis gets a reference to the whatsMyContext function.

if(getMyThis() === window){ //Invokes the function using the getMyThis variable. Even though we use a variable, the function is still invoked as a function, and the function context is the window object.
 console.log( "Another function call in window"); 
}


var ninja1 = { //A ninja1 object is created with a getMyThis property that references the whatsMyContext function.
  getMyThis: whatsMyContext
};

if(ninja1.getMyThis() === ninja1){ //Invoking the functions through getMyThis calls it as a method of ninja1. The function context is now ninja1. That’s object orientation!
  console.log("Working with 1st ninja");
}

var ninja2 = { //Another object, ninja2, also has a getMyThis property referencing whatsMyContext.
  getMyThis: whatsMyContext
};

if(ninja2.getMyThis() === ninja2){ //Invoking the function as a method of ninja2 shows that the function context is now ninja2.
  console.log("Working with 2nd ninja");
}
