// //GCD(greatest common divisor) or HCF(highest common factor)

// //Find highest common factor in 20 and 32
// //BRUTFORCE APPROACH
// //O(min(a, b)) Time and O(1) Space
// let a=20
// let b=32

// // for(let i=20;i>=1;i--){
// //    if(a%i===0 && b%i===0){
// //        console.log(i)
// //        break;
// //    }
// // }

// // OPTIMISED APPROACH
// // EUCLIDEAN ALGORITHMS

// //[Approach - 2] Euclidean Algorithm using Subtraction - O(min(a,b)) Time and O(min(a,b)) Space

// //using loop
// while(a!==b){
//     if(a>b) a=a-b;
//     else b=b-a
// }

// console.log(a)

// // //using  recursive function

// function findGcd(a,b){
//    if (a===b)  return a
//    if(a>b) return findGcd(a-b,b)
//     return findGcd(a,b-a)
// }

// console.log(findGcd(20,32))


// // [Approach - 3] Optimized Euclidean Algorithm by Checking Remainder

// function gcd(a,b){
//   if(b===0) return a
//   return gcd(b,a%b)

// }

//  console.log(gcd(32,20)) 


// // Time Complexity: O(log(min(a,b)))

// // Each recursive call reduces the size of the numbers significantly using the modulo operation (a % b), which shrinks the input faster than subtraction.
// // The worst-case scenario for the number of steps occurs when the inputs are consecutive Fibonacci numbers, like (21, 13), which maximizes the number of recursive calls.
// // Since Fibonacci numbers grow exponentially, and the number of steps increases linearly with their position, the time complexity becomes logarithmic in terms of the smaller number — O(log(min(a, b))).
// // Auxiliary Space: O(log(min(a,b))

// // The maximum number of recursive calls is proportional to the number of steps taken to reduce the input to zero, which is O(log(min(a, b))) in the worst case.



// //------------------------------------------------------------------------------------------

// //GCD of more than two (or array) numbers


function gcd(a,b){
  if(b===0) return a
  return gcd(b,a%b)

}


function gcdArr(arr){
   let hcf=arr[0]

   for(let i=1;i<arr.length;i++){
     hcf=gcd(arr[i],hcf)

     if(hcf===1){
      return 1
     }
   }

   return hcf
}

console.log(gcdArr([2,4,8,16]))


//Time Complexity: O(n * log(x)), where x is the largest element of the array
// Auxiliary Space: O(1)




