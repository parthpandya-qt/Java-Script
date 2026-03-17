class User{
    constructor(userName,email,password){
        this.userName=userName,
        this.email=email,
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.userName.toUpperCase()}`
    }
}

const user1 = new User("Parth Pandya","ppandya@gamil.com","123")

console.log(user1.encryptPassword())
console.log(user1.changeUsername())

