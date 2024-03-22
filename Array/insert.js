
//insert element into an array(in between)

let arr=[2,1,5,3,0]

let newElement=9
let position=1
console.log(arr)

for(let i = arr.length-1 ; i>=0 ;i--){
    if(i>=position){
        arr[i+1]=arr[i]
        if(i==position){
            arr[i]=newElement
        }
    }
    
   
} 

console.log(arr)

//BONUS*****
//built in function for insertion in array

let arr2=[6,3,5,2,5,1]
console.log(arr2)
arr2.splice(3,0,0)  //first parameter indicate the position,2nd -no of elements to be delete,3rd-new element

console.log("arr2:" ,arr2)

//we are not using these kind of built in functions in dsa ,dsa helps to understand the logic behind these built in functions 