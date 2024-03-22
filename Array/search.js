//searching in array -here we use linear search method ,there are several other methods for searching

let arr=[2,4,20,76,9,0]

let searchItem=0


for( i=0; i<arr.length;i++){
     if(arr[i]==searchItem){
         var index=i
     }
}

console.log("element found at position",index)

//BONUS*****
//we also have  built in method for searching

console.log(arr.indexOf(4))//using this method we get index of elements