// 8-try.js
export default function divideFunction(numerator, denominator) {
  // Use a try/catch block to handle errors
  try {
    // Check if the denominator is zero
    if (denominator === 0) {
      // Throw a new error with a message
      throw new Error('cannot divide by 0');
    }
    // Return the numerator divided by the denominator
    return numerator / denominator;
  } catch (error) {
    // Log the error to the console
    console.error(error);
    // Rethrow the error to stop the execution
    throw error;
  }
}
