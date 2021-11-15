const express = require('express')
const { MongoClient } = require('mongodb');
require('dotenv').config()

const app = express()
const port = 5000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qcwm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const run=async()=>{
  try{
    await client.connect()
    console.log('database connected');
  }
  catch{
    // await client.close()
  }

}
run().catch(console.dir)
app.get('/', (req, res) => {
    console.log(req.query);
  res.send('Hello World!')
})
app.get('/hello',(req,res)=>{
  res.send('Hello updated here')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
/*
one time:
1.nodemon globally install
2.mongodb atlas user
3.network access(ip address allow)
connect:

EveryProject:
1.Install mongo,express,cors,dotenv
2.import (require),mongo
3.copy uri(connection string)
4.copy code from atlas
5.create or get database access credentials
6.Create .env file and add DB_USER and DB_PASS as environment variable
7.make sure you require(import) dotenv
8.Convert URI string to a template string.
9. Add DB_USER and DB_PASS in the connection URI string.
10.Check uRI string by using console.log
11.Create async  function run and call it by using run().catch(console.dir)
12.add try and finally inside run function.
13.comment out await client.close() to keep connection alive
15.add await client.connect(); inside the try block
15.use a console.log after the client.connect to ensure dtabase is connected

*/


// const os = require('os')
// const fs = require('fs')

// console.log('os version:',os.version())
// console.log('os arch:',os.arch())

// fs.writeFileSync('hello.txt','I am writing from Node')
// fs.appendFileSync('hello.txt','\nbalgasfkdeaew')
// const content = fs.readFileSync('hello.txt')
// console.log(content.toString());
// console.log('Running Node');