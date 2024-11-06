Array.prototype.myMap = function(callbackFn) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        if (i in this) {
            result.push(callbackFn(this[i], i, this))
        }
    }
    return result;
}

Array.prototype.myFilter = function(callbackFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if ((callbackFn(this[i], i, this))) {
            console.log(this[i])
            result.push(this[i])
        }
    }
    return result;
}

Array.prototype.myReduce = function(callbackFn, initialValue) {
    if (this.length === 0) {
        return undefined
    }

    let accumulator;

    if (initialValue === null | undefined) {
        accumulator = this[0];
        for (let i = 1; i < this.length; i++) { 
            console.log(callbackFn(accumulator, this[i], i))
            accumulator = callbackFn(accumulator, this[i], i, this);
            console.log(accumulator)
        }
        return accumulator
    } else {
        accumulator = initialValue;
        for (let i = 0; i < this.length; i++) { 
            console.log(callbackFn(accumulator, this[i], i))
            accumulator = callbackFn(accumulator, this[i], i, this);
            console.log(accumulator)
        }
        return accumulator
    }
    
    console.log(accumulator)
}

Array.prototype.myForEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        callbackFn(this[i])
    }
    return undefined
}

// test data
const numbers = [1, 2, 3, 4, 5];
const text = ["hello", "world", "JavaScript", "array", "methods"];
const mixedArray = [1, "two", 3, "four", 5];
const users = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 30, isActive: false },
    { name: "Charlie", age: 35, isActive: true },
    { name: "Dave", age: 40, isActive: false }
];

// myMap
const square = (num) => num * num;
const toUpperCase = (word) => word.toUpperCase();

console.log(numbers.myMap(square)); // Expected: [1, 4, 9, 16, 25]
console.log(text.myMap(toUpperCase)); // Expected: ["HELLO", "WORLD", "JAVASCRIPT", "ARRAY", "METHODS"]

// myFilter
const isEven = (num) => num % 2 === 0;
const isActiveUser = (user) => user.isActive;

console.log(numbers.myFilter(isEven)); // Expected: [2, 4]
console.log(users.myFilter(isActiveUser)); // Expected: [{ name: "Alice", age: 25, isActive: true }, { name: "Charlie", age: 35, isActive: true }]

// myReduce
const sum = (acc, num) => acc + num;
const concatenate = (acc, word) => acc + ' ' + word;

console.log(numbers.myReduce(sum, 0)); // Expected: 15
console.log(text.myReduce(concatenate, "")); // Expected: "hello world JavaScript array methods"

// myForEach
const logItem = (item) => console.log(item);
const logUserName = (user) => console.log(user.name);

numbers.myForEach(logItem); // Expected: Logs each number in the numbers array
users.myForEach(logUserName); // Expected: Logs each user's name in the users array
