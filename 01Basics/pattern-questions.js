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

// Top half of diamond
for (let i = 1; i <= n; i++) {
  // Add spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ")
  }

  // Add stars
  for (let k = 1; k <= 2 * i - 1; k++) {
   process.stdout.write("*")
  }

  console.log();
}

// Bottom half of diamond
for (let i = n - 1; i >= 1; i--) {
  let line = "";

  // Add spaces
  for (let j = 1; j <= n - i; j++) {
    line += " ";
  }

  // Add stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    line += "*";
  }

  console.log(line);
}


