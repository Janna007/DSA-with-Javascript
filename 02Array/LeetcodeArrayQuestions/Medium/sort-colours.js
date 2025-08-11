//75.sort colours
// https://leetcode.com/problems/sort-colors/description/?envType=problem-list-v2&envId=array

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

nums =[2,0,2,1,1,0]


var sortColors = function(nums) {
    let i=0;  
    let j=(nums.length)-1
    let k=0;
    while(k<=j){
        if(nums[k]===2){
            let temp=nums[k];
            nums[k]=nums[j];
            nums[j]=temp;
            j--;  
        }
        if(nums[k]===0){
            let temp=nums[i];
            nums[i]=nums[k];
            nums[k]=temp;
            i++;
            k++;
        }
        if(nums[k]===1){
            k++;
        }   
    }
    return nums
};

console.log(sortColors(nums))
