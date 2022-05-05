/*
parameter -- start and end -- both number
return -- value of numbers between start to end without anything divisible by 5
example -- (2, 13) // 5
  [2,3,4,5,6,7,8,9,10,11,12,13] --> 12
  [2,3,4,6,7,8,9,11,12,13]
psuedocode 
  - create empty array 
  - create empty array without num 5 in the one digit --> turn number into string in order to use match
  - create counter
  - create for loop
    - iterating start to end 
  - create for loop 
    - turn first loop into string instead of num, and removing anything with the number 5 
  - create for loop
    - for counter to iterater 
*/

function dontGiveMeFive(start, end){
  let arrayAll = []
  let arrayNoFive = []
  let count = 0
  for (let i=start; i<=end; i++){
    arrayAll.push(i)
  }
  //console.log(arrayAll)
  for (let i=0;i<arrayAll.length;i++){
    arrayNoFive.push(arrayAll[i].toString())
  }
  //console.log(arrayNoFive)
  for (let i=0; i<arrayAll.length;i++){
    if ((arrayNoFive[i].match(/5/g) || []).length === 0){
      count++
    }
  }
  //console.log(count)
  return count;
}

const dontGiveMeFive = (s, e, A=Array) => A.from(A(e-s+1).keys(), x => x+s).filter(x => !x.toString().includes('5')).length