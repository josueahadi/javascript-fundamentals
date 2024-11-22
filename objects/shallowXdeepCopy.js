// original object
const originalObject = {
  name: "Steve",
  age: 24,
  address: {
    city: "Wonderland",
    country: "JavaScript",
  },
};

// shallow copy
const shallowCopy = { ...originalObject };
console.log(shallowCopy);

// modify nested property
shallowCopy.address.city = "Neverland";
console.log(originalObject.address.city); // Output: "Neverland"
originalObject.address.country = "Python";
console.log(shallowCopy.address.country); // Output: "Python"

originalObject.name = "Skipper";
console.log(shallowCopy.name); // Output: "Steve"

// deep copy using a util function
function deepCopy(obj) {
  // Check if the input is not an object or is null
  if (typeof obj !== "object" || obj === null) {
    return obj; // Return the value directly if it's a primitive or null
  }

  // Initialize a new object or array based on the input type
  const newObj = Array.isArray(obj) ? [] : {};

  // Iterate over the properties of the object
  for (const key in obj) {
    // Ensure the property is a direct property of the object
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Recursively copy each property
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj; // Return the deeply copied object or array
}

const deepCopyObject = deepCopy(originalObject);
console.log(deepCopyObject);

// Let's change a nested property
deepCopyObject.address.city = "New York";

console.log(originalObject.address.city); // Outputs: Wonderland
