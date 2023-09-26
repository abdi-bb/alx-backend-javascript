// 9-try.js
export default function guardrail(mathFunction) {
  // Create an empty array named queue
  const queue = [];
  // Use a try/catch block to handle errors
  try {
    // Call the mathFunction and store the value in a variable
    const value = mathFunction();
    // Push the value to the queue array
    queue.push(value);
  } catch (error) {
    // Push the error message to the queue array
    queue.push(error.toString());
  }
  // Push the message 'Guardrail was processed' to the queue array
  queue.push('Guardrail was processed');
  // Return the queue array
  return queue;
}
