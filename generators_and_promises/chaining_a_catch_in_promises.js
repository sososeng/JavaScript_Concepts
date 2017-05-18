const promise = new Promise((resolve, reject) => {
  reject("Explicitly reject a promise!"); //A promise can be explicitly rejected by calling the passed-in reject function.
});
promise.then(
  () => fail("Happy path, won't be called!"),
  .catch(() => pass("Promise was also rejected") //Instead of supplying the second, error, callback, we can chain in the catch method, and pass to it the error callback. The end result is the same.
);
