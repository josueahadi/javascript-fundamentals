const convertNullableValues = (obj) => {
    let result = { ...obj }; 
    for (let key in result) {
        if (result[key] === null) {
            result[key] = 0;
        } else if (result[key] === undefined) {
            result[key] = '';
        }
    }
    return result;
}

const sampleData = {
    name: "Alice",
    age: null,
    address: undefined,
    city: "New York",
    postalCode: null,
    email: "alice@example.com",
    phone: undefined,
    isActive: true,
    hobbies: null,
    skills: ["JavaScript", "React"],
};

console.log(convertNullableValues(sampleData));
