//valid voter
const age=20;
// const age=Prompt("what is your age?")
if(age>=18){
    console.log("you are eligble")
}else{
    console.log("You are not eligble")
}

// NaN=== NaN  gives false
// isNaN(NaN)  gives true

//shop discount
let totalAmount=10000;

let discountPercentage=0;

if(totalAmount>0 && totalAmount<=5000){
     discountPercentage=0; 
}else if(totalAmount>5000 && totalAmount <=7000){
      discountPercentage=5;
}else if(totalAmount>7000 && totalAmount <=9000){
     discountPercentage=10;  
}else if(totalAmount>9000){
     discountPercentage=20;   
}              
discount=Math.floor((totalAmount*discountPercentage)/100)
totalAmount=totalAmount-discount
console.log(totalAmount)

// electricity bill
let totalUnit=123;
let payBill=0;

if(totalUnit>400){
    let payingUnit=totalUnit-400; //300
    payBill+=(payingUnit*13)//3000
    totalUnit=totalUnit-payingUnit; //400 
} 
if(totalUnit>200 && totalUnit <=400){
    let payingUnit=totalUnit-200; //200
    payBill+=(payingUnit*8) //4200
    totalUnit=totalUnit-payingUnit; //200
}
if(totalUnit>100 && totalUnit <=200){
    let payingUnit=totalUnit-100; 
    payBill+=(payingUnit*6 ) 
    totalUnit=totalUnit-payingUnit; 
}
 console.log("payBill",payBill)

//INR denomination question

let amount=6548;

if(amount>=500){
   console.log("500 notes :"+Math.floor(amount/500))
   amount=amount%500
}
if(amount>=200){
   console.log("200 notes :"+Math.floor(amount/200))
   amount=amount%200
}
if(amount>=100){
   console.log("100 notes :"+Math.floor(amount/100))
   amount=amount%100
}
if(amount>=50){
   console.log("50 notes :"+Math.floor(amount/50))
   amount=amount%50
}
if(amount>=20){
   console.log("20 notes :"+Math.floor(amount/20))
   amount=amount%20
}
if(amount>=10){
   console.log("10 notes :"+Math.floor(amount/10))
   amount=amount%10
}
if(amount>=5){
   console.log("5cnotes :"+Math.floor(amount/5))
   amount=amount%5
}
if(amount>=2){
   console.log("2 notes :"+Math.floor(amount/2))
   amount=amount%2
}
if(amount>=1){
   console.log("1 notes :"+Math.floor(amount/1))
}


//ternary oprator ? :
// condition?true:false

//nested ternary operator
let num=0;
console.log(num>0?"Positive":num<0?"negative":"zero")

//switch 

let day=2;
switch(day){
    case 1:console.log("monday")
    break;

    case 2:console.log("tuesday")
    break;

    default:console.log("invalid")
}

switch(day){
    case 1:
    case 2:
        console.log("tuesday")
         break;
    default:console.log("invalid")
}

switch(true){
    case 19>6:
        console.log("monday")
        break;

    case 1>6:
        console.log("monday")
        break;

    default:console.log("invalid")
}

let number=0.1+0.2;  //(0.33333...4)
switch(day){
    case 0.3:
        console.log("hello")
        break;

    case 0.4:
         console.log("heyy")
         break;

    default:console.log("invalid")
}

//it gonnna print invalid ,this is called precision issue




// falls through condition
// switch(day){
//     case 1:console.log("monday")

//     case 2:console.log("tuesday")

//     default:console.log("invalid")
// }


//if else used for expression conditions but in switch we use constants 


