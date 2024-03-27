let numberArray = [];
// Impure 
const impureAddNumber = (number) => numberArray.push(number);
// Pure
const pureAddNumber = (number)  => numberArray.concat(number);

// Display the results
console.log(impureAddNumber(5)); // returns 1 
console.log(numberArray); // returns [5]
console.log(pureAddNumber(7)); // returns [5,7]
console.log(numberArray); // returns [5]