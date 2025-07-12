
// Hollow Diamond Pattern


//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *


//top half

let n=6;

for(let i=1;i<=n;i++){
    //for spaces
    for(let j=1;j<=n-i;j++){
        process.stdout.write(" ")
    }

    //for star

    for(let k=1;k<=(2*i)-1;k++){
        if(k===1 || k===(2*i)-1){
             process.stdout.write("*")
        }else{
             process.stdout.write(" ")
        }
    }

  
    console.log()
}

//bottom half

for(let i=n-1;i>=1;i--){
    //for spaces
    for(let j=1;j<=n-i;j++){
        process.stdout.write(" ")
    }

    //for star

    for(let k=1;k<=(2*i)-1;k++){
        if(k===1 || k===(2*i)-1){
             process.stdout.write("*")
        }else{
             process.stdout.write(" ")
        }
    }

  
    console.log()
}






