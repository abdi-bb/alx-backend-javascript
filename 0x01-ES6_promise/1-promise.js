// 1-promise.js
export default function getFullResponseFromAPI(success) {
  // Return a new Promise object
  return new Promise((resolve, reject) => {
    // If success is true, call the resolve function with an object
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If success is false, call the reject function with an error object
      reject(new Error('The fake API is not working currently'));
    }
  });
}
