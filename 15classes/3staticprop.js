class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is : ${this.username}`)
    }
    static createId(){
        return '123'
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const parth = new User("Parth Pandya")

//console.log(parth.createId())

const teacher1 = new Teacher("Aryan","aryan@gmail.com")
//console.log(teacher1.createId())  can not get access due to static
//A static property or method belongs to the class itself, not to any instance. You call it on the class directly, not on objects created from i