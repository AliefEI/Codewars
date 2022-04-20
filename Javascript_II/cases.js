/*
parameter - 2 strings of character 
return - 
  if neither character is a letter return -1
  if both character is a letter return 1
  if both are letters but not the same case return 0
example - a = 'B' b = 'c' //  0
pseudocode -
  - 
  - 
*/


function sameCase(a, b){
    if ((a.toLowerCase() === a.toUpperCase()) || (b.toLowerCase() === b.toUpperCase())) {
      return -1
    }
   else if((a == a.toLowerCase() && b == b.toLowerCase()) || (a == a.toUpperCase() && b == b.toUpperCase())) {
      return 1
  }
    else if ((a == a.toUpperCase() && b == b.toLowerCase()) || (a == a.toLowerCase() && b == b.toUpperCase())) {
      return 0
      }
    }