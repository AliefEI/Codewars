/*

Ask a small girl - "How old are you?". She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

*/

function getAge(inputString){
    return parseInt(inputString);
  }

  /*Implement a function which multiplies two numbers. */


function multiply (x,y){
    return x*y
}


/*

Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS

Examples
""           ->   ""
"CodeWars"   ->   "cODEwARS"
"abc"        ->   "ABC"
"ABC"        ->   "abc"
"123235"     ->   "123235"


parameter - string 
return -- opposite cases for each letter 
example -- strINg // STRinG
pseudocode --
  - turn string to array seperating it by letters
  - create for loop to iterate all the items in the list 
  - create if/else statement 
    - if (i == )
  - turn 

*/


function swap(str){
    let arr = [];
    let string = ""
    
    for(let i = 0; i < str.length; i++){
      if(str[i].toUpperCase() === str[i]){
        arr.push(str[i].toLowerCase())
      } else {
        arr.push(str[i].toUpperCase())
      }
    }
    return arr.join("")
  }

  