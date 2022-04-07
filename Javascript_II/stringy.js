/*
parameter - number, size of an array 
return-- string of binary number with the size of paramater
example -- 3 // '101'
pseudocode -- 
  - create empty array 
  - create for loop for sizes 
    - if number is even add 1 
    - of odd add 0 
  - join values of for loop 
  
*/


function stringy(size) {
    // your code here   
    let array = []
    for (let i=0; i<size; i++){
      if (i % 2 == 0){
        value = '1'
        array.push(value)
        //console.log(value)
      }else{
        value = '0'
        array.push(value)
        //console.log(value)
      }
    }
  
    return array.join('')
  }
  
/*
what actually is happening in the for loop is that value is being pushed into the new arrays until it reaches the value of the amount of time of the paramater 
*/  