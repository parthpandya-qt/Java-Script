class User{
    constructor(userName){
        this.userName=userName
        }
    logMe(){
        console.log(`USERNAME is ${this.userName}`)
    }
}

class teacher extends User{
    constructor(userName,email,password){
        super(userName)
        this.email=email,
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.userName}`)
    }
}
const user1 = new teacher("Parth Pandya","ppandya@gamil.com","123")
user1.addCourse()
user1.logMe()  //inherited method 

const user2=new User("Aryan")
user2.logMe()



console.log(user2 instanceof User)