// Object.getOwnPropertyDescriptor() in JavaScript returns the property descriptor object of a specific property of an object

//Object.defineProperty() is used in JavaScript to define a new property or modify an existing property of an object with precise control over its behavior.

// can we change the value of pi in JS

const descriptor = Object.getOwnPropertyDescriptor(Math,'PI') // return all thee property associated with PI
console.log(descriptor)


const chai = {
    name:"ginger chai",
    price:15,
    isAvailable:true,
    order:function(){console.log("order success")}
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))  // desrupts the property of an object

for (const [key,value] of Object.entries(chai)) {
    if(typeof(value) !== "function"){
        console.log(`${key}  : ${value}`);
    }
    
}
// you will not get name beacuse you already turned of the property of that name by seetinf enumerable false in setproperty