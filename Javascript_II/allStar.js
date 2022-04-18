/*
parameter -- 2 strings -- 'str' and 'letter'
return -- number of times it appears in str
example -- wordle , e // 1
pseudocode --
  - have counter, set to 0 
  - create for loop,
  - create condition checking letter
    - increments
    - return counter
*/

function strCount(str, letter){  
    //code here
    let counter = 0
    for (let i = 0; i<str.length; i++){
      if (str[i] == letter) {
        counter ++
      }
    } return counter
    //console.log (counter)
  }