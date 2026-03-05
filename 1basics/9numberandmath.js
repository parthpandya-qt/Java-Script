const score = 400

const balance = new Number(100)
console.log(balance.toString())
console.log(balance.toFixed(2)) // give fixed number after decimal

const otherNumber = 123.9434

console.log(otherNumber.toPrecision(4))


const hundred = 1000000

console.log(hundred.toLocaleString("en-IN")) // convert the number to local Indian system

//+++++++++++++++++++++++MATH+++++++++++++++++++++++++

console.log(Math.abs(-5))

console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(3,43,565,67))
console.log(Math.max(4.65,3,4543,345))

console.log(Math.floor(Math.random()*10)+1) // to get random value between 0 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
