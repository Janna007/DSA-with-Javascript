//42.Trapping rain water

// https://leetcode.com/problems/trapping-rain-water/description/?envType=problem-list-v2&envId=array


// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
let totalWater=0;
left=[];
right=[];
let leftmax=0;
let rightmax=0;

for(let i=0;i<height.length;i++){
    if(height[i]>leftmax){
        leftmax=height[i]
    }
     left[i]=leftmax;
}

for(let i=(height.length)-1;i>=0;i--){
    if(height[i]>rightmax){
        rightmax=height[i]
    }
     right[i]=rightmax;
}


for(let i=0;i<height.length;i++){
   totalWater+=(Math.min(left[i],right[i]))-height[i]
}

console.log(totalWater)



// BRUTFORCE APROACH
let sum=0;
for(let i=0;i<height.length;i++){
    let leftLarge=0;
    let rightLarge=0;
    for(let j=i-1;j>=0;j--){
        if(height[j]>leftLarge){
            leftLarge=height[j]
        }
    }
     for(let j=i+1;j<height.length;j++){
        if(height[j]>rightLarge){
            rightLarge=height[j]
        }
    }

    if(rightLarge && leftLarge >0){
        if(leftLarge<=rightLarge && height[i]<leftLarge){
            sum+=leftLarge-height[i]
        }else if(rightLarge<leftLarge && height[i]<rightLarge){
            sum+=rightLarge-height[i]
        }
    }

}
console.log(sum)
