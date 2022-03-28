/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

parameter -- array of number
return -- the sum of all the positive intergers in the array
example -- [-4,3,6,-9,1] // 10
pseudocode --
    - create a 'counter'
    - iterate through the loop of the array 
    - if the value of each interger is greater than 0 add in to the counter 

*/

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
        }
    }
    return sum;
  }
  