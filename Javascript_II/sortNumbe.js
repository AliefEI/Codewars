/*
parameter - number 
return -- ascending of num, if nums===null value // empty array
examples 
  [1,6,3,-4,8] // [-4,1,3,6,8]
pseudocode 
  determine if nums === numbers || others --> typeof
  if other return empty array 
  else sort value
*/


/*  One liner Answer    */

function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }
