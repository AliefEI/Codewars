/*
parameter -- 3 different numbers
returning -- array of multiple of both s1 and s2
example -- s1= 2 s2=5 s3 = 34 //[10, 20, 30]
pseudocode --
  - create an empty array 
  - multiple s1 and s2 
  - create for loop 
  - create a condition increment product until reach s3 
  - return array 
*/

// Javascript: return multiples into an array
function multiples(s1,s2,s3){
    let result = []
    for (let i = 1; i < s3; i++){
      if (i % s1 == 0 && i % s2 ==0){
        result.push(i)
      }
    }console.log(result)
    return result;
  }