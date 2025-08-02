// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

 

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1


let x=1 //1
let y=4  //100
var hammingDistance = function(x, y) {
     let count=0
   
     let binX=x.toString(2)
     let binY=y.toString(2)

     if(binX.length<binY.length){
       while(binX.length !==binY.length){
          binX=0+binX
       }
     }else{
        while(binX.length !==binY.length){
          binY=0+binY
       }
     }
  
     let i=0;
     let j=0;

     while(i<binX.length && j<binY.length){
       if(binX[i]!==binY[j]){
         count++
       }
       i++;
       j++;
     }
    
    return count
};


 console.log(hammingDistance(x,y)) 