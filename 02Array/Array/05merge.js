//merge of two array -1st method -using for loop(not sorted )

let arr1=[1,4,5,3,2]
let arr2=[9,0,7,6,5]
let arr3=[]

for(i=0;i<arr1.length;i++){
    arr3[i]=arr1[i]
}

for(i=0;i<arr2.length;i++){
    arr3[(arr1.length )+i]=arr2[i]
}


console.log(arr3)

//merge sorted array 

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

//BONUS *****
//built in method for merge two arrays----we can use spread operator to merge two arrays in js

let mergeArray=[...arr1,...arr2]
console.log(mergeArray)
