const date = new Date().getDate()
console.log(date)


const newdate = new Date()    //date is object in javascript

console.log(newdate.toDateString())

console.log(newdate.toLocaleString())



console.log(Date.now())   // give the milisec from 1 jan 1970  bassically you get time stamps


console.log(Math.floor(Date.now()/1000)) //gives value in sec // asked in interview

// const newDate = new Date(2023,2, 5) // you can create a new object of date 
// console.log(newDate)

const newDate = new Date("2023-02-5") // you can create a new object of date 
console.log(newDate)


const time = newDate.getTime()// give the milisec from 1 jan 1970  bassically you get time stamps
console.log(time)


newDate.toLocaleString('default', {
    weekday: "long",
    
})