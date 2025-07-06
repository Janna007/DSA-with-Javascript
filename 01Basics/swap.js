//METHOD 1 

let a=20;
let b=30;

let c;

c=a; //c=20 ,a=20 ,b=30
a=b; //c=20 ,a=30,b=30
b=c; //c=20, a=30 ,b=20

console.log(a,b)

//METHOD 2

let a1=10;
let b1=20;

a1=a1+b1  //a1=30 ,b1=20
b1=a1-b1; //a1=30 ,b1=10
a1=a1-b1; //a1=20 ,b1=10

console.log(a1,b1)

//METHOD 3

let a2=10;
let b2=20;

[a2,b2]=[b2,a2]

console.log(a2,b2)