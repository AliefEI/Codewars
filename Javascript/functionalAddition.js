/*
parameter -- n --> number 
return -- value of of n plus some/any number
example -- 
  n=2 x=4 --> 6
  n=5 x=3 --> 8
psuedocode
  create some function that takes in another function containing another variable 
  have that variable do addition with variable from first function 
  result the result 
*/


function add(n) {
    return function number(x){
      return n+x
    }
  }
  