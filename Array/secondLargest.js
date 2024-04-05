//find the second largest in an array

//[1,6,4,3]  ----output-4
//[4,2,4] ------output-2

//----------------------------------------------------------------------
//first approach---

//sort the array   and then print (consoel.log(arr.length-2))  it should be the second largest

//arr=[1,6,4,3]    after sorting:  [1,3,4,6]   ----so second largest arr[arr.length-2] =4 

//but there is a problem with this approch   ,when we take the second example

//arr=[4,2,4]   after sorting  :[2,4,4]  ----so second largest arr[arr.length-2]  =4  but the answer is 2


//--------------------------------------------------------------------

//second approach

// const arr=[3,5,8,2,1,5,9,0]

const secondLargest=(array)=>{
    const uniqueArr=Array.from(new Set(array))   //Time complexity---O(n)

    uniqueArr.sort((a,b)=>{   //Time complexity----O(nlogn)
        return b-a
    })
    
    if(uniqueArr.length >=2){
        return uniqueArr[1]
    }
}

// secondLargest(arr)


// so the Time complexity of this algorithm is O(nlogn)


//----------------------------------------------------------------

//Optimized approch --not going to use built in methods

const secondLargestOpt=(arr)=>{
   let largest=-1
   let secondLargest=-1

   for(i=0;i<arr.length;i++){          
     if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i]
     }else if(arr[i] !==largest && arr[i] >secondLargest){
         secondLargest=arr[i]
     }
   }

   return secondLargest
}

console.log(secondLargestOpt([3,5,8,2,1,5,9,0]))

//Time complexity ---O(n)
//Space complexity ---O(1)