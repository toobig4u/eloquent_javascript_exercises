/*  Write a function countBs that takes a string as its only argument and returns
 a number that indicates how many uppercase “B” characters there are in the string. */

let countBs = (string) => {
  let counter = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      counter = counter + 1;
    }
  }
  return counter;
};

console.log(countBs("BBC"));
console.log(countBs("BABBC"));
console.log(countBs("BEANBBC"));

/*Next, write a function called countChar that behaves like countBs, except it takes a second argument
that indicates the character that is to be counted. Rewrite countBs to make use of this new function. */

let countChar = (string, findChar) => {
  let counter = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == findChar) {
      counter = counter + 1;
    }
  }
  return counter;
};
console.log(countChar("kakkerlak", "k"));
// → 4
