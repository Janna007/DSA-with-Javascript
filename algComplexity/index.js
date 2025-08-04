//COMPLEXITY
//the complexity of an algorithm

//TIME COMPLEXITY
//amount of time taken as the function of input size n  (always consider worst case)

//to represent time complexity of ang we use Big O notation (upperbound/ worst case)
//other representation Thete(average case) /omega(lower bound/best case)


//TYPES 

//1.constant time compexity O(1)

//sum of n numbers
function sum(n){
   return n*(n+1/2)      
}
//whatever the value of n it only perform one operation  so the time complexity is O(1)
//even the input change iy have a constant number of operations //and if the n is constant 
//for this time complexity is O(1)

//2.Linear time complexity O(n)

//no of operations depends on the number of n

//ex.Linear search or sum of n numbers ueing loop

// for(1 to n){

// }

//3.Quadratic time complexity O(n^2)

//whenever we use a nested loop

//for(1 to n){  //n
//  for(1 to n){  //n
//  }
//}

//4.logarithm time compelexity O(log n) and O(nlog n) //fast algorithm
//Ex.binary search

//5.Exponential time complexity O(e^n)
//6.factorial time complexity O(n!)

// refer GRAPPHS


const someFunction=(n)=>{
    //here it contain 3 operation no matter what the input is
    return (n*(n+3)/2)
}

// console.log(someFunction(2))

//even the input change iy have a constant number of operations 
//for this time complexity is O(1)








