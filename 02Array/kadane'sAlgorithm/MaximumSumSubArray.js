//leetcode qn link: https://leetcode.com/problems/maximum-subarray/description/


//Question -- Given an integer array nums ,find the subarray with the largest sum and return it's sum

//input:[-2,1,-3,4,-1,2,1,-5,4] ------->>> output:6  [4,-1,2,1]
//input:[5,4,-1,7,8] ------->>> output:23  [5,4,-1,7,8]  array itself is a sub array


//Brute force approach

const maxSubArraySum=(array)=>{
     let maxSum=array[0]
     let startIndex=0;
     let endIndex=0;
    
     for(let i=0; i<array.length ; i++){       //n operations 
          let currentSum=0
          for(let j=i ;j <array.length ;j++){        //n n-1 n-2 n-3
               currentSum+=array[j]
               if(currentSum >maxSum){
                    maxSum=currentSum
                    startIndex=i;
                    endIndex=j;
                    
               }
          }
     }
     return {maxSum,subArray:array.slice(startIndex,endIndex+1)}

}

// console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4]))

//time complexity ---->O(n^2)   worst complexity
//space complexity ----->O(1)


//Optimised approach(kadane's algorithm)

[1,2,-3]

function maxSubArray(nums){
     let sum=0;
     let max=nums[0];

     for (let i = 0; i < nums.length; i++) {
          sum+=nums[i]

          if(sum >max){
               max=sum
          }

          if(sum<0){
               sum=0;
          }
          
     }
     return max
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

//Time complexity ---->O(n)
//space complexity ----->O(1)

