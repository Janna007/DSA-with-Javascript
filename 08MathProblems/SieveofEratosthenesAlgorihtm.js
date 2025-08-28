//count of primes
//native/brutforce approach
let lim = 20;

for (let i = 2; i <= lim; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

//[Efficient Approach] - Sieve of Eratosthenes

let n=15
let arr=new Array(n+1).fill(true)

for(let i=2;i<=Math.floor(Math.sqrt(n));i++){
   if(arr[i]){
     for(let j=i*i;j<=n;j++){ 
        if(j%i===0){
            arr[j]=false
        }
     }
   }
}

for(let i=2;i<arr.length;i++){
    if(arr[i]){
         console.log(i)
    }
}

//Time Complexity: O(n*log(log(n))) and space complexity:O(n)