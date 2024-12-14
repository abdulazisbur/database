const response = require('express')

fetch(`http://localhost:3000/api/users`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:'Zain',
        email:'zainmalik@gmail.com',
        phone : '08989688798999'
    })
})
.then(response=>response.json())
.then(data=> console.log(data))
.catch(error=>console.log(error))

