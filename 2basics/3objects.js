//behind the track key is stored as string


const mySym = Symbol("Parth")



const user = {
    name : "Parth Pandya",
    age:21,
    course: "B-TECH",
    brach:"Computer Science", 
    email:"en23cs30@medicaps.ac.in",
    [mySym]:"mykey1"   // this is the way to declare symbole in Object
}

console.log(user)
console.log(user.age) //way to access property


console.log(user["name"])//another  way to access property

console.log(user[mySym]) // used to access the Symbol

user.email = "ppandya573@gmail.com"  //way to overwrite the values


//Object.freeze(user) // now you can not change the value of object1

user.greeting = function(){
    console.log("Hello world")
}

console.log(user.greeting) //return the function
console.log(user.greeting()) // return reference to  the function

user.newGreeting = function(){
    console.log(`hell ${this.name}`)
}

console.log(user.newGreeting) //return the function
console.log(user.newGreeting()) // return reference to  the function
