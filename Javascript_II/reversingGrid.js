/*
parameter -- array 
return -- grid -- new line
example -- 
  [ [ -25, 21, 2, -33, 48 ], [ 30, 31, -32, 33, -34 ] ]  // '-25,21,2,-33,48\n30,31,-32,33,-34', 
psuedocode --
  - 
*/

function toCsvText(array) {
   // good luck
  //console.log(array)
  let joining = array.join('\n')
  return joining
}