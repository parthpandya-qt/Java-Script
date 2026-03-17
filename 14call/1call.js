// call() is a built-in method that lets you invoke a function with a specific this value and pass arguments individually

function setUser(username){
    this.username=username
}

function createUser(username,email,password){
    setUser.call(this,username)
    this.email=email
    this.password=password
}

const user1=new createUser("Parth Pandya","pp@123",123)
console.log(user1)