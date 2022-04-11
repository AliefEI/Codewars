/*
parameter -- array of number 
return -- array of numbers if first array contains num that can be squared -- square the value if. if num does isnt sqaure number square that number
example 
  [2,5,9,36,20] // [4,25,3,6,400]
pseudocode 
  - create an empty array to push new value 
  - create a for loop to iterate through the list of array 
  - if num is square-rootable, return that square value 
  - else is num is square-rootable, square root that num 
*/



function squareOrSquareRoot(array) {
    let result = []
      for(let i = 0; i < array.length; i++){
      if((array[i] ** 0.5) % 1 === 0 ){
        result.push(array[i] ** 0.5)
       }else {
        result.push(array[i] ** 2)
       }
      }
      console.log(result)
      return result;  
    }