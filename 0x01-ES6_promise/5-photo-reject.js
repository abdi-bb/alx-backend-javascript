// 5-photo-reject.js
export default function uploadPhoto(fileName) {
  // Return a new Promise object
  return new Promise((resolve, reject) => {
    // Call the reject function with an Error object and a message
    reject(new Error(`${fileName} cannot be processed`));
  });
}
