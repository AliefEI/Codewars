/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

parameter -- marks, array
return -- average value of list 
example -- [1,3,4,6,6,2] // 4
pseudocode 
    have a counter 
    iterate throught the list 
    sum up all the list via the counter
    take the total divide by the length of the list 
*/



function getAverage(marks){

    var total = 0;
    for(var i = 0; i < marks.length; i++){
      total += marks[i];
    }
    return Math.floor(total / marks.length);
  }
  