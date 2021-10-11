/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "


parameter -- string 
return -- string of double char right next to each other
example -- 'apple' // 'aappppllee'
pseudocode 
    - turn string into array where char are separated by each other // split('')
    - create empty array to everything back in 
    - iterate through the string turned array and return char 

*/


function doubleChar(str) {
  let res = str.split('');
  let newStr = [];
  for(let i = 0; i < res.length; i++){
    newStr.push(res[i]);
    newStr.push(res[i]);
  }
  return newStr.join('')
}