// shallow freeze
const student = { name: "xyz", age: 16, address: { street: "136 street" } };
Object.freeze(student);
student.name = "abc"; // will be ignored
student.address.street = "456 street"; // will be
console.log(student);

delete student.address.street;
console.log(student);

// deep freeze
function deepFreeze(obj) {
  Object.freeze(obj);
  for (let key in obj) {
    if (
      typeof key === "object" &&
      obj[key] !== "null" &&
      !Object.isFrozen(obj[key])
    ) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}

const deepObject = {
  name: "Alice",
  address: {
    city: "Paris",
    country: "France",
  },
  hobbies: ["reading", "traveling"],
};

deepFreeze(deepObject);

deepObject.name = "Bob"; // Not allowed
console.log(deepObject.name); // Output: "Alice"

deepObject.address.city = "London"; // Not allowed (nested object is now frozen)
console.log(deepObject.address.city); // Output: "Paris"

deepObject.hobbies.push("coding"); // Not allowed (array is now frozen)
console.log(deepObject.hobbies); // Output: ["reading", "traveling"]
