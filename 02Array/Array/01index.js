//Array is a linear data structure which stores multiple values in a continous manner


//create array

let prompt = require('prompt-sync')();
let arr=[];
let n=prompt("size of element")
for(let i=0;i<n;i++){
    let ans=Number(prompt(`${i} index element?`))
    arr[i]=ans;
}

console.log(arr)

// sum of elements in an array

let array=[2,6,4,30,20];
let sum=0;
for(let i=0;i<array.length;i++){
    sum+=array[i]
}

console.log(sum)

//largest element of an array

let arr2=[1,9,3,6,4,0];
let max=arr2[0];

for(let i=1;i<arr2.length;i++){
    if(arr2[i]>max){
        max=arr2[i]
    }
}
console.log(max)

//smallest element of an array

let smarr=[1,9,3,6,4,10];
let small=smarr[0];

for(let i=1;i<smarr.length;i++){
    if(smarr[i]<small){
        small=smarr[i]
    }
}
console.log(small)

//second largest element of an array
//refer secondLargest.js file in Array folder

let array2=[2,3,4,4,4,4,4]
// let large;
// let secondLarge;

 let large=-1
 let secondLarge=-1

// if(array2[0]>array2[1]){
//     large=array2[0];
//     secondLarge=array2[1]
// }else{
//     large=array2[1];
//     secondLarge=array2[0]
// }
for(let i=0;i<array2.length;i++){
   if(array2[i]>large){
      secondLarge=large; 
      large=array2[i];
   }
   if(array2[i]>secondLarge && array2[i]<large){
        secondLarge=array2[i]
   }
}

console.log(secondLarge)


//reverse of an array
//refer reverse.js file in Array folder

//METHOD 1
let arrs=[1,2,3,4,5];
let revArr=[];

for(let i=0;i<arrs.length;i++){
    revArr[((arrs.length)-1)-i]=arrs[i]
}

console.log(revArr)

//METHOD 2

//two pointer theory

let ar=[10,20,30,40,50];
let i=0;
let j=(ar.length)-1

while(i<j){
    let temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
    i++;
    j--;
}
console.log(ar)

//BONUS ****
//built in method -reverse()---

// console.log(arr.reverse())


//0001111 Array

let numArray=[1,0,1,1,1,0,0,1,0,0]  //[]

let a=0;
let b=0;

while(a<numArray.length){
   if(numArray[a]===0){
        let temp=numArray[a];
        numArray[a]=numArray[b];
        numArray[b]=temp;
        b++;
    }
        a++;
}

console.log(numArray)








