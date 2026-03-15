//api request .then

//fetch have a speacial queue for tasks therefore it's output is faster than other operation or other web API 
fetch("https://api.github.com/users/parthpandya-qt")
.then((response)=>{
        return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>{
        console.log(error)
})
