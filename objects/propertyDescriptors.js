const obj = { name: "Alice", age: 32, occupation: "Doctor" };
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
console.log(descriptor.enumerable); // Output: true
console.log(descriptor.value); // Output: true

Object.defineProperty(obj, "name", { writable: false });
obj.name = "Bob"; // No effect because writable is false
console.log(obj.name); // Output: "Alice"

Object.defineProperty(obj, "name", { enumerable: false });
console.log(Object.keys(obj)); // Output: ["age", "occupation"]
console.log(obj.name); // Output: "Alice"  (still accessible directly)

Object.defineProperty(obj, "name", { configurable: false });

// Object.defineProperty(obj, "name", { enumerable: true }); // TypeError: Cannot redefine property: name

const obj2 = {
  get name() {
    return "Joseph";
  },
  set name(value) {
    console.log(`Setting name to ${value}`);
  },
};

const descriptor2 = Object.getOwnPropertyDescriptor(obj2, "name");
console.log(descriptor2); //
/*
{
  get: [Function: get name],
  set: [Function: set name],
  enumerable: true,
  configurable: true
}
*/
