console.log(5 == "5"); // Output: true (values are coerced to the same type and considered equal)
console.log(true == 1); // Output: true (true is coerced to 1)
console.log(null == undefined); // Output: true (both null and undefined are considered equal)

//===
console.log(5 === "5"); // Output: false (values are of different types)
console.log(true === 1); // Output: false (boolean and number are different types)
console.log(null === undefined); // Output: false (null and undefined have different types)
