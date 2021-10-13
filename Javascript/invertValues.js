/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

parameter - array of numbers
return - inverse of value in the array
example -- [1,2,4,-7,-3] // [-1,-2,-4,7,4]
pseudocode --
    - create empty array to place where result will be
    - iterate through the list 
        - for each iteration place (-) of that value 
*/

function invert(array) {
    var result = [];
    for(var i = 0; i < array.length; i++){
      result.push(-array[i]);
    }
     return result;
  }