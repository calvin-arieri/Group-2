// // Number 3 Assignment.
 function largerNumber(...nums) {
     return Math.max(...nums);
   }
     console.log(largerNumber(3, 6));
     console.log(largerNumber(2, 5, 8, 1));
     console.log(largerNumber(-4, -2)); 
 
// Number 9
// Write a function that takes in a string and 
// returns true if the string is a palindrome, false otherwise.
// split
// reverse
// join

palindromeChecker = (string) => {
  let splitStr = string.split('');
  let reverseStr = splitStr.reverse();
  let joinStr = reverseStr.join('');

  if(string == joinStr) {
    return `${string} is a palindrome.`;
  } else {
    return `${string} is not a palindrome`;
  }
}
console.log(palindromeChecker('ANA'))
console.log(palindromeChecker('BRIAN'))
console.log(palindromeChecker('KBC'))
console.log(palindromeChecker('254'))
console.log(palindromeChecker('race car'))

