// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the signUpUser and uploadPhoto functions and store the promises in an array
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  // Return a new Promise object
  return new Promise((resolve) => {
    // Use Promise.allSettled to wait for all the promises to be settled
    Promise.allSettled(promises).then((results) => {
      // Map the results array to an array of objects with status and value attributes
      const finalResults = results.map((result) => ({
        status: result.status,
        value: result.value || result.reason,
      }));
      // Call the resolve function with the finalResults array
      resolve(finalResults);
    });
  });
}
