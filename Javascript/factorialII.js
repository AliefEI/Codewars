/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

parameter -- n number 
return -- factorials of n 
example -- 5 // 5*4*3*2*1 --> 120
psuecode --
  - if n < 0 // -1
  - n == 0 // 1
  - n < 0 // n *factorial (n-1)
*/

function factorial(n){
    //your code here
    if (n < 0){
      return -1
    }else if (n == 0){
      return 1
    }else{
      return n * factorial(n-1)
    }
  }
