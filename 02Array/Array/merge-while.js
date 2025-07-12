//take sorted arrays

let arr1=[1,8,10,30,69]
let arr2=[7,11,21,32,40,44,89]

let arr3=[]

let i=0, j=0, k=0;


while(i<arr1.length &&  j<arr2.length){
     if(arr1[i]<arr2[j]){
         arr3[k]=arr1[i]
         i++
     }else{
        arr3[k]=arr2[j]
        j++
     }
     k++
}

while(j<arr2.length){
    arr3[k]=arr2[j]
    j++
    k++
}

console.log(arr3)