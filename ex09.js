/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  // Your code here
  //1. make an array store input spliting by " "
  let arr = input.split(" ")

  //2. take a value in array starting from index 1, and update first letter to uppercase
  for (let i = 1; i < arr.length; i++) {
    let chars = arr[i].split("")//Breake into characters from string in array
    chars[0] = chars[0].toUpperCase()// take first letter of string and update it as Uppercase
    arr[i] = chars.join('') // concat the characters and update array
  }

  return arr.join('')
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
