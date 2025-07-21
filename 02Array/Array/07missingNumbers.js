//[1,3,5,6,8,9]  find the missing numbers in the array without using built in methods



const array=[1,3,5,7,9]
const missing=[]


const misiingNumbers=(arr)=>{
   for(let i=0; i<arr.length ;i++){   
     if (arr[i]+1 !== arr[i+1]){
        missing.push(arr[i]+1)                   
     }
   }
   
}

misiingNumbers(array)
console.log(missing)

