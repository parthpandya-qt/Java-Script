// //lexical scoping : 
// When a function tries to access a variable, JavaScript (and most languages) looks for it:

// Inside the function

// Then in its outer (parent) function

// Then further up the chain

// Until the global scope


function printName(){
    let name = "Parth Pandya"
    function printName2(){
        console.log(name)    //lexical scope
    }
    return printName2
}

const name = printName()  //Even after printName() finishes, its variable name is not destroyed.Because printName2 still remembers it.
name()//call it