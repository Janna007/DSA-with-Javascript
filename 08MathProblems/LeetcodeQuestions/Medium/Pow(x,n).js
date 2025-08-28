// var myPow = function(x, n) {
//     if(n===1) return x
//     if(n<0){
//         return 1/(myPow(x,(n*-1)))
//     }
//     return x*myPow(x,n-1)
// };

// console.log(myPow(2.00,-200000000))
//RangeError: Maximum call stack size exceeded

var myPow = function(x, n) {
    if(n===0) return 1
    let ans=temp(x,n)
    return n<0?1/ans:ans
};

var temp=function(x,n){
    if (n===0) return 1
    let ans=temp(x,parseInt(n/2))
    if(n%2===0) return ans*ans
    return ans*ans*x
}

console.log(myPow(2,10))