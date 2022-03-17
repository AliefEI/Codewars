/*
parameter -- 2 string 
return -- one combined string of 2 parameter, where the shortest is in the outer 
example -- str1 = me str2 = too     // metoome
pseudocode 
  - turn a and b strings into array 
  - create empty array 
  - for loop a 
  - if loop a is shorter than b 
    - put arrA , arrB, arrA to result 
    - join result 
  
*/
function solution(a, b){
    // your code here
    let arrA = a.split('')
    let arrB = b.split('')
    let result = []
  //   console.log(arrA)
  //   console.log(arrB)
  //   console.log(arrA.length)
  //   console.log(arrB.length)
    if (arrA.length < arrB.length){
      return a+b+a
    }else{
      return b+a+b
    }
  }
  
//lesson --> keep it simple stupid 
// didn't need to turn string in to an array, can id the length of each string, then add the value of the string  



/*
paramter -- string
return -- reversed name 
example -- john smith // smith john 
pseudocode --
  - turn string into array by name 
  - reverse name arrangement 
  - combine two element in array into one 
*/

function nameShuffler(str){
    //Shuffle It
    let separateName = str.split(' ')
    let name = separateName.reverse()
    //console.log(name)
    return name.join(' ')
}

// ONE Line answer
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }

