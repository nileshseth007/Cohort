/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) return false;

  //create an object which contains frequency of the letters
  /*
  charCount = {
    'a': 1,
    'b': 4,
    'c': 2
  }
  */
  let charCount = {};

  for (let i = 0; i < str1.length; i++) {
    // if the letter exists in charCount then count =1 else count +1
    if(charCount[str1[i]] === undefined) charCount[str1[i]] = 1;
    else charCount[str1[i]] += 1;

    if(charCount[str2[i]] === undefined) charCount[str2[i]] = -1;
    else charCount[str2[i]] -= 1;

    //advanced way to write, if letter not exists then initial count = 0
    // charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
    // charCount[str2[i]] = (charCount[str2[i]] || 0) - 1;
  }
// if frequency of any letter is != 0 then both strings are not anagrams
  for (let char in charCount) {
    if (charCount[char] !== 0) return false;
  }

  return true;
}

// Example usage:
const result = isAnagram("Listen", "Silent");
console.log(result); // Output: true



module.exports = isAnagram;
