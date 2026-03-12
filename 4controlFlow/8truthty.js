const email = ""   

if(email){
    console.log(email)      
}else{
    console.log("No email")  // this will run 
}

const phoneNumber = []
if(phoneNumber){
    console.log(phoneNumber)  //this wil run
}else{
    console.log(phoneNumber)
}


//falsy value
// false , 0 , -0 , BigInt , "",null ,  undefined , NaN



//truthy value
// "0",'false' , " ",[],{},function(){} 
//other than that all the value is considered as truthy value


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty object")
}


console.log(false == 0)   // this will return true
console.log(false == '') //this will return true
console.log(0=='') // this will also return true




//+++++++++++++++++++++++++++++++++++++  Nullish Coalescing Operator  (??): null undefined
//The Nullish Coalescing Operator (??) is used to provide a default value when the left-hand operand is null or undefined.  


let val1;
let val2;
let val3;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 20
console.log(val1)  // output will be 5
console.log(val2)  //output will be 10
console.log(val3)  //output will be 20

let val4

val4 = null ?? 10 ?? 20

console.log(val4)  // otput will be 10 

//+++++++++ ternary Operator +++++++++++++++++++++++++

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice<=50 ? console.log("price is less than 50"):console.log("price is more than 50 ")