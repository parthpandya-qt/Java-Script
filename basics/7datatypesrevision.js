/*
primitive (call by value):
whenever we copy the data it copies the value of the variable not memory location

{String,Number,Boolean,null,undefined,symbol(used for uniqueness),bigInt(very very large data)}
*/
const number = null //total empty void
const wicket = undefined //their can be different value

let runs; // here also runs will be undefined

let id = Symbol("123") // provides uniquness
let anotherId=Symbol("123")
console.log(id===anotherId) // output will be false

const bigNumber = 2465023850237459273459827345732039475203n //it gets converted to bigInt


/* 
nonprimitive(call by reference):
whenever we copy the data it copies the value of the variable also memory location

{array,function,objects}

*/

const arr = [2,34,4,5,5,3,]

const object = {
    name:"Parth Pandya",
    age:"21",
    year:3
}

const add = function(a,b){
    return a+b
}


// type of all the nom primitive type of data type is object accept fnction its datatype is function itself
console.log(typeof arr )  // output object
console.log(typeof object) //output object
console.log(typeof add) //output function


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

/*
+++++++++++++++++++++++++MEMORY+++++++++++++++++
types:2
1:stack(primitive){tou are given copy of the value}
2:heap(non-primitive){you are given the reference to the memory}
*/

//stack

let userOne = "Parth Pandya"
let userTwo = userOne //here you are give copy of userOne so when you will change it, it will change the copied value not the real value , realvalue will remain the same
userTwo = "Aryan"
console.log(userOne,userTwo)


//heap
const team1={
    player1:"Parth",
    player2:"Aryan",
    player3:"Parikshit"
}

const team2=team1 //here you are give copy of reference to team1 so when you will change it, it will change the real value  , realvalue will also change

team2.player1="Tiwari"

console.log(team1.player1,team2.player1)