const temp1 = [23,34,67,45]
const temp2 = [78,96]

//temp1.push(temp2)// pushes the whole array to temp1
//const concatedArray = temp1.concat(temp2)// adds the elements of whole temp2 to temp1

//console.log(concatedArray)

const allNewArray = [...temp1 , ...temp2] //Imp  spread operator spreads the whole element  in the other array

console.log(allNewArray)

const anotherArray = [45,45345,34,453,4353,[5634,5345,34,534,55464,7,[34565,645367,7,2,23,6434,5656,[654,456,456,]]]]

const realArray = anotherArray.flat(Infinity)
console.log(realArray)

console.log(Array.isArray("Parth")) // checks if it is array
console.log(Array.from("Parth")) //coverts to array

console.log(Array.from({name:"Parth Panday"})) //interesting

let score1=10
let score2=20
let score3=30
let score4=40
console.log(Array.of(score1,score2,score3,score4))



//Array.from(anyIterable)   this is used to convert any iterable to array
