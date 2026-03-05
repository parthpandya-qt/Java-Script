// strings in Java script is mutable


const age = 20

const name="Parth-Pandya"

console.log(`Hello my name is ${name} and my age is ${age}`)


const gameName = new String("Contra-GTA5") // new way to create string

console.log(gameName[0]) // you can access the element of string
console.log(gameName[1])
console.log(gameName[2])


console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf("t"))

const stringSlicing = gameName.slice(0,5)   //string slicing
console.log(stringSlicing)

const StringSlicing = gameName.substring(0,5) // similar to that of slice accept it does not support negative value
console.log(StringSlicing)


const trimming = "         Parth Pandya"  // trim from front and from last
console.log(trimming.trim())

const url = "htps://localhost:%205000"
console.log(url.replace("%20","-"))

console.log(name.split("-"))  // return array based on a separator