console.log("start running...");
// console.log("commiting another changes in repo");

function addition(a, b) {
  return a + b;
}

//****conter delima
function counterDelima() {
  let count = 0;
  return function countUpdate() {
    count += 1;
    console.log("count", count);
  };
}
// const counter = counterDelima();
// counter();
// counter();
// counter();
// console.log(counter);
//****counter deloma

//**** set in JS */
const letters = new Set(["a", "g", "o", "a", "o"]);
// console.log(letters);
let testArr = ["a", "g", "o", "a", "o"];

let uniqueArr = new Set();
testArr.forEach((value, i) => {
  uniqueArr.add(value);
});
// console.log(uniqueArr);
//****set in JS */

//**** callback in JS */
function calculate(a, b, myCallback) {
  sum = a + b;
  myCallback(sum);
}
function dispResult(result) {
  console.log(result);
}
// calculate(10, 20, dispResult);
//**** callback in JS */

//****functions */
function factorial(n) {
  //syntactical statement
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5));

const display = function () {
  //function expression or anonymus function
  console.log("display data on screen..");
};
// display();

function outside(x) {
  function inside(y) {
    //closures
    return x + y;
  }
  return inside;
}
const funInside = outside(3);
// console.log(funInside(5));
// console.log(outside(5)(4));   //function currying

function Person() {
  // The Person() constructor defines `this` as itself.
  const self = this;
  this.age = 0;
  // self.age = 0;

  // setInterval(function growUp() {
  //   // In nonstrict mode, the growUp() function defines `this`
  //   // as the global object, which is different from the `this`
  //   // defined by the Person() constructor.
  //   // this.age++;
  //   self.age++;
  //   console.log(self.age);
  // }, 1000);

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

// const p = new Person();
// console.log(p);
//**** Functions */
