//LET VS VAR
console.log(a);
var a;
//output
// undefined
// while using var we can access it before the initialization .using let it throw error

// console.log(b)
// let b;
//output
// ReferenceError: Cannot access 'b' before initialization


//VAR
//---------------
// Function-scoped
// Hoisted (declarations are moved to the top, but not the value)
// Can be redeclared and updated

//LET
//------------------
// Block-scoped (limited to { })
// Not hoisted the same way as var(TDZ  TDZ = Temporal Dead Zone (can't access before declaration))
// Can be updated but not redeclared in the same scope


// NUMBER AND STRING

let p=10
let q=20
console.log(p+q)
//perform addition 
//output-30

let p1="10"
let q1="20"
console.log(p1+q1)
//perform concatenation
//output-1020

let p2=10
let q2="20"
console.log(p2+q2)
//perform concatenation
//output-1020


let a1=10;
let a2=20;
console.log("sum of 10 and 20 is"+a1+a2)
//perform concatenation
//output-sum of 10 and 20 is1020

let b1=10;
let b2=20;
console.log("sum of 10 and 20 is "+(b1+b2))
//perform addition then concatenation
//output-sum of 10 and 20 is 30

//TYPE COERCION

//Type Coercion is the automatic or implicit conversion of values from one data type to another by JavaScript.

console.log(1+1)
//output -2
console.log("1"+1)
//output -11
console.log("1"-1)
//output -0
//here js engine automaticaly convert type string to number and perform subtraction
console.log("1"/1)
//output -1
console.log("1"*1)
//output-1

//TYPE CASTING OR CONVERSION

//Type Casting (also known as explicit type conversion) is when you manually convert one data type to another using built-in JavaScript functions or methods.

const age=prompt("What is your age?")
console.log(age)  

//is is gonna print a age in type string 

const age2=Number(prompt("What is your age?"))
console.log(age2)  

//it convert string to number


//OPERATORS

//arithmetic operators + - / * %

let a= 11;
let b=2;
console.log(a/b) // gives -5.55
console.log(Math.floor(a/b)) //gives 5
console.log(a%b) //gives-0

//relational operator > < >= <= !=

console.log(10 == 10) //true
console.log(10 == "10") //true
console.log(10 === "10") //false (strictly equal operator)

//logical operator && ||

//unary operator ++ --

//post increment

let w=10;
let r=w++
console.log(w,r) // w- 11 r-10 

//pre increment

let h=10;
let n=++h;
console.log(h,n) //h-11 n-11

// QUESTIONS

// // 1.
let u=11;
u=u++ + ++u;  // 11+13=24
console.log(u)

// //2.

let k=11 
let l=22
let z=k+l+k++ + l++ + ++k + ++l
console.log(k,l,z) // 13 24 103

//3.

let d=true; //1
d++;
console.log(d) //2

// 4.

let s=11++
console.log(s)  //error-operator with constant is not possible

// 5.

let f=11;
let g= --(f++) //--11 
console.log(g)  //throw error

//MATH FUNCTIONS
Math.round(10.8)  //11
Math.ceil(10.3)   //11
Math.floor(10.7)  //10
Math.trunc(23.900)  //23     
Math.pow(2,2)  //2^2 =4
Math.sqrt(16)  //4
Math.cbrt(27)  //3
Math.abs(-29)  //29
Math.max(10,2,5)  //10
Math.min(10,2,5)  //2
Math.random()  //generate a random value between 0 and 1

let v=23.9876
console.log(v.toFixed(2)) //23.98
