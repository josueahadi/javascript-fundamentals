function Animal(name, type) {
    this.name = name; 
    this.type = type; 
}

// adding a method to prototype 
Animal.prototype.speak = function() {
    return `${this.name} says hello!`
}

// creating instances 
const dog = new Animal("Bob", "Dog"); 
const cat = new Animal("Whiskers", "Cat")

console.log(dog.speak()); 
console.log(dog.speak());

// custom object with Object.create

// base object 
const vehicle = {
    type: "vehicle",
    start() {
        return `${this.name || "Unknown vehicle"} is starting.` 
    }
};

// custom object that inherits from vehicle
const car = Object.create(vehicle)
car.name = "Toyota";
car.wheels = 4;

console.log(car.type);        // "vehicle" (inherited from vehicle)
console.log(car.start());      // "Toyota is starting." (method inherited from vehicle)
console.log(car.wheels);       // 4 (own property of car)

