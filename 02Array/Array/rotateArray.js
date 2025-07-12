//Rotate array by k (non-negative value)
//Rotate the array to the right by k steps
// consider arr=[1,2,3,4,5,6,7]   k=3 , after rotate the arr by k we get [5,6,7,1,2,3,4]


//first approach(using in-built functions)
//--------------------------------------------------------------------------------------

// let arr=[1,2,3,4,5,6,7]
// let k=16

// const rotatedArray=(arr,k)=>{
//     let size=arr.length
    
//     if(k>size){
//       k=k%size
//     }

//     let remove=arr.splice(size-k,size)  //O(n)
//     arr.unshift(...remove)           //O(n)

//     return arr
// }


// console.log(rotatedArray(arr,k))

//Time complexity----O(n)



//second approach  --not going to use built in methods
//----------------------------------------------------------------------


const rotateArray=(arr,k)=>{
    
    let size=arr.length

    if(k>size){
        k=k%size
    }
 
    //reverse the array 3 times
    //first reverse the whole array like this  [7,6,5,4,3,2,1]

    reverse(arr,0,size-1)   //o(n)
    
    //reverse the first 3 or k elements (because here k=3)


    reverse(arr,0,k-1)   //o(k)

    // reverse the remaining part of array

    reverse(arr,k,size-1)   //o(n-k)

    console.log( "rotated array is : " ,arr)

  

}

const reverse=(arr,left,right)=>{
    while(left < right){
        let temp=arr[left]
        arr[left++]=arr[right]
        arr[right--]=temp
    }
}

rotateArray([1,2,3,4,5,6,7],5)

//Time complexity---o(n)
//space complexity ----o(1)
