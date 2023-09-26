// 7-load_balancer.js
export default function loadBalancer(chinaDownload, USDownload) {
  // Return a new Promise object
  return new Promise((resolve) => {
    // Use Promise.race to get the value of the first resolved promise
    Promise.race([chinaDownload, USDownload]).then((value) => {
      // Call the resolve function with the value
      resolve(value);
    });
  });
}
