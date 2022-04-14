/*
parameter -- array of number 
return -- string of number(s) that hasn't been used in the array 
example -- 1246379 // '058'
pseudocode -- 
  - turn parameter into one whole list 
  - combine the array into one big interger 
  - define what numbers are in an array of numbers
  - filter out whats not in array thats not used 
  - combine the filters outcome and turn it into an string
*/

function unusedDigits(...x) {
    //console.log(...x)
    let usedDigit = x.join()
    //console.log(usedDigit)
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    let unusedNumberList = numbers.filter(number => !usedDigit.includes(number))
    //console.log(unusedNumberList)
    return unusedNumberList.join('')
  }