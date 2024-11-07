function createCounter() {
    let count = 0;
    return function counterFn() {
        count++;
        return count;
    }
}

const counter = createCounter();

console.log(counter())
console.log(counter())
console.log(counter())