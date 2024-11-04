const arrayStats = (arr) => {
    if (arr.length === 0) {
        return { sum: 0, average: 0, min: null, max: null };
    }

    let sum = 0, min = arr[0], max = arr[0];
    arr.forEach((num) => {
        sum += num;
        (num < min) ? min = num : max = num;
    });

    const average = parseFloat((sum / arr.length).toFixed(2));

    return { sum, average, min, max };
};

console.log(arrayStats([1, 2, 3, 4, 5]));
// { sum: 15, average: 3.00, min: 1, max: 5 }
