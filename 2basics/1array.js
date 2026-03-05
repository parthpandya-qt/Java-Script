/*
Array is a data structure used to store multiple values in a single variable.

Arrays in JavaScript can store different types of data such as numbers, strings, objects, and functions.

Elements in an array are stored in indexed positions.

Array indexing starts from 0.

Arrays in JavaScript are dynamic, meaning their size can change.

An array is created using square brackets [].

Elements inside an array are separated by commas.

they are dynamic in nature

thry creat a shallow copy
*/


const temp = [1,23,34,54,45,"Parth Pandya"]

for(let i = 0 ; i<temp.length;i++ ){
    console.log(temp[i])
}

const temp2 = new Array(3,5,6,7,6,4) //other way of declaring array

temp2.push(34) // push the value to the last

temp2.pop() // popthe element from the last
temp2.unshift(155)    //insert the value at the first index and shift the whole array
temp2.shift()// remove the first element 
console.log(temp2)

console.log(temp2.includes(6))
console.log(temp2.indexOf(3))  //return the index of perticular element

console.log(temp2.join()) // convert the array to string


const myArr = [0, 1, 2, 3, 4, 5]
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


//slice : it is used to take a perticular part fron the array without doiing anything to original array,first number is starting index and text number is ending index we exclude it

//spilce : it is used to take perticular part from the array by removing it fromm the array itself ,  first part is starting index and second part is ending index we do not exclude it
// imp 