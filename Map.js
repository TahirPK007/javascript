//map return new array
const num = [1, 2, 3, 4, 5];
const square = num.map((item) => {
  return item * item;
});
console.log(square);

//e.g 2
const fahrenheitTemperatures = num.map((celsius) => {
  return (celsius * 9) / 5 + 32;
});
console.log(fahrenheitTemperatures);

//e.g 3
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const usr = users.map((item) => {
  return item.id;
});
console.log(usr);
