function add(a,b){
    return a+b
    console.log(a+b) // by default you can not add anything after return  
}

const added = add(34,56)
console.log(added)


function sayName(name){
    size = name.length
    for(let i=0;i<size;i++ ){
        console.log(name[i])
    }
}

sayName("Parth")


function loggedin(person){
    return (`${person} just logged in`)
}

console.log(loggedin()) // output will "be undefined just logged in"



// function loggedin(person="sam"){           default argument
//     return (`${person} just logged in`)
// }


function calculateCartPrize(...prize){   // convert any numbger of argument to array  // also called res or spread operator
    return prize
}

console.log(calculateCartPrize(34,5,45,23,54,45))



function calculatecartPrize(val1,val2,...prize){   // output will be [45, 23, 54, 45]
    return prize
}

console.log(calculatecartPrize(34,5,45,23,54,45))