//JavaScript uses prototype-based inheritance.

//Every JavaScript object automatically has a prototype, which is another object it can inherit properties and methods from

// you can create prototype on any object incuding function or array


// whenever you are using this kwy word in protying use fumction not arrow function beause arrow function do not support this



function multiplyByfive(n){
    return n*5
}

multiplyByfive.power =2

console.log(multiplyByfive.power)
console.log(multiplyByfive.prototype)



//+++++++++++
function createUser(userName,score){
    this.userName= userName
    this.score=score
}
createUser.prototype.increment=function(){this.score++}

createUser.prototype.printMe=function(){console.log(`score is ${this.score}`)}


const user1 = new createUser("Parth Pandya",25)
const user2 = new createUser("Aryan Dubey",250)

user1.printMe()




// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.