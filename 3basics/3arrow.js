const user ={
    username:"Parth Pandya",
    email:"parth.pandya1307@gmail.com",
    greeting : function(){console.log(`${this.username} , welcome`);}
}


user.greeting()
console.log(this)  // output will be empty object




// function user1(){
//     const name = "Parth Pandya"
//     console.log(this.name)  // undefined
//     console.log(this) // global object
// }
// user1()


// const user2 = function(){
//         const name2 = "Parth Pandya"
//         console.log(this.name2)     // undefined
//         console.log(this)   // return a global object
// }
// user2()



const user3 = () =>{
    const name3 = "Parth Pandya"
    console.log(this.name3)     // undefined
    console.log(this)   // this will not return a global object intead it will return a empty object
}

user3()


const add =(num1,num2)=>{
    return num1+num2
}
console.log(add(34,54))


//+++++++++++++++++++++++++ if cuely brackets is used than return will be needed otherwise it is not needed

const multiply = (num1,num2) => num1*num2   

console.log(multiply(3,3))

//++++++++++++++++++++++++++++++

const devide = (num1,num2)=>(num1/num2)     // no return needed
console.log(devide(4,4))


//+++++++++++++++++++ in a function if you are returning a object than you have to use return other wise it will not work explicit return will not work


const name = ()=>{return {fullname:"Parth Pandya"}  }
console.log(name())
