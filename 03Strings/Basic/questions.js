// 1.print each character on new line

let str="anna"  //"anna" "malayalam"


for(let i=0;i<str.length;i++){
    console.log(str[i])
}
//print in reverse 
for(let i=(str.length)-1;i>=0;i--){
     console.log(str[i])
}

//2.print reversal of string

let rev=""

for(let i=(str.length)-1;i>=0;i--){
    rev=rev+str[i]
}

console.log(rev)

//3.Check palindrome or not

let i=0
let j=(str.length)-1
let isPalindrome=true
while(i<j){
    if(str[i]!==str[j]){
        isPalindrome=false
        break
    }
    i++;
    j--;
}

if(isPalindrome){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}

//4.Toggle each charachter

let toggle=""
for(let i=0;i<str.length;i++){
     let c=str.charCodeAt(i)
     if(c>=65 && c<=96){
        toggle=toggle+String.fromCharCode(str.charCodeAt(i)+32)
     }else{
         toggle=toggle+String.fromCharCode(str.charCodeAt(i)-32)
     }
}

console.log(toggle)

//5.check frequency of each character

//Mapping and bitmap

let s="malayalam"
//bitmap
let arr=new Array(128).fill(0)
for(let i=0;i<s.length;i++){
   let index=s.charCodeAt(i)
   arr[index]=arr[index]+1
}

for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        console.log(String.fromCharCode(i) + " appears " +arr[i] + " times") 
    }
}


//TODO:In order print




