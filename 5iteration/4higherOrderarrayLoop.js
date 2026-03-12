const names = ["Parth","Aryan","Parikshit","Tiwari","Jain"]

for (const name of names) {
    console.log(name)
}

const fullName = "Parth Pandya"

for (const element of fullName) {
    console.log(element)
}


//++++++++++++++++++++++         MAPS             +++++++++++++++

// just like hashMap
const map = new Map()
map.set("IN","INDIA")
map.set("FR","FRANCE")
map.set("EN","ENGLAND")


console.log(map)

for (const [key,value] of map) {
    console.log(key,value)
}

// +++++++++++++++++++++++++++++++++++++++++++++++

const myObject ={
    "game1":"NFS",
    "game2":"Spiderman"
}
// for (const element of myObject) {     //it will not work because object is not iterable
//     console.log(element)
// }


// since object is not iterable we can not iterate it with forof loop we have to use forin loop


for (const key in myObject) {
    console.log(key)                // all the key
    console.log(myObject[key])      // all the value
}

const arr = [3,54,4,34,34,3,4,54,34]
for (const key in arr) {    // output will be 0,1,2,3,4,5,6,7,8
    
}

