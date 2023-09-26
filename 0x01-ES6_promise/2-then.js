// 2-then.js
export default function handleResponseFromAPI(promise) {
  // Append three handlers to the promise
  promise
    // When the promise resolves, return an object with status and body attributes
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    // When the promise rejects, return an empty Error object
    .catch(() => new Error())
    // For every resolution, log a message to the console
    .finally(() => {
      console.log('Got a response from the API');
    });
}
