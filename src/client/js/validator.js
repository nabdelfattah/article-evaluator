/**
 * Validates if a given string is a properly formatted URL.
 * @param {string} url - The URL to validate.
 * @returns {boolean} - Returns true if the URL is valid, otherwise false.
 */
export function isValidURL(url) {
  const regex = /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|\d{1,3}(\.\d{1,3}){3}|localhost)(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[a-zA-Z\d_]*)?$/;
  return regex.test(url);
}

// test cases
// console.log(isValidURL("https://example.com")); // true
// console.log(isValidURL("http://localhost:3000")); // true
// console.log(isValidURL("invalid-url")); // false