let prompt = require('prompt-sync')();

//1.DIAMOND PATTERN
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

//    
//    *
//   ***
//  *****
//   ***
//    *
//    


let n = 4;

//top of diamond 

for(let i=1;i<=n;i++){
  //blank spaces
   for(let j=1;j<((n-i)+1);j++){
       process.stdout.write(" ")
   }

  //for starts

  for(let k=1;k<=((i*2)-1);k++){
    process.stdout.write("*")
  }

  console.log();
  
}

//bottom of diamond

for(let i=n-1;i>0;i--){
    //blank spaces
   for(let j=1;j<((n-i)+1);j++){
       process.stdout.write(" ")
   }

  //for starts

  for(let k=1;k<=((i*2)-1);k++){
    process.stdout.write("*")
  }

  console.log();
}










