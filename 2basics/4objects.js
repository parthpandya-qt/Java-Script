// const user = new Object()   //singleton object can be declared like this

// const user ={}

// user.id="parth7566"
// user.name="Parth Pandya"
// user.year=3



//nested object

const user ={
    name:{
        userName:{
            firstName:"Parth",
            lastName:"Pandya"
        },
        fatherName:{
            firstName:"Vijay",
            lastName:"Pandya"
        },
        education:{
            degree:{
                name:"bachelors of technology",
                branch:{
                    name:"Computer Science",
                    specialisation:{
                        name:"Data Science"
                    }
                }
            }
        }
    }
}
// console.log(user.name?.education.degree)   // you can access nested object like this // question mark is optional chaining  


const user1={
    name1:"Parth Pandya",
    email1:"parth.pandya1307@gmail.com"
}
const user2={
    name2:"Aryan Dubey",
    email2:"aryan.dubey@gmail.com"
}

// const combined = Object.assign({},user1,user2)  used to combine two object 

const combined = {...user1,...user2}   // spread operator is used to combine two objects
console.log(combined)

console.log(Object.keys(user1))  // used to find the all the keys in objects output will be of array 
console.log(Object.values(user1))  //used to find all the values of objects