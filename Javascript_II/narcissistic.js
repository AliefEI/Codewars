/*
A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

*/

/*
parameter -- n --> number
return -- true of false 
example -- 
  407 --> 4*4*4 + 0*0*0 + 7*7*7
            64  +  0   +   343  
                   407              TRUE
pseudocode --
  - create a counter 
  - turn number to string 
  - create a for loop to traverse through the string
  - create condition -- t
     - total of amount of added vlue of individual diget to nth power added together
*/



function isNarcissistic(n){
 
    let total = 0
  //   console.log(n)
  //   console.log(typeof(n))
    
    let value = String(n)
  //   console.log(value)
  //   console.log(typeof(value))
    
    for (let i=0; i<value.length; i++){
      total += Number(value[i] ** value.length)
    }
    
    //console.log(total)
    
    return total === n
  }