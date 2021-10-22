const express = require('express')

const app = express()
const port = process.env.PORT || 3000
 
app.get('/',(req,res)=>{
    res.send('Hello world from node')
})

app.listen(port,()=>{
    console.log("geting response from ",port)
})