/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
  let arr = input.toLowerCase().split(' ')
  let output = ""
  let vowels = ["a", "e", "u", "i", "o"]

  if (typeof caze === 'string') {
    if (caze === "camel") {
      output = arr.map((word, index) => {
        if (index == 0) {
          return word
        }
        return word[0].toUpperCase() + word.slice(1)
      }).join('')

    } else if (caze === "pascal") {
      output = arr.map((word) => word[0].toUpperCase() + word.slice(1)).join('')

    } else if (caze === "snake") {
      output = arr.join('_')

    } else if (caze === "kebab") {
      output = arr.join('-')

    } else if (caze === "title") {
      output = arr.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')

    } else if (caze === "vowel") {
      output = arr.map((word) =>
        word.split('').map((char) => vowels.includes(char) ? char.toUpperCase() : char).join('')).join(' ')

    } else if (caze === "consonant") {
      output = arr.map((word) =>
        word.split('').map((char) => !vowels.includes(char) ? char.toUpperCase() : char).join('')).join(' ')

    } else output = input

  } else if (Array.isArray(caze) && caze[0] === "upper" && caze[1] === "snake") {
    output = arr.map((word) => word.toUpperCase()).join('_')
  } else {
    output = input
  }
  return output
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
