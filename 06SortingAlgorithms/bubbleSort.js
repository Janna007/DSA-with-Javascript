//Bubble sort

//ascending order

let arr=[20,4,1,3,50,29,5,5]
let n=arr.length-1

for(let i=0;i<=n-1;i++){
    for(let j=0;j<=n-1-i;j++){
         if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
         }
    }
}

console.log(arr)

//descending order

for(let i=0;i<=n-1;i++){
    for(let j=0;j<=n-1-i;j++){
         if(arr[j]<arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
         }
    }
}

console.log(arr)

//Time complexity O(n^2)
//spacecompelxity O(1)
