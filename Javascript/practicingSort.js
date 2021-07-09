/*

You can assume, for the purpose of this kata, that the supplied array will not be empty.

parameter -- list of numbers
return -- lowest number in the list
example -- [2,6,1,9,-5]

pseudocode --
  sort args by creating function with param of a,b
  return a-b --> ascending value 
  outside function retun index 0 of args
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a,b){
      return a-b
    })
    return args[0]
  }
}

/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

parameter - number 
return -- ascending of num, if nums===null value // empty array
examples 
  [1,6,3,-4,8] // [-4,1,3,6,8]
pseudocode 
  determine if nums === numbers || others --> typeof
  if other return empty array 
  else sort value
*/


function solution(nums){
    if (nums === null ){
      return []
    }else{
      return nums.sort(function(a,b){
        return a-b
      })
    }
  }