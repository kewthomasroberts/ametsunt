function extend$1(obj) {
  // Verify that the argument is an object
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Expected an object');
  }

  // Define some properties to add to the object
  const additionalProperties = {
    extended: true,
    timestamp: new Date(),
    greet: function() {
      console.log('Hello from the extended object!');
    }
  };

  // Extend the original object with additional properties
  for (const key in additionalProperties) {
    if (additionalProperties.hasOwnProperty(key)) {
      obj[key] = additionalProperties[key];
    }
  }

  return obj;
}

// Example usage:
const originalObj = { name: 'Alice', age: 25 };
const extendedObj = extend$1(originalObj);

console.log(extendedObj);
// Output:
// {
//   name: 'Alice',
//   age: 25,
//   extended: true,
//   timestamp: <current date>,
//   greet: [Function: greet]
// }

extendedObj.greet(); // Output: Hello from the extended object!
