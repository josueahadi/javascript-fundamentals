function validatePhoneNumber(str) {
    // const cleanStr = str.split("-").join("").split(" ").join("")
    // //console.log(cleanStr)
    // if (cleanStr.length !== 10 || isNaN(cleanStr)) {
    //     return false
    // }

    if (str.length === 10) {
        return true;
    } else if (str.length === 12 && (str[3] === "-" && str[7] === "-")) {
        return true
    } else if (str.length === 12 && (str[3] === " " && str[7] === " ")) {
        return true
    }

    return false
}

console.log(validatePhoneNumber("1234567890")); // should return true
console.log(validatePhoneNumber("123-456-7890")); // should return true
console.log(validatePhoneNumber("123 456 7890")); // should return true
console.log(validatePhoneNumber("123-45-67890")); // should return false
console.log(validatePhoneNumber("1234-567890")); // should return false
