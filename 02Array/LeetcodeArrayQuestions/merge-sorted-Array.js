// 88.https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

let nums1=[3,5,7,12,45,0,0,0];  //  [1,1,3,4,0,0,0]  [2,3,6]
let nums2=[1,2,29];          //[1,1,2,4]  [3,3,6]
let m=5; 
let n=3;

let merge = function(nums1, m, nums2, n) {
    let i=m-1;
    let j=n-1;
    let k=(m+n)-1
    while(i>=0 && j>=0){
        if(nums1[i]>=nums2[j]){
            nums1[k]=nums1[i];
            i--;
        }else if(nums1[i]<nums2[j]){
            nums1[k]=nums2[j];
            j--;
        }
        k--;
    }
    //if num2 still has elements
    while(j>=0){
        nums1[k]=nums2[j];
        k--;
        j--;
    }
};

merge(nums1,m,nums2,n);
console.log(nums1,nums2)


// | #        | Title                                               | LeetCode Link                                                                              |
// | -------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------ |
// | **1**    | Two Sum                                             | [#1](https://leetcode.com/problems/two-sum)                                                |
// | **26**   | Remove Duplicates from Sorted Array                 | [#26](https://leetcode.com/problems/remove-duplicates-from-sorted-array)                   |
// | **27**   | Remove Element                                      | [#27](https://leetcode.com/problems/remove-element)                                        |
// | **88**   | Merge Sorted Array                                  | [#88](https://leetcode.com/problems/merge-sorted-array)                                    |
// | **35**   | Search Insert Position                              | [#35](https://leetcode.com/problems/search-insert-position)                                |
// | **66**   | Plus One                                            | [#66](https://leetcode.com/problems/plus-one)                                              |
// | **136**  | Single Number                                       | [#136](https://leetcode.com/problems/single-number)                                        |
// | **283**  | Move Zeroes                                         | [#283](https://leetcode.com/problems/move-zeroes)                                          |
// | **1295** | Find Numbers with Even Number of Digits             | [#1295](https://leetcode.com/problems/find-numbers-with-even-number-of-digits)             |
// | **1470** | Shuffle the Array                                   | [#1470](https://leetcode.com/problems/shuffle-the-array)                                   |
// | **1480** | Running Sum of 1d Array                             | [#1480](https://leetcode.com/problems/running-sum-of-1d-array)                             |
// | **1672** | Richest Customer Wealth                             | [#1672](https://leetcode.com/problems/richest-customer-wealth)                             |
// | **1920** | Build Array from Permutation                        | [#1920](https://leetcode.com/problems/build-array-from-permutation)                        |
// | **1512** | Number of Good Pairs                                | [#1512](https://leetcode.com/problems/number-of-good-pairs)                                |
// | **1389** | Create Target Array in the Given Order              | [#1389](https://leetcode.com/problems/create-target-array-in-the-given-order)              |
// | **1431** | Kids With the Greatest Number of Candies            | [#1431](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies)            |
// | **2011** | Final Value of Variable After Performing Operations | [#2011](https://leetcode.com/problems/final-value-of-variable-after-performing-operations) |
