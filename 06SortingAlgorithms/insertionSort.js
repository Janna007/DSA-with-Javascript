let arr=[0,3,2,6,7,1,3]
let n=arr.length-1

for(let i=1;i<=n;i++){  //n
    let key=arr[i]
    let j=i-1;

    while(j>=0 && arr[j]>key){ 
      arr[j+1]=arr[j]
      j--;
    }

    arr[j+1]=key
}


console.log(arr)