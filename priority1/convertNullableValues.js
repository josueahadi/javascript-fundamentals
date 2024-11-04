const convertNullableValues = (obj) => {
    return {
        ...obj,
        ...Object.fromEntries(
            Object.entries(obj).map(([key, value]) => {
                if (value === null) {
                    return [key, 0]
                } else if (value === undefined) {
                    return [key, ""]
                }
                return [key, value]
            })
        )
    }
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
