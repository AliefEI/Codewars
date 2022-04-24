/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
PARAMETER: NUMS , TARGET 
EXAMPLE: 2,7,11,15 --> [0,1]
RETURN: ARRAY OF INDICIES 
PSEUDOCODE: 
    state new var to empty array
    grab 1 num loop through nums[i]
    grab 2 num loop through nums[j]
    state if target value == num[i] and num[j] 
        --> retun i and j in an array 
    
    
    

*/
var twoSum = function(nums, target) {
    //let targetedIndices =[]
    for (let i=0;i<nums.length;i++){
        for (let j=0;j<nums.length;i++){
            if(target == nums[i] + nums[j]){
                return [i,j]
            } 
            //console.log(i)
            //console.log(j)
            //console.log(targetedIndices)
        }
    }
};

