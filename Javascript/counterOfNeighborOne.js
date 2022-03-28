/*
Task
Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

Example
[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []

*/

function onesCounter(input) {
    let i = 0
    let res = []
    let ones = 0
    while(i < input.length){
      if(input[i] == 1){      
        ones++
      } else {
        if(ones > 0) {
          res.push(ones)
          ones = 0
        }
      }
      i++
    }
    if(ones > 0) res.push(ones)
    return res
  }