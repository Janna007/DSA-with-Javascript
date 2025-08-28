// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

let s="TREE"
let sortedString=""
let arr=new Array(128).fill(0)
    for(let i=0;i<s.length;i++){
        let index=s.charCodeAt(i)
        arr[index]=arr[index]+1
    }
let sortedArray = [...arr].sort((a, b) => b - a);  
for(let i=0;i<sortedArray.length;i++){
    for(let j=0;j<arr.length;j++){
        if(sortedArray[i]!==0){
            if(sortedArray[i]===arr[j]){
                let k=0;
                while(k<sortedArray[i]){
                    sortedString=sortedString+(String.fromCharCode(j))
                    k++;
                }
                arr[j]=0;
                break;
            }
        }else{
            break;
        }
    }
}

console.log(sortedString)