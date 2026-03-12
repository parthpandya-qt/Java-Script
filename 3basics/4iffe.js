// immediately invoked function express (IIFE)

//      ()()     first paranthesis is used for function defination and other is used for function calling

//Why IIFE is Used

//Avoid global scope pollution

//Create private variables

//Execute code immediately

// always use semicolon after iffe

(function()
    {console.log("Parth Pandya")

    }
)();

(
    (name)=>{
        console.log(`My name is ${name}`)
    }
)("Parth Pandya")