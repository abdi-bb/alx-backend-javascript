// 100-await.js
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  // Create an object with photo and user properties initialized to null
  const result = {
    photo: null,
    user: null,
  };
  // Use a try/catch block to handle errors
  try {
    // Call the uploadPhoto and createUser functions and await their results
    const photo = await uploadPhoto();
    const user = await createUser();
    // Assign the results to the object properties
    result.photo = photo;
    result.user = user;
  } catch (error) {
    // Log the error to the console
    console.error(error);
  }
  // Return the result object
  return result;
}
