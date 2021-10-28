const express = require("express")
const cors = require('cors')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId

const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://rahi:myFirstMongo@cluster0.qcwm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const run = async()=>{
    try{
        await client.connect()
        const database = client.db('foodMaster')
        const userCollection = database.collection('users')
        //GET API 
        app.get('/users',async(req,res)=>{
            const cursor = userCollection.find({})
            const users = await cursor.toArray()
            res.send(users)
        })
        // POST API 
        app.post('/users',async(req,res)=>{
            const newUser = req.body;
            const result = await userCollection.insertOne(newUser)
            // console.log("got new user",req.body)
            // console.log('added user',result);
            res.json(result)
        })
        //UPDATE API
        app.put('/users/:id',async(req,res)=>{
            const id = req.params.id 
            const updatedUser = req.body
            const filter = {_id:ObjectId(id)}
            const options ={upsert:true}
            const updateDoc ={
                $set:{
                    name:updatedUser.name,
                    email:updatedUser.email,
                },
            }
            const result = await userCollection.updateOne(filter,updateDoc,options)
            console.log("updating user",result)
            res.json(result)
        })

        //DELETE API
        app.delete('/users/:id',async(req,res)=>{
            const id = req.params.id
            const query = {_id:ObjectId(id)}
            const result = await userCollection.deleteOne(query)
            console.log('deleting user with id ',result)

            res.json(result)
        })
        //Single Read API
        app.get('/users/:id',async(req,res)=>{
            const id = req.params.id 
            const query = {_id:ObjectId(id)}
            const user = await userCollection.findOne(query);

            console.log('load user with id',id);
            res.send(user)
        })

    }
    finally{
        // await client.close()
    }
}
run().catch(console.dir)
app.get('/',(req,res)=>{
    res.send("Runnning my CRUD Server")
})
app.listen(port,()=>{
    console.log('Running server on PORT:',port)
})