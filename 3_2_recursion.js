let isEven = (num) => {
  num = Math.abs(num); //fixing negative numbers
  while (num > 1) {
    num = num - 2;
  }
  if (num == 0) {
    return true;
  } else return false;
};
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??