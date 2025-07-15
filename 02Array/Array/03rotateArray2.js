//BRUTEFORCE APPROACH

// 1.left rotation by 1 element
//---------------------------------------------------------------

//[1,2,3,4,5]--------->[2,3,4,5,1]

let arr=[10,11,30,14,50];

//using for loop

for(let i=0;i<=(arr.length)-2;i++){
      let temp=arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=temp;
}
console.log(arr)

//using while loop
let i=0;
while(i<=(arr.length)-2){
     let temp=arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=temp;
      i++;
}
console.log(arr)

// 2.right rotation by 1 element
//---------------------------------------------------------------

//[1,2,3,4,5]--------->[5,1,2,3,4]

let rightArr=[1,2,3,4,5,6,7,8,9];

for(let i=(rightArr.length-1);i>=1;i--){
      let temp=rightArr[i];
      rightArr[i]=rightArr[i-1];
      rightArr[i-1]=temp;
}

//another method

// let copy=rightArr[(rightArr.length)-1]

// for(let i=(rightArr.length-1);i>=1;i--){
//       rightArr[i]=rightArr[i-1]
// }

// rightArr[0]=copy
console.log(rightArr)


// 2. Left and Right rotation by k element
//---------------------------------------------------------------

//a.left rotation by k steps

//[1,2,3,4,5]---->k=1 [2,3,4,5,1]
//[1,2,3,4,5]---->k=2 [3,4,5,1,2]


 //left rotation by 2 steps

  let array=[1,2,3,4,5];
  let s=2;
  if(s>array.length){
      s=s%(array.length)
  }
  for(let k=1;k<=s;k++){
      for(let i=0;i<(array.length)-1;i++){
            let temp=array[i];
            array[i]=array[i+1];
            array[i+1]=temp
      }
  }
  console.log("k steps to left array",array)


//a.right rotation by k steps

//[1,2,3,4,5]---->k=1 [5,1,2,3,4]
//[1,2,3,4,5]---->k=2 [4,5,1,2,3]

 //right rotation by 2 steps

let ar=[1,2,3,4,5]
let k=2;
 if(k>ar.length){
      k=k%(ar.length)
  }
for(let j=1;j<=k;j++){
      for(let i=(ar.length-1);i>=1;i--){
            let temp=ar[i];
            ar[i]=ar[i-1];
            ar[i-1]=temp   
      }  
}
console.log("k steps to right array",ar)


//ANOTHER APPROACH

//left rotation by k steps

let a=[1,2,3,4,5];   //[3,4,5,1,2]
let steps=6;
let temp=[];


for(let i=0;i<a.length;i++){
    temp[i]=a[(i+steps)%a.length]
}

console.log(temp)


//right rotation by k steps

let ra=[1,2,3,4,5]   //[4,5,1,2,3]
let rk=1;
let tempr=[];

for(let i=0;i<ra.length;i++){
      tempr[(i+rk)%ra.length]=ra[i]
}  
console.log(tempr)


//this is also not a effiecient algorithm bcs of the extra space temp array (refer rotateArray.js in Array folder)


// Reversal Algorithm for Array Rotation


const reverse=(arr,left,right)=>{
    while(left<right){
      let temp=arr[left];
      arr[left]=arr[right];
      arr[right]=temp
      left++;
      right--;
     }
}

let arrays=[1,2,3,4,5];
let step=2;

//left rotation

//reverse upto k 
reverse(arrays,0,step-1)

//reverse from k to last
reverse(arrays,step,(arrays.length)-1)

//reverse whole array
reverse(arrays,0,(arrays.length)-1)


console.log(arrays)

// right rotation

//reverse whole array
reverse(arrays,0,(arrays.length)-1)

//reverse upto k 
reverse(arrays,0,step-1)

//reverse from k to last
reverse(arrays,step,(arrays.length)-1)

console.log(arrays)






























