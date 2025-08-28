// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

// Example 1:

// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

// Example 2:
// Input: a = 25, b = 30
// Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.


var commonFactors = function(a, b) {
     let count=0;
     let small=Math.min(a,b)
     let big=Math.max(a,b)
     for(let i=1;i<=Math.floor(Math.sqrt(small));i++){
        if((small%i)===0){
            if(big%i===0){
               count++
            }
            if(i!==(small/i )&& big%(small/i)===0){
                 count++
             }
        }
     }

     return count
};

(commonFactors(850,442))
 