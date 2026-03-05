let temp1 = 4
let temp2 =4

// console.log(temp1+temp2)
// console.log(temp1-temp2)
// console.log(temp1*temp2)
// console.log(temp1**temp2)
// console.log(temp1/temp2)
// console.log(temp1%temp2)

// let str1="Parth"
// let str2 = " Pandya"

// console.log(str1+str2)


console.log("1"+0) //10 string
console.log("1"+"0") //19 string
console.log(1+"0")  //10 number
console.log("1"+"1"+0)  //110 string
console.log(1+2+"7")  //37 number
console.log(1+"2"+3)  //123 number


console.log(+true)  //1
console.log(+" ") //0
console.log(+false)  //0


let runs=100
let preFix = ++runs // prefix operator
let postFix = runs++ // postfix operator
console.log(preFix,postFix,runs)

let x = 5;
let y = ++x;

console.log(x); // 6
console.log(y); // 6


let X = 5;
let Y = X++;

console.log(X); // 6
console.log(Y); // 5

/*
Prefix ++x	  Increment first	Updated value
Postfix x++	  Use value first	Original value 

*/