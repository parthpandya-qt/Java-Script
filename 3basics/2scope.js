//inside the browser the global object is window object and in node environment it is empty object 


// scope in browser and and coding environment is different // IMP


// if a variable is declared using let or const inside the block the it is accessable inside it but if ir is declared using var then it is available throughout the code



if(true){
    let a =34
    var b =3
    const f = 9
    console.log(f)
}

console.log(b)  // output will be 3

//console.log(a) throw error because it scope in inside the block
//console.log(f) throw error because it scope in inside the block 




//+++++++++++++++++++++++++  scope in nested function  +++++++++++++++++++++++++ 

//Closure is a feature in JavaScript where a function retains access to variables from its outer lexical scope even after the outer function has executed.
//outer() executes and creates variable count.

//inner() is returned.

//Normally count should be destroyed after outer() finishes.

//But inner() keeps access to count.

//This preserved environment is called a closure.

function outer(){
    let count = 0 
    function inner(){
        count++
        console.log(count)
    }
    return inner
}

const counter = outer()
counter()
counter()
counter()
counter()

//++++++++++++++++++++++++ hoisting +++++++++++++++++++++++++++++++++
//Hoisting in JavaScript is the behavior where variable and function declarations are 
// moved to the top of their scope during the compilation phase before the code executes



console.log(addOne(10))  // this syntax will work in hoisting 

function addOne(n){
    return n+1
}



// console.log(addTwo(12)) this will cause error

const addTwo = function(n){   // this syntax will not work in hoisting
    return n+2
}