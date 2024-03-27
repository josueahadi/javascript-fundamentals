/*
Basic syntax:
let newArray array.flat(depth);

array = original array you want to flatten
depth(optional): specifies how deep a nested array structure should be flattened. Defaults to '1'

*/

let nestedArray = [1, 2, [3,4]];
let flatArray = nestedArray.flat();
console.log(flatArray); // Output [ 1, 2, 3, 4 ]

let deeperNestedArray = [1, 2, [3, 4, [5, 6, 7], 8, 9, [10]]];
let flatArray2 = deeperNestedArray.flat();
console.log(deeperNestedArray); // Output [ 1, 2, [ 3, 4, [ 5, 6, 7 ], 8, 9, [ 10 ] ] ]

let flatArray3 = deeperNestedArray.flat(2);
console.log(flatArray3); // Output [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

/*
In the first example, the .flat() method is used to flatten an array with one level of nesting. In the second example, the array has two levels of nesting, and using .flat() without specifying the depth only flattens the first level. In the third example, .flat(2) is used to flatten the array up to two levels deep.
*/ 