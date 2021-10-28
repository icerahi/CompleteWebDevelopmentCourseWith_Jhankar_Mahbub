const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());

const uri =
  "mongodb+srv://icerahi:RahiRahi@cluster0.qcwm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const run = async () => {
  try {
    await client.connect();
    const database = client.db("UserManagement");
    const userCollection = database.collection("users");
    //create a document to insert

    //GET API
    app.get("/users", async (req, res) => {
      const cursor = userCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });

    // POST API
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      if (newUser.name && newUser.email) {
        const result = await userCollection.insertOne(newUser);
        res.json(result);
      } else {
        res.json({ error: "You must need a username" });
      }
    })

    //SINGLE GET
    app.get('/users/:id',async(req,res)=>{
        const id = req.params.id 
        const query={_id:ObjectId(id)}
        const user = await userCollection.findOne(query) 
        res.json(user)   
    })

    //DELETE
    app.delete('/users/:id',async(req,res)=>{
        const id = req.params.id 
        const query = {_id:ObjectId(id)}
        const result =await userCollection.deleteOne(query)
        console.log(result)
        res.json(result)
    })

    //UPDATE 
    app.put('/users/:id',async(req,res)=>{
        const id= req.params.id 
        const updatedData= req.body
        const query={_id:ObjectId(id)}
        const options={
            upsert:true
        }
        const updatedDoc={
            $set:{
                name:updatedData.name,
                email:updatedData.email,
            }
        }
        const result =await userCollection.updateOne(query,updatedDoc,options)
        console.log('updating user',result)
        res.send(result)
    })

    //
  } finally {
    // await client.close();
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running my Usermanagement Server");
});
app.listen(port, () => {
  console.log("Server Running on PORT:", port);
});
