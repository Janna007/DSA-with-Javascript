// Sort Vowels in a String

// Given a 0-indexed string s, permute s to get a new string t such that:

// All consonants remain in their original places. More formally, if there is an index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].
// The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value than t[j].
// Return the resulting string.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.

// Example 1:

// Input: s = "lEetcOde"
// Output: "lEOtcede"
// Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.
// Example 2:

// Input: s = "lYmpH"
// Output: "lYmpH"
// Explanation: There are no vowels in s (all characters in s are consonants), so we return "lYmpH"

let s= "lEetcOde"
let sortStr=""

let arr=new Array(s.length).fill(0) 
let vowelArr=[]
for(let i=0;i<s.length;i++){
     let ascii=s.charCodeAt(i)
     if( ascii === 65 || ascii === 69 || ascii === 73 || ascii === 79 || ascii === 85 || 
            ascii === 97 || ascii === 101 || ascii === 105 || ascii === 111 || ascii === 117){
                vowelArr.push(ascii)
      } else{
        arr[i]=ascii
      }
}
vowelArr.sort((a,b)=>a-b)
let j=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
       arr[i]=vowelArr[j]
       j++
    }
}

for(let i=0;i<arr.length;i++){
    char=String.fromCharCode(arr[i])
    sortStr+=char
}


console.log(sortStr)


//solution using no ASCII

// let s = "lEetcOde";
let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
let vowelList = [];

// Step 1: Collect vowels
for (let char of s) {
    if (vowels.has(char)) {
        vowelList.push(char);
    }
}

// Step 2: Sort vowels
vowelList.sort(); // By default, sorts alphabetically

// Step 3: Rebuild the string
let result = "";
let i = 0;

for (let char of s) {
    if (vowels.has(char)) {
        result += vowelList[i];
        i++;
    } else {
        result += char;
    }
}

console.log(result); 