// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

let haystack ="leetcode"
let needle ="leeto"

var strStr = function(haystack, needle) {
    let occur=-1;
    let i=0;  
    let j=0;  

    while(j<haystack.length){
        if(haystack[j]===needle[i]){
            let k=j
            while(i<needle.length){
                if(needle[i]!==haystack[k]){
                   break
                }
                i++
                k++
            }
            if(i===needle.length){
                occur=j
                break;
            }else{
                i=0;
            }
        }
            j++;
    }

   return occur
};


console.log(strStr(haystack,needle))