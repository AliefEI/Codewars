/*
parameter -- array of number
return -- sum to array number squared
example -- [2,4,5] -> [4,16,25] //45
pseudocode -- 
  - create empty array for square value 
  - create for loop
    - condition -- square value of element in array 
  - push squared value in empty array 
  - turn array into number 
  - return total
*/

function squareSum(numbers){
    let squaredArray = []
    let result = 0 
    for (let i=0; i<numbers.length; i++){
      squaredArray.push(numbers[i]**2)
    }
    console.log(squaredArray)
    for (let j=0; j<squaredArray.length; j++){
      result += squaredArray[j]
    }
    //console.log(result)
    return result
  }