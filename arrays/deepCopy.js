function deepCopy(arr) {
    return arr.map(item => Array.isArray(item) ? deepCopy(item) : item);
}

let originalArray = [1, [2, 3, 4], 5];
let deepCopyArray = deepCopy(originalArray);

deepCopyArray[1][0] = 100;

console.log(originalArray);  // [ 1, [ 2, 3, 4 ], 5 ]
console.log(deepCopyArray); // [ 1, [ 100, 3, 4 ], 5 ]