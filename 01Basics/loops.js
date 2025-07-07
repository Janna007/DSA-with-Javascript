//Loops
// ----------------------

//for loop 
//-----------------------

for(let i=1; i<=10; i++){
    console.log(i)
}

//QUESTIONS

//1.sum of n natural numbers
//1 to 100
let sum=0
let n=100;
for(let i=1;i<=n;i++){
   sum+=i;
}
console.log(sum)

//2.factorial of number
//5---5*4*3*2*1
//2---2*1

let factorial=1;
let num=2;

for(let i=num;i>=1;i--){
    factorial*=i
}
console.log(factorial)

//3.factors of a number

let numb=37;

for(let i=1;i<=Math.floor(numb/2);i++){
    if(numb%i===0){
        console.log(i)
    }
}
console.log(numb)

//4. print prime numbers

//first approach
let limit=20;
let count=0;

for(let i=2;i<=limit;i++){
    for(let j=i;j>=1;j--){
       if(i%j===0){
          count+=1
       }
    }
    if(count===2){
      console.log(i)
    }
    count=0;
}

//second approach
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

//break and continue
//------------------------

// break stops the entire loop execution and continue just stops the current iteration  and move to next


//while loop
//------------------------

//print n numbers

let i=1;
while(i<=2){
    console.log(i)
    i++
}

//QUESTIONS
//1. sum of digits
// 1234---1+2+3+4=10

let digit=123456;
let sums=0;
while(digit>0){
    sums+=(digit%10)
    digit=Math.floor(digit/10)
}
console.log("sum",sums)


//2. reverse of a number
// 1234---4321

let revDigit=345678;
let newDigit=0;
let dig;
while(revDigit>0){
    let rem=(revDigit%10)
    dig=rem+newDigit
    newDigit=dig*10;
    revDigit=Math.floor(revDigit/10)
}
console.log("reversed:",dig)

//3.strong number 
//145--1!+4!+5!=145  A Strong Number is a special number whose sum of the factorials of its digits is equal to the number itself.

let strongNum=145;
let totalFactorial=0;

while (strongNum>0){
   let factorial=1;
   let rem=(strongNum%10)
   while(rem>0){   //can use for loop also
     factorial=rem*factorial
     rem--;
   }
   totalFactorial+=factorial
   strongNum=Math.floor(strongNum/10)
}


console.log(totalFactorial)


//do-while loop
//------------------------

//exit controll

do{
    console.log("hello")
}while(12<11)


    
//QUESTIONS
//1. guess the number

const random=Math.floor((Math.random()*100))+1

let guess=-1;

while (guess!==random){
    guess=Number(prompt("guess a number"))
    if(guess>random){
        console.log("too high")
    }else if(guess<random){
        console.log("too low")
    }else{
        console.log("congrats🎊")
    }
}






















