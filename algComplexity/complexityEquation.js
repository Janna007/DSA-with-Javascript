
//GENERATING COMPLEXITY EQUATION

const goingUpDown=(n)=>{

    //2n+3 operations  
        console.log("going forward") //1
        for(let i=0;i<n;i++){   //n operation
            console.log(i)
        }
        console.log("Going down")  //2
        for(let j=n-1; j>=0; j--){   //n operation 
            console.log(j)
        }

        console.log("at the start")  //3
}


// goingUpDown(2)
//n+n+2=2n+3  ignore constants  so O(n)
//in the above it contain 2n+3 operations so the operations change with respect to the input 
//for this time complexity is O(n)


const printBoth=(n)=>{
    //n*n operations  ==> O(n^2)
    for(var i=0; i<n; i++){   //n
        for (var j=0; j<n ;j++){    //n 
            console.log(i,j)
        }
    }
}
printBoth(3)

//time complexity for this operations O(n^2) (worst complexity)


const print=(n)=>{
    //n*n operations  ==> O(n^2)
    for(var i=0; i<n; i++){   //n
        for (var j=0; j<n ;j++){    //n 
            console.log(i,j)
        }
    }

    for(let i=0;i<n;i++){  //n
        console.log(i)
    }
}

print(3)

//n*n=n^2+n  here we always consider heigher degree complexity so O(n^2)

//TLE(time limit exceed)

// MAX value of N                       Time complexity
//    10^9                              O(logN) or Sqrt(N)
//    10^8                              O(N) Border case
//    10^7                              O(N) Might be accepted
//    10^6                              O(N) Perfect
//    10^5                              O(N * logN)
//    10^4                              O(N ^ 2)
//    10^2                              O(N ^ 3)
//    <= 160                            O(N ^ 4)
//    <= 18                             O(2N*N2) 
//    <= 10                             O(N!), O(2N)

