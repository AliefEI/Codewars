/**
 * @param {string} s
 * @return {number}
 - example -- 
    MCMXCIV
    [ M,       C, M,         X, C,     I, V]
      |         |              |         |
      |      (1000-100)     (100-10)   (5-1)
    [1(000)    9(00)           9        4  ]
    
    example #2
    XCIX   // 100-100  10-1
    CCLVII // 1000+1000+5+1+1
    MCMXCIV // [1000, 100, 1000, 10, 100, 1, 5]
    
 - pseudocode --
    - create varible for each letter
    - create an empty array, to place numeric value each element represesent from parameter
    - create a for loop traversing from right to left 
    - if letter is less more than the right subtract that the less amount 
    - if letter is greather than or equal to the right add both value
    - 
    III --> 1+1+1
    
 */
  

    var romanToInt = function(s) {
    
        const convert = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1}
    
        
        let array = s.split('')
        
        let total = 0
        let current 
        let currentValue
        let next 
        let nextValue 
        
        for (let i=0;i<array.length; i++){
            
            current = array[i]
            currentValue = convert[current]
            next = array[i+1]
            nextValue = convert[next]
            
            if (currentValue >= nextValue){
                total +=(currentValue)
            }else if(currentValue < nextValue){
                total -= (currentValue)
            }else if(currentValue && !nextValue){
                total += currentValue
            }
        }
        return total
    }