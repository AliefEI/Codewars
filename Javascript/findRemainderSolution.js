/*
Task
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.

Division by zero should return NaN. (

Example
remainder(17, 5) -> 2
remainder(13, 72) -> remainder(72,13) -> 7 (The larger number should divide the smaller number)
remainder(1, 0) -> NaN (Division by 0)
remainder(0, 0) -> NaN (Divison by 0)

Parameter -- 2 --> a and b both are numbers 
Returning -- remainder of two value
example -- 3 and 8
pseudocode --
  - determine which is larger 
  - take larger and use mod 
*/

function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    if (a > b){
      return a % b
    } else{
      return b % a
    }
  }