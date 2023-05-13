//let:(block) Introduced in ES6, let allows block-scoping of variables. Variables declared with let have block scope, meaning they are only accessible within the block in which they are defined

//var:(global) Prior to ES6 (ECMAScript 2015), var was the primary way to declare variables in JavaScript. Variables declared with var have function scope or global scope, but they are not block-scoped.

//const:(block + constant value) Also introduced in ES6, const is used to declare variables that have a constant value, meaning their value cannot be reassigned. Like let, const variables are block-scoped. Once a value is assigned to a const variable, it cannot be changed or reassigned.

function example() {
  var x = 1;
  let y = 2;
  const z = 3;

  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x, y, z); // Output: 10, 20, 30
  }

  console.log(x, y, z); // Output: 10, 2, 3
}

example();
