/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  
  let count = 0;
  let temp = str.toLowerCase().split('');
  let vowels = ['a', 'e', 'i', 'o', 'u']

  temp.forEach(element => {
    if(vowels.includes(element)) count += 1;
  });
  return count;
}

module.exports = countVowels;