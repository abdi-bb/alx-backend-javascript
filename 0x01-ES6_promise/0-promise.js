// 0-promise.js
export default function getResponseFromAPI() {
  // Return a new Promise object
  return new Promise((resolve) => {
    // Call the resolve function with a value after some time
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
    // Optionally, you can also call the reject function with an error if something goes wrong
    // setTimeout(() => {
    //   reject(new Error('Failure!'));
    // }, 1000);
  });
}
