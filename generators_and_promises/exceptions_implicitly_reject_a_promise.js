const promise = new Promise((resolve, reject) => {
  undeclaredVariable++; //A promise is implicitly rejected if an unhandled exception occurs when processing the promise.
});

promise.then(() => fail("Happy path, won't be called!"))
       .catch(error => pass("Third promise was also rejected")); //If an exception occurs, the second, error, callback is invoked.
