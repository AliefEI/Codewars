/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.

parameter - string 
return - string
example --
    string = 'heLlO WORlD' // 'HElLo worLd' 
pseudocode 
    var with empty string 
    for loop iterating through the index
    if i is upper return lower added to  new string 
    else i is lower return upper added to  new string 
    return the new string
*/

String.prototype.toAlternatingCase = function () {
    newStr = ''
    for(var i = 0; i < this.length; i++) {
      if(this[i] === this[i].toUpperCase()) {
        newStr += this[i].toLowerCase()
      }
      else {
        newStr += this[i].toUpperCase()
      }
    }
    return newStr
  }