// 4-user-promise.js
export default function signUpUser(firstName, lastName) {
  // Return a new Promise object
  return new Promise((resolve) => {
    // Call the resolve function with an object that has firstName and lastName attributes
    resolve({
      firstName,
      lastName,
    });
  });
}
