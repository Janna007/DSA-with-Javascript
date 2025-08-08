// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false



let s = "anagram"
let t ="nagaram"
let arrs=[]
let arrt=[]
isAn=true

var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false
    }
   for(let i=0;i<s.length;i++){
       arrs.push(s.charCodeAt(i))
    
   }
    for(let i=0;i<t.length;i++){
     arrt.push(t.charCodeAt(i))
   }

   arrs.sort((a,b)=>a-b)
   arrt.sort((a,b)=>a-b)

  let i=0;
  while(i<arrs.length){
    if(arrs[i]!==arrt[i]){
        isAn=false
        break;
    }
    i++
  }
return isAn

};

console.log(isAnagram(s,t))

 


