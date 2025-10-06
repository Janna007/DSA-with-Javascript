//268. missing number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.


//METHOD 1
// let nums=[0,1]
// let missingArray=new Array(nums.length+1)
// let missingNumber;

// for(let i=0;i<nums.length;i++){
//     let j=nums[i]
//     missingArray[j]=nums[i];
// }

// for(let i=0;i<missingArray.length;i++){
//     if (!(i in missingArray)) {
//        missingNumber=i;
//     }
// }

// console.log(missingNumber)


//METHOD 2

// var missingNumber = function(nums) {
 
//  let missingNumber;
//  nums.sort((a,b)=>a-b)
//  let expSum=0

//  let n=nums.length
//  expSum=(n*(n+1))/2

//  let actSum=0;

//  for(let i=0;i<nums.length;i++){
//     actSum+=nums[i]
//  }

//  missingNumber=expSum-actSum
//  return missingNumber
// };


//METHOD 3 (Binary search algorithm)
var missingNumber = function(nums) {
   nums.sort((a,b)=>a-b)
   //[0,2,3,4,5,6,7,8,9]
   let start=0; //1
   let end=nums.length-1; //0
   while(start<=end){
      let mid=Math.floor((start+end)/2) //0
        if(nums[mid]!==mid){
            end=mid-1
        }
        if(nums[mid]===mid){
            start=mid+1
        }

   }
   
   return start
   
};