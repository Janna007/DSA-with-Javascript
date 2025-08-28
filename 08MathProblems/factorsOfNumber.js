//factors of number

let numb=442;

//first approach

// for(let i=1;i<=Math.floor(numb/2);i++){
//     if(numb%i===0){
//         console.log(i)
//     }
// }
// console.log(numb)


//second approach

for(let i=1;i<=Math.floor(Math.sqrt(numb));i++){
    if(numb%i===0){
        console.log(i)
        if(i!==numb/i){
          console.log(numb/i)
        }
    }
}

//time complexity is O(sqrt(n))


