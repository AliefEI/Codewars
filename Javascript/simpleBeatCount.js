/*
parameter -- n --> array 
return -- amount of red when given blue
example -- 7 // 12
pseudocode -- 
  - if n < 2 // 0
  - else (n-1)*2
*/

function countRedBeads(n) {
    //your code here
    if (n<2){
      return 0
    }else{
      return (n-1)*2
    }
  }