/* Alternative:
function min(a, b) {
  return a < b ? a : b;
}
*/

let min = (a, b) => {
  return Math.min(a, b);
};
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
