// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


let nums= [-1,0,1,2,-1,-4]  //[ -4, -1, -1, 0, 1, 2 ]

//BRUTFORCE APPROACH

// var threeSum = function(nums) {
//     let i=0;
//     let out=[];
//     let alli=[];
//     while(i<nums.length){
//         if(alli.includes(nums[i])){
//                     i++;
//                     continue;
//         }
//         let allj=[]; 
//         for(let j=i+1;j<nums.length;j++){
//                 if(alli.includes(nums[j])){
//                     continue
//                 }
//                 if(allj.includes(nums[j])){
//                     continue;
//                 }
//                  let allk=[];
//             for(let k=j+1;k<nums.length;k++){
//                 if(allk.includes(nums[k])){
//                     continue;
//                 }
//                 if(allj.includes(nums[k])){
//                     continue;
//                 }
//                 if(alli.includes(nums[k])){
//                     continue;
//                 }
//                 let arr=[];
//                 if(nums[k]+nums[j]+nums[i]===0){
//                     arr.push(nums[i],nums[j],nums[k])
//                     if(out.includes([arr])){
//                        continue;
//                     }
//                     out.push(arr);
//                 }
//                 allk.push(nums[k])
//             }
//          allj.push(nums[j])
//         }
//       alli.push(nums[i])
//       i++;
//     }
//     return out;
// };

var threeSum=function(nums){
    let numsSort=nums.sort((a,b)=>a-b)
    let result=[];

   for(let i=0;i<numsSort.length-2;i++){
      if(numsSort[i]===numsSort[i-1] && i>0){
         continue;
      }

      let j=i+1;
      let k=numsSort.length-1;

      while(j<k){
        let sum=numsSort[i]+numsSort[j]+numsSort[k]
        if(sum===0){
            result.push([numsSort[i],numsSort[j],numsSort[k]])
            j++;
            k--;

            while(numsSort[j]===numsSort[j-1] && j<k){
                j++;
            }
              while(numsSort[k]===numsSort[k+1] && j<k){
                k--;
            }
        }else if(sum<0){
            j++;
        }else{
            k--;
        }

      }

   }

   return result
}


console.log(threeSum(nums))