//Link to question :https://leetcode.com/problems/move-zeroes/description/


// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

//-----------------------------------------------------------------------------------

//first approach
//-----------------------------------------------
// var moveZeroes = function(nums) {
//     for(let i=0 ;i<nums.length ;i ++){
//         if(nums[i]===0){
//            nums.splice(i,1)
//            nums.push(0)
//         }
//     }
// };


//second approach
//-------------------------------------------------------
var moveZeroes = function(nums) {
    let i=0;
    for(let j=0 ;j<nums.length ;j++){
        if( nums[j]!== 0 ) {
           let temp=nums[i]
           nums[i]=nums[j]
           nums[j]=temp
           i++
        }
       
    }
};