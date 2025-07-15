// //take sorted arrays


let a1=[2,3,5,9];
let a2=[1,5,6,7,8,11,30]

let a3=[];
i=0;  
k=0; 

while(i<a1.length && j<a2.length){
    if(a2[j]<a1[i]){
        a3[k++]=a2[j++];
    }else{
        a3[k++]=a1[i++];
    }
}

while(j<a2.length){
     a3[k++]=a2[j++];
}

while(i<a1.length){
     a3[k++]=a1[i++];
}

console.log(a3)

// let arr1=[1,8,10,30,69]
// let arr2=[7,11,21,32,40,44,89]

// let arr3=[]

// let i=0, j=0, k=0;


// while(i<arr1.length &&  j<arr2.length){
//      if(arr1[i]<arr2[j]){
//          arr3[k]=arr1[i]
//          i++
//      }else{ 
//         arr3[k]=arr2[j]
//         j++
//      }
//      k++
// }

// while(j<arr2.length){
//     arr3[k]=arr2[j]
//     j++
//     k++
// }

// console.log(arr3)