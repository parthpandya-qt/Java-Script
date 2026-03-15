let myHero =["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower : function(){
        console.log(`spider man power is ${this.spiderman}`)
    }
}

Object.prototype.parth = function(){
    console.log("Parth is ideot.")
}  //directly inject method to all the object through which all the the other data type inherits

heroPower.parth()
myHero.parth()

Array.prototype.heyParth=function(){
    console.log("hey Parth Pandya")
} // directly inject method to prototype of array

myHero.heyParth()



//++++++++++++++++++++++++++++++++

let Myname="Parth         "

String.prototype.trueLength=function(){
        console.log(`true length is ${this.trim().length}`)
}

Myname.trueLength()