
//SPACE COMPLEXITY
//--------------------------------------------------------------------------------------------------

//space complexity is the amount of memory an algorithm needs to run 


const  sumArray=(array)=>{
   let sum=0;
   for(let i=0 ; i<array.length; i++){
    sum+=array[i]
   }
   return sum
}

// here we return a num (sum) !!  it  return a num which take  a same amout of space no matter what the input is
//so this have O(1) sppace complexity

const nums=[100,200,300,400]
// console.log(sumArray(nums))


const example2=(n)=>{
    let array=[]
    for(let i=0;i<n;i++){
        array.push(i*10)
    }
    return array

}
// console.log(example2(5))

//here  it returns an array which depends on the input if the input changes the size of the array will also change it will have more space complexity

//so this have O(n) space complexity


//Primitive types
//boolean,num,undefined,null =>constant
//string arrays,ojects =>dynamic(it might change the  respect to input size)


function createMatrix(n){
    let matrix=[]

    for(let i=0; i<n; i++){
        matrix[i]=[];
        for(let j=0;j<n;j++){
            matrix[i][j]=i+j
        }
    }
    return matrix
}

console.log(createMatrix(10))

//so this have O(n^2) space complexity

