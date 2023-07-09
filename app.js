console.log("start running...");
console.log("commiting another changes in repo");

function add(a, b) {
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
