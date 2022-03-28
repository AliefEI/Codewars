/*
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

Examples:

is_square([1, 4, 9, 16]) --> True

is_square([3, 4, 7, 9]) --> False

is_square([]) --> Nones


Parameter -- array, list of number
return -- boolean, true/false 
example -- [0,1,9,8,25] //
pseudocode -- 
    if array is empty, or contains zero it is undefine 
    iterate through the arrays 
        have variable for sqrt value 
        if interger --> false 
        else return true 

things learned :
    - squared root --> Math.sqrt(value)
    - determine whether value is integer --> Number.isInteger()
*/

var isSquare = function(arr){
    if (arr.length === 0) {
        return undefined
    } else {
        for (i=0; i < arr.length; i++) {
            let test = Math.sqrt(arr[i])
            if ( Number.isInteger(test) == false ) {
                return false
            }
        }
        return true
    }
}

var isSquare = function(arr){
    for (var i = 0; i < arr.length; i++) {
      if(!Number.isInteger(Math.sqrt(arr[i]))) {
        return false;
      }
    }
    return arr.length ? true : undefined;
  }