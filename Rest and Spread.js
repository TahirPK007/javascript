//Rest Operator (...):The rest operator is used to represent an indefinite number of arguments as an array. It allows you to gather multiple function arguments into an array. The rest operator is placed at the end of a function parameter and collects any remaining arguments into an array.

// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10

//Spread Operator (...):The spread operator is used to expand elements of an array or object. It allows you to split an array into individual elements or merge multiple arrays or objects into a new array or object.

// const numbers = [1, 2, 3];
// const moreNumbers = [4, 5, 6];

// const combined = [...numbers, ...moreNumbers];
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

const originalObject = { name: "John", age: 30 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { name: 'John', age: 30 }
