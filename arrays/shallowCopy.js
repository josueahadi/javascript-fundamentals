let originalArray = [1, [2, 3]];
let shallowCopy = [...originalArray];
shallowCopy[1][0] = 100;

console.log(originalArray); // Output: [1, [100, 3]]