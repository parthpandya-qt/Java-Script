const nums = [23,343,23,34,56,432,3,2,12,43,4,54,2,34]

//const newArr= nums.map((items)=>{return items+10})

const newNum = nums
                .map((item)=>item+10)
                .map((item)=>item*10)
                .filter((item)=>item>300)
console.log(newNum)