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
