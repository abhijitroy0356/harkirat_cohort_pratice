const express = require('express')

const bodyParser= require('body-parser') //middleware

const app=express()
port =3000
app.use(bodyParser.json());
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('hello world')
})
app.get('/info',(req,res)=>{
    res.send({
        name:"Abhijt Roy",
        roll:89
    })
    // res.send(
    //    ` <h1> hello peopple</h1>`
    // )
    
})
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})

//=======================================================

