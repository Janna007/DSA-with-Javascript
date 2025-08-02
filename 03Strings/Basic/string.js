//BASIC

let myName='janna'
console.log(myName);

let str="hello"
console.log(str[2]) //"l"  //behave like arrays

//string is immutable in nature

str[2]="r"
console.log(str)  //"hello"

str=str+" world"
console.log(str)  //hello world


//METHODS

let s="malayalam"

console.log(s.length)  //9

console.log(s.slice(0,4))  //mala
console.log(s.slice(-4,-1)) //ala
console.log(s.slice(1))  //alayalam

console.log(s.substring(0,4))  //mala   (same as slice not provide negative indexing )

console.log(s.toUpperCase()) //MALAYALAM
console.log(s.toLowerCase())

console.log(s.concat(" ","word ","from ","kerala"))

console.log(s.trim()) //cut extra spaces

console.log(s.indexOf("yalam"))   //4  returns the first index of substring
console.log(s.lastIndexOf("mala")) 

console.log(s.includes("ala"))  //true  check if that substring exist or not 

console.log(s.startsWith("ma"))  //true check if it starts with that substring

console.log(s.endsWith("ma"))  //false

console.log(s.replace("m","v"))  //valayalam  // replace first occurance of that substring

console.log(s.replaceAll("m","v")) // valayalav // replace all ocuurenace

console.log(s.split())  //convert to array

console.log(s.charAt(1))
console.log(s.charCodeAt(2))  //return ASCII code 






