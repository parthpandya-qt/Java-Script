// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// It is used to handle asynchronous programming in a structured way instead of using deeply nested callbacks.
// Why Promises are Used

// Promises solve problems like:

// Callback hell

// Hard-to-read asynchronous code

// Poor error handling in callbacks

// They provide:

// Better readability

// Chaining of async operations

// Centralized error handling





//normal
const onePromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("first promise")
        resolve()
    },1000)
})

onePromise.then(function(){
    console.log("promise consumed")
})



//without constant
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("second promise")
        resolve()
    },3000)
}).then(function(){console.log("second promise resolved")})






// how to pass data through promises
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("thirds promise")
        resolve({name:"Parth Pandya",age:20,gender:"Male"})
    },1000)
})

promiseThree.then((data)=>{console.log(data)})









const fourthPromises = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = true;
            if(!error){
                resolve({name:"Parth Pandya",password:"parth.pandya1307@gamil.com"})
            }else{
                reject('ERROR:JS went wrong')
            }
        },1000)
})

fourthPromises
.then((user)=>{      // when you have to return the value of the data sent by the resolve()
    return user.name
})
.then((userName)=>{
    console.log(userName)
})
.catch((error)=>{console.log(error)})
.finally(()=>{console.log("the promise is either rejected or resolved")})





//promises can be resolved by async await without the use of .then .catch .finally
const promiseFive = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = true;
            if(!error){
                resolve({nameFather:"Vijay Pandya",password:"vijay.pandya1307@gamil.com"})
            }else{
                reject('ERROR:JS went wrong')
            }
        },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()




//api request handling
async function getAllUsers(){
    try {
        const response = await fetch("https://api.github.com/users/parthpandya-qt")
        const data = await response.json() // respoce.jason takes time
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}
getAllUsers()



//api request .then
fetch("https://api.github.com/users/parthpandya-qt")
.then((response)=>{
        return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>{
        console.log(error)
})

