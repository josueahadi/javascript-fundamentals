/* Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.
*/
const multiArgFunction = (a,b,c) => a+b+c;
console.log(multiArgFunction(1,2,3)); // returns the number 6

const curryUnaryFunction = (a) => (b) => (c) => a+b+c;
curryUnaryFunction(1); // returns a function: b => c => 1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6