//Getters and setters in JavaScript are used to control how a property is accessed or modified.

//this is the modern way
class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email=value
    }
}

const user1=new User("ppandy@573@gmail.com","abc")

console.log(user1.password)

console.log(user1.email)

//this.password = value





//It would call the setter again, creating infinite recursion
//So we store the real value in another property: 
// _password




//++++++++++++++++older way when classes did not came into existance

   

function User1(email,password){
    this._email = email
    this._password = password
    
    
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email = value
        }
    })
}

const user = new User1("parth@gmail.com", "123")

console.log(user.email)

user.email = "hello@gmail.com"
console.log(user.email)



//++++++++++++++++++++++++++++++ in object

const user3 = {
    _email:'part@gmail.com',
    _password:'part747',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
   }
}

const aryan = Object.create(user3)
console.log(user3.email)