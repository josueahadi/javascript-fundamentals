console.log(Array(3));
console.log(new Array(3));

console.log(Array(3, 5, 6));
console.log(new Array(3, 5, 6));

console.log(Array("Mr. Robot"));
console.log(new Array("Mr. Robot"));

const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]);
console.log(0 in arrayEmpty);
console.log(1 in arrayEmpty);
