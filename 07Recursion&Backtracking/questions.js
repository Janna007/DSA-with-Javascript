//BACKTRACKING

//1.sum of n numbers

function sum(n){
   if(n===1) return n
   return n+sum(n-1)
}

console.log(sum(5))


//2.write a program to find the factorial of n
//if n=5 => 5*4*3*2*1
// if n=4 => 4*3*2*1
// if n=3 =>3*2*1

function fact(n){
    if(n===1) return n
    return n*fact(n-1)
}

console.log(fact(5))


//3.fibonocci series
//0,1,1,2,3,5,8,13,21....


//case 1: print n terms in fibonocci series
//using for loop

// let n=10;
// let first=0;
// let second=1;

// process.stdout.write(first+" " + second+ " ")
// for(let i=1;i<=n-2;i++){
//     let third=first+second
//     first=second;
//     second=third;  
//      process.stdout.write(third+ " ")
// }


function printFib(n,first,second){
    if(n===2) return
    let third=first+second
    process.stdout.write(third+ " ")
    printFib(n-1,second,third)
}

let n=5
process.stdout.write(0+" "+1+ " ")
printFib(6,0,1)


//case 2:print element from n index in fibonocci series

function fibonocci(n){
    if (n==0)  return 0
    if(n==1) return 1
    return fibonocci(n-1)+fibonocci(n-2)
}
console.log(fibonocci(4))




