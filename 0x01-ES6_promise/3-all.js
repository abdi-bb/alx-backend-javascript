// 3-all.js
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Use Promise.all to resolve all promises
  Promise.all([uploadPhoto(), createUser()])
    // Log the body, firstName, and lastName to the console
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    // Log an error message to the console
    .catch(() => {
      console.error('Signup system offline');
    });
}
