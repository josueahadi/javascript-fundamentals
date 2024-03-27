// ADDING KEY/VALUE PAIR TO A JS OBJ


// 1. Using dot notation
const obj1 = { Organisation: "ALU"};
obj1.Specialisation = "BSE";
console.log(obj1);

//  2. Using bracket notation
const obj2 = { Sport: "Football" };
const League = "League";
const Year = "Year";
obj2[League] = "Premier League";
obj2[Year] = "2024";
console.log(obj2);

/* 
3. Using spread operator to assign the value to the object. We will create a new object and by using the spread operator we can add the old key and value to the new object with new key value pair.
*/
const obj3 = { Organisation: "ALU"};
const newObj1 = { ...obj3, Fields: "BSE"};
console.log(newObj1);

/*
4. Object.assign() method
In this approach, we are passing the object name and the field that we want to use in the object. It assigns those fields to the given object
*/
const obj4 = {University: "CalTech"};
Object.assign(obj4, {Major: "CS"});
console.log(obj4);

/* 
5. Object.defineProperty()
In this approach, we are passing the object name and the field that we want to use in the object with some extra specification that is served by the method itsef.
*/ 

const obj5 = { Animal: "Dog" };
Object.defineProperty(obj5, "Sound", {
    value: "Bark!",
    writable: false,
    enumerable: true,
    configurable: true,
});
console.log(obj5);
/*
This won't change the 'Sound' key cause writable is set to false
*/
obj5.Category = "Mammal";
console.log(obj5);