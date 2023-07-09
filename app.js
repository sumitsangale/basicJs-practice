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
