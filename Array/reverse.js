//created an another array

let arr=[1,2,3,4,5]
 console.log(arr)
let arr2=[]

for(i =0;i <arr.length; i++){
    arr2[(arr.length -1)-i]=arr[i]
}



console.log(arr2)



//in-place reversing





//BONUS ****
//built in method -reverse()---

console.log(arr.reverse())