//filter return new array
const data = [
  {
    name: "ali",
    date: "22-10-1990",
  },
  {
    name: "hamza",
    date: "23-10-1990",
  },
];

const newdata = data.filter((item) => {
  return item.date === "22-10-1990";
});
console.log(newdata);

// Example 1: Filtering even numbers
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);
