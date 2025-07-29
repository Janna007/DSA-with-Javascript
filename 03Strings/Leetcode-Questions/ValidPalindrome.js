// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.


let s= "race a car"
let str=s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
let i=0;
let j=str.length-1
let isPlaindrome=true

while(i<j){
   if(str[i]!==str[j]){
     isPlaindrome=false;
     break;
   }
   i++;
   j--;
}

console.log(isPlaindrome)

