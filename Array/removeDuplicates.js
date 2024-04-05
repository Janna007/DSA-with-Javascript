//  Remove Duplicates from Sorted Array  . 
//  Given an integer array sorted in non-decresing order  remove the duplicate elements in-place
//  relative order of the elements should be kept the same  and return the number of unique elements

//input :[3,5,5,6]   output : 3 (3,5,and 6 ,not count the duplicates)

//first approach using inbuilt methods
//--------------------------------------------------------------------

// const removeDuplicate=(arr)=>{
//     for(let i=0; i<arr.length ;i++){
//         if(arr[i]===arr[i+1]){
//             arr.splice(i+1,1)
//             i--
//         }
//     }
//     return arr
// }

// const uniqueArr=removeDuplicate( [3,5,5,6,6,6,7,8,9,9,9] )
// console.log(uniqueArr,uniqueArr.length)

//space complexity ---o(1)
//Time complexity ---o(n)

//second approach without js methods (Two pointer approach)
//--------------------------------------------------------------

//[3,5,5,6,6,6,7,8,9,9,9]
const remove=(arr)=>{
     if(arr.length === 0) return 0
     let i=0

     for (let j =1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++
            arr[i]=arr[j]
        }
        
     }

     return i+1
}

console.log(remove([3,5,5,6,6,6,7,8,9,9,9]))


//space complexity ---o(1)
//Time complexity ---o(n)




//-------------------------------------------------------------------------

// function removeDuplicates(nums) {
//     let i = 0;
//     while (i < nums.length - 1) {
//         if (nums[i] === nums[i + 1]) {
//             for (let j = i + 1; j < nums.length - 1; j++) {
//                 nums[j] = nums[j + 1];
//             }
//             nums.pop();
//         } else {
//             i++;
//         }
//     }

//     return nums.length;
// }

// // Example usage
// const nums = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6];
// const uniqueCount = removeDuplicates(nums);
// console.log(uniqueCount); // Output: 6
// console.log(nums.slice(0, uniqueCount)); // Output: [1, 2, 3, 4, 5, 6]
