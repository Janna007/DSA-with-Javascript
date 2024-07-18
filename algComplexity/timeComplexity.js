
//TIME COMPLEXITY
//----------------------------------------------------------------------------------------

//the time taken by an algorithm 

const someFunction=(n)=>{
    //here it contain 3 operation no matter what the input is
    return (n*(n+3)/2)
}

// console.log(someFunction(2))

//even the input change iy have a constant number of operations 
//for this time complexity is O(1)


const goingUpDown=(n)=>{

    //2n+3 operations  
        console.log("going forward")
        for(let i=0;i<n;i++){
            console.log(i)
        }
        console.log("Going down")
        for(let j=n-1; j>=0; j--){
            console.log(j)
        }
        console.log("at the start")
}


// goingUpDown(2)

//in the above it contain 2n+3 operations so the operations change with respect to the input 
//for this time complexity is O(n)



const printBoth=(n)=>{
    //n*n operations  ==> O(n^2)
    for(var i=0; i<n; i++){
        for (var j=0; j<n ;j++){
            console.log(i,j)
        }
    }
}
printBoth(3)

//time complexity for this operations O(n^2) (worst complexity)