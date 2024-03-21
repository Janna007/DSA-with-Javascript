//deletion from array

let arr=[1,2,3,4,5]
console.log(arr)

let position=2

for (let i=2 ; i< arr.length ;i++){
   
        arr[i]=arr[i+1]
}

arr.length=(arr.length)-1

console.log(arr)





//built in function(not include in dsa ,just for knowledge)
let arr = [1, 2, 3, 4, 5];

// Remove the element at index 2
arr.splice(2, 1);

console.log(arr); // Output: [1, 2, 4, 5]

// Remove 2 elements starting from index 1
arr.splice(1, 2);

console.log(arr); // Output: [1, 5]

let arr = [1, 2, 3, 4, 5];

// Remove all elements starting from index 2
arr.splice(2);

console.log(arr); // Output: [1, 2]



//splice method always mutate original array