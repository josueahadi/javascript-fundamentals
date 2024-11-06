function transformKeys(obj, transformFn){
    return Object.fromEntries(Object.entries(obj).map(([key,value]) => {
        return [transformFn(key), value]
    }))
}

const inputObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,  
};
  
const transformFunction = (key) => key.toUpperCase();
const transformedObject = transformKeys(inputObject, transformFunction);
console.log(transformedObject);
// should return { FIRSTNAME: "John", LASTNAME: "Doe", AGE: 30 }
