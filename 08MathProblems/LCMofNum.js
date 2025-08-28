//LCM OF TWO NUMBER

//[Naive Approach] Using Conditional Loop

let a=10
let b=5

function LCM(a,b){
let big=Math.max(a,b)
let small=Math.min(a,b)
for(let i=big;i<=a*b;i+=big){
    if((i%small===0)){
        return i
    }
}

return a*b
}


console.log(LCM(a,b))

// Time Complexity: O(min(a,b))
// Auxiliary Space: O(1)

//[Expected Approach] Using GCD LCM Formula


//lcm*gcd=a*b so lcm=(a*b)/gcd

function gcd(a,b){
    if (b===0) return a
    return gcd(b,a%b)
}

function lcm(a,b){
    let gc=gcd(a,b)
    let lcm=(a*b)/gc
    return lcm
}

console.log(lcm(11,5))

//Time Complexity: O(log(min(a,b))
//Auxiliary Space: O(log(min(a,b))


