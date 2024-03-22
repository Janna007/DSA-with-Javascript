//merge of two array -1st method -using for loop

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


//BONUS *****
//built in method for merge two arrays----we can use spread operator to merge two arrays in js

let mergeArray=[...arr1,...arr2]
console.log(mergeArray)
