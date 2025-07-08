//pattern printing

let prompt = require('prompt-sync')();

// process.stdout.write("hello ")
// process.stdout.write("world")
// //hello world

// let num=prompt("enter a number ")
// console.log(num)

//QUESTIONS
//1.vertical and horizontal line stars  

let num=prompt("enter a number ")

//horizontal
for(let i=1;i<=num;i++){
   process.stdout.write("* ")
}
//vertical
for(let i=1;i<=num;i++){
  console.log("*")
}

//2. starts in cloumns and rows 
// *****
// *****
// *****

let col=prompt("enter no of coloumns ")
let row=prompt("enter no of rows ")

for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
        process.stdout.write("* ")
    }
    console.log("")
}

//3.Right angle triangle
  //a.
  //*
  //**
  //***
  //****
  //*****

  let rows=prompt("enter number of rows ")

  for(let i=1;i<=rows;i++){
     for(let j=1;j<=i;j++){
        process.stdout.write("* ")
     }
     console.log()
  }

  //b.
  //1
  //1 2
  //1 2 3
  //1 2 3 4
  //1 2 3 4 5

   let rows2=prompt("enter number of rows ")

  for(let i=1;i<=rows2;i++){
     for(let j=1;j<=i;j++){
        process.stdout.write(j+" ")
     }
     console.log()
  }

// 1
// 22
// 333
// 4444

let r=4;
for(let i=1;i<=r;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(i+" ")
    }
    console.log()
}

  //c.
  //A
  //A B
  //A B C
  //A B C D
  //A B C D E

   let rows3=prompt("enter number of rows ")
  for(let i=1;i<=rows3;i++){
    let alphabet=65;  //ascii code of A
     for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(alphabet)+" ")
        alphabet++;
     }
     console.log()
  }

//4.Inverted Right angle triangle
   //a.
   //*****
   //****
   //*** 
   //** 
   //*

   let rowNum=prompt("enter how many rows you want?")

   for(let i=1;i<=rowNum;i++){
     for(let j=rowNum;j>=i;j--){
        process.stdout.write("* ")
     }
     console.log()
   }


//4.Mirror Right angle triangle
//a.
//    *
//   **
//  *** 
// ****
//*****

  let rowNums=prompt("enter number of rows you want?")

  for(let i=1;i<=rowNums;i++){
     for(let j=1;j<=rowNums;j++){
        if(j<=rowNums-i){
          process.stdout.write(" ")
        }else{
           process.stdout.write("*")
        }
     }
     console.log()
  }


//     *
//    * *
//   * * *
//  * * * *
// * * * * *


  let rowNumss=prompt("enter number of rows you want?")

  for(let i=1;i<=rowNumss;i++){
     for(let j=1;j<=rowNumss;j++){
        if(j<=rowNumss-i){
          process.stdout.write(" ")
        }else{
           process.stdout.write("*")
        }
     }
     console.log()
  }


//5.X pattern

//*      *
// *   *
//   *
// *   *
//*      *

let rowsNumber=5;

for(let i=1;i<=rowsNumber;i++){
    for(let j=1;j<=rowsNumber;j++){
        if(i===j || j===rowsNumber-i+1){
             process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }
    console.log()
}

//6.V pattern

//*       *
// *     *
//  *   *
//   * *
//    *


let rowsNums=5;

for(let i=1;i<=rowsNums;i++){
    for(let j=1;j<=2*rowsNums;j++){
     if(i===j || j===(2*rowsNums)-i){
        process.stdout.write("*")
     }
    else{
        process.stdout.write(" ")
       }   
    }
    console.log()
}


























