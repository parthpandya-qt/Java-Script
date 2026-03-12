for (let index = 0; index <11; index++) {
    console.log(index);
}

const array =  [43,5,454,3,5,24,4,2,34322,34,3,234, 4]

for(let i=0;i<array.length;i++ ){
    console.log(array[i])
}


for (let i = 0; i < 11; i++) {
    console.log(`table of ${i}`)
    for (let j = 0; j < 11;j++) {
        console.log(`${i} * ${j} = ${i*j}`)
        
    }
}

// break and continue


for (let index = 0; index < 11; index++) {
    if(index==5){
        console.log(" 5 detected")
        break;
    }
    
    console.log(index)
    
}

for (let index = 0; index < 11; index++) {
    if(index==5){
        console.log(" 5 detected")
        continue;
    }
    
    console.log(index)
    
}