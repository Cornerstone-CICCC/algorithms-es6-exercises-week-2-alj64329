/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  // Your code here
  let dateArr = date.split("/")
  let year = dateArr[0]
  let day = parseInt(dateArr[2])
  let suf = ([1, 21, 31].includes(day) ? "st" :
    [2, 22].includes(day) ? "nd" :
      [3, 13, 23].includes(day) ? "rd" : "th")
  let month = (() => {
    let month = ""
    let num = parseInt(dateArr[1])
    switch (num) {
      case 1: month = "January"
        break;
      case 2: month = "Febuary"
        break;
      case 3: month = "March"
        break;
      case 4: month = "April"
        break;
      case 5: month = "May"
        break;
      case 6: month = "June"
        break;
      case 7: month = "July"
        break;
      case 8: month = "August"
        break;
      case 9: month = "September"
        break;
      case 10: month = "October"
        break;
      case 11: month = "November"
        break;
      default: month = "December"
        break;
    }
    return month
  })()
  return `${month} ${day}${suf}, ${year}`
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
