//Link to question: https://leetcode.com/problems/intersection-of-two-arrays/description/

// Given two integer arrays nums1 and nums2, return an array of their 
// intersection
// . Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 


//-----------------------------------------------------------------------------
//another method to solve

// var intersection = function(nums1, nums2) {
//     let arr = [...new Set(nums1)];
//     let res = [];
//     for(let i=0; i<arr.length; i++) {
//         if(nums2.includes(arr[i])) res.push(arr[i]);
//     }
//     return res;
// };

var intersection = function(nums1, nums2) {
    let newarr=[];
    let already;
    for(let i=0; i<nums1.length ;i++){
        for(let j=0; j<nums2.length; j++){
           if(nums1[i]===nums2[j]){
             for(let k=0; k<newarr.length; k++){
                if(newarr[k]===nums1[i]){
                  already=true
                }
             }
             if(already !== true){
               newarr.push(nums1[i])
             }
           }
           already=false;
        }
    }
  
    return newarr
};