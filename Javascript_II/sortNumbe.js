/*  One liner Answer    */

function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }
