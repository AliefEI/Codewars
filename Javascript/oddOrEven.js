/*Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

parameter - array, list of numbers
return - odd or even 
example - 
    input: [1, 3, 4] // even
pseudocode 
    create a counter
    iterate through the loop 
    add the value in the array 
    determine whether it is even by using mod setting it to 0 
    else equal odd
*/

function oddOrEven(array) {
    var result = 0
    for (var i = 0; i < array.length; i++){
        result+=array[i]
    }
    if (result%2 == 0){
        return "even"
    }
    else{
        return "odd"
    }
  }