//What is Big o Notaion ?? 
//-----------------------------------------
//there is more than one solution to a single problem , big o notation measures the efficiency and performance of an algorithm using time and space complexity

// const sampleFunction=(array)=>{     //4 operations
//     for (let i = 0; i < array.length; i++) {
//         if(i===3){
//             return array[i]
//         }
        
//     }
// }


// time to execute will be less for this method
 const sampleFunction=(array)=>{                   //only contain one operation
    return array[3]
}



// console.time("sampleFunction")
// console.log(sampleFunction([0,1,2,3,4,5]))
// console.timeEnd("sampleFunction")

//this is not a proper way to measure complexity beacuse it varies to diferent machines ,so we need a metric to calculate complexity of an algorithm








