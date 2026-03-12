const coding = ["java","c++","c","Python"]


coding.forEach(( item)=>{if(item.length>2){console.log(item)}})


coding.forEach((item,index,arr)=>{console.log(item,index,arr)})


const users = [
  {
    id: 1,
    name: "Parth",
    age: 21
  },
  {
    id: 2,
    name: "Rahul",
    age: 22
  },
  {
    id: 3,
    name: "Aman",
    age: 20
  },
  {
    id: 4,
    name: "Riya",
    age: 23
  },
  {
    id: 5,
    name: "Neha",
    age: 21
  }
];

users.forEach((item)=>{console.log(item.age)})



// foreach never returns value for that you have to use filter map reduce 