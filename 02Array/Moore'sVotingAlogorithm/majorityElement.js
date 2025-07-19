// 169.majority element
//https://leetcode.com/problems/majority-element/description/?envType=problem-list-v2&envId=array

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let nums=[6,5,5]

var majorityElement = function(nums) {
    let element=nums[0];
    let count=1;
    for(let i=1;i<nums.length;i++){
        if(count===0){
          element=nums[i];
          count=1;
        }else{
            if(nums[i]===element){
                 count+=1
            }else{
                 count-=1
            }
        }
    }

    return element

};

console.log(majorityElement(nums))