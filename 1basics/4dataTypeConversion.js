let score="33"

console.log(typeof (score))


score =Number(score) // coverted to number

console.log(typeof(score))


let Runs ="33abc" //impure number 
let runsInnumber=Number(Runs) // when you convert the impure number and console log it will give you NaN
console.log(Runs)
console.log(runsInnumber)
console.log(typeof(runsInnumber)) // type of impure number after converting to number is always number 


let runs =null //null
let runsInNumber=Number(runs) // when you convert the null and console log it will give you 0
console.log(runs)
console.log(runsInNumber)
console.log(typeof(runsInNumber)) // type of null after converting to number is always number 


let wicket = undefined //null
let wicketsInNumber=Number(runs) // when you convert the null and console log it will give you 0
console.log(wicket)
console.log(wicketsInNumber)
console.log(typeof(wicketsInNumber)) // type of null after converting to number is always number 


let isLoggedIn = 1
let boolean = Boolean(isLoggedIn)
console.log(boolean)
console.log(typeof boolean)

//1=>true
//0=>false
//""=>false
//"Parth"=>true