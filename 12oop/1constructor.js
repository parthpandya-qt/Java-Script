// In JavaScript, it acts like a blueprint for creating multiple objects with the same properties and methods
// whenever new is used new empty object is created second step is constructor function is called due to new key word which packs all the argument in this




function userDetail(userName,email,isLoggedIn){
    this.userName=userName
    this.email=email
    this.isLoggedIn=isLoggedIn

    this.greeting = function(){console.log(`welcome ${this.userName}`)}
    
}

const userOne = new userDetail("Parth Pandya","ppandya573@gamil.com","true")  // create a new instance of the object
const userTwo = new userDetail("Aryan","aryan344@gamil.com","true")

console.log(userOne.constructor)  //return reference to the same function
console.log(userTwo)

console.log(userOne instanceof userDetail)  //check is the instance is reference of object