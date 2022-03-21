/*

Ask a small girl - "How old are you?". She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

*/

function getAge(inputString){
    return parseInt(inputString);
  }

/*Implement a function which multiplies two numbers. */


function multiply (x,y){
    return x*y
}
  

/*

Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS

Examples
""           ->   ""
"CodeWars"   ->   "cODEwARS"
"abc"        ->   "ABC"
"ABC"        ->   "abc"
"123235"     ->   "123235"


parameter - string 
return -- opposite cases for each letter 
example -- strINg // STRinG
pseudocode --
  - turn string to array seperating it by letters
  - create for loop to iterate all the items in the list 
  - create if/else statement 
    - if (i == )
  - turn 

*/


function swap(str){
  let arr = [];
  let string = ""
  
  for(let i = 0; i < str.length; i++){
    if(str[i].toUpperCase() === str[i]){
      arr.push(str[i].toLowerCase())
    } else {
      arr.push(str[i].toUpperCase())
    }
  }
  return arr.join("")
}

/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr3 = [1, 3, 5, 7, 9];
arr4 = [10, 8, 6, 4, 2];
mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

parameter -- 2 arrays --> arr1 and arr2
return -- new array containing both arr1 and arr2, without duplicated number 
example --
  arr1 = [1,3,6,7,9]   arr2 = [10,5,6,4,2]  --> [1,2,3,4,5,6,7,9,10]
pseudocode --
  - combine arr1 and arr2 --> use concat 
  - sort value from least to greatest 
  - find duplicate and get rid
*/

function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2)
  let arrSort = arr3.sort(function(a,b){
    return a-b
  })
  //console.log(arrSort)
  for (let i=0; i<arrSort.length;i++){
    if (arrSort[i] == arrSort[i+1]){
      arrSort.splice(i,1)
    }
  }
  return arrSort
}