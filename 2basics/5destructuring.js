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

const {name} = user  // normal destrure 
console.log(name)

const{name:{userName }}=user //nested destructuring
console.log(userName)


const{name:{userName:nameofuser}}=user //used to chanege the name of key
console.log(nameofuser)


