nums=[1,1,2,2,3,3,3,3,4,5,6,6,7,8,8,9];

//nums=[1,2,3,4,-,-,-,-] ,4

//[1,2,1,1,1,2,3,4]
//[1,2,3,1,1,2,1,4]
//[1,2,3,4,1,2,1,1]

// let i=0;   //2
// let j=1;  //7
// let count=1;
// while(j<nums.length){
//     if(nums[i]===nums[j]){
//         nums[j]="_"
//         j++;
//     }else{
//        let temp=nums[j];
//        nums[j]=nums[i+1];
//        nums[i+1]=temp;
//        count+=1
//        j++;
//        i++;
//     }
// }


let i=0;

for(let j=1;j<nums.length;j++){
    if(nums[i]!==nums[j]){
        nums[i+1]=nums[j];
        i++;
    }
}

console.log(nums,i+1)