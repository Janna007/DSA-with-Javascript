//Selection sort

let arr=[0,5,12,3,1]
let n=arr.length-1  //4
let min;

for(let i=0;i<n;i++){
    min=i;
    for(let j=i+1;j<=n;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }

    let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
}

console.log(arr)