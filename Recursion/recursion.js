
// Recursion is a programming technique where a function calls itself directly or indirectly in order to solve a problem. A recursive function typically solves a small part of the problem and then delegates the rest of the problem to a smaller instance of the same function. This process repeats until a base condition is met, which stops the recursion.





function jan(){
    return san()
}

function san(){
    return sin()
}

function sin(){
    return app()
}

function app(){    
    return true   //base case ,it is responsible for solving the recursion
}


// console.log(jan())


//The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.

// Base Case: The condition under which the recursion stops. Without a base case, the function would call itself indefinitely, leading to a stack overflow error.

// Recursive Case: The part of the function that breaks down the problem into smaller instances and calls itself to solve these smaller instances.


function recursiveFunc(){
    console.log('called')
    recursiveFunc()
}

// recursiveFunc()

//the above function is called itself and it will end up in a endless loop so we need a base case to stop that recursion

// The algorithmic steps for implementing recursion in a function are as follows:

// Step1 - Define a base case: Identify the simplest case for which the solution is known or trivial. This is the stopping condition for the recursion, as it prevents the function from infinitely calling itself.

// Step2 - Define a recursive case: Define the problem in terms of smaller subproblems. Break the problem down into smaller versions of itself, and call the function recursively to solve each subproblem.

// Step3 - Ensure the recursion terminates: Make sure that the recursive function eventually reaches the base case, and does not enter an infinite loop.

// step4 - Combine the solutions: Combine the solutions of the subproblems to solve the original problem.

function goToLunch(person){
    if(person ===5){   //base case to solve recursion
        return true
    }
    console.log(person)

    goToLunch(person+1)
}

// goToLunch(1)


// loops vs recurion

//products of array elements

function arrayProd(arr){
    let product=1;
    for (let i = 0; i < arr.length; i++) {
        product=product*arr[i]
         }
         return product
}


// console.log(arrayProd([1,2,3,4]))

//convert the above function in to a recursive function

function prod(arr){  
     console.log(arr)
     if(arr.length<=0){
        return 1
     }else{
       return arr[arr.length-1]*prod(arr.slice(0,arr.length-1))
     }
     
}

console.log(prod([1,2,3,4]))