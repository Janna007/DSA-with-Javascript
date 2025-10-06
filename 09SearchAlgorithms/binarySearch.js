const arr=[1,2,3,4,5,6,7,8,9]
let f=0;
let l=arr.length-1
let target=9

const findTarget = (f, l, target) => {
  // base condition
  if (f > l) {
    return "not found";
  }

  let mid = Math.floor((f + l) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return findTarget(mid + 1, l, target);
  } else {
    return findTarget(f, mid - 1, target);
  }
};

console.log(findTarget(f,l,target)) 

// Time Complexity: 
// -> Best Case: O(1)
// -> Average Case: O(log N)
// -> Worst Case: O(log N)
// Auxiliary Space: O(1), If the recursive call stack is considered then the auxiliary space will be O(log N).

