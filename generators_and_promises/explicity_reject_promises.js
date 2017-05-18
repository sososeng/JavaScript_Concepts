const promise = new Promise((resolve, reject) => {
  reject("Explicitly reject a promise!"); //A promise can be explicitly rejected by calling the passed-in reject function.
});
promise.then(
  () => fail("Happy path, won't be called!"),
  error => pass("A promise was explicitly rejected!") //If a promise is rejected, the second, error, callback is invoked.
);
