const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

var admin = require("firebase-admin");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

console.log("google",process.env.FIREBASE_SERVICE_ACCOUNT)
//firebase admin
admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  ),
});

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qcwm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const verifyToken = async (req, res, next) => {
  if (req?.headers?.authorization.startsWith("Bearer ")) {
    const token = req?.headers?.authorization.split(" ")[1];
    try {
      const decodedUser = await admin.auth().verifyIdToken(token);
      req.decodedEmail = decodedUser.email;
    } catch {}
  }
  next();
};
const run = async () => {
  try {
    await client.connect();
    const database = client.db("doctors_portal");
    const appointmentsCollection = database.collection("appointments");
    const usersCollection = database.collection("users");

    app.get("/appointments", verifyToken, async (req, res) => {
      const email = req.query.email;
      const date = new Date(req.query.date).toLocaleDateString();
      const query = { email: email, date: date };
      const cursor = appointmentsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });

    app.post("/appointments", async (req, res) => {
      const appointment = req.body;
      const result = await appointmentsCollection.insertOne(appointment);
      res.json(result);
    });
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      console.log(result);
      res.json(result);
    });
    //upsert
    app.put("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = usersCollection.updateOne(filter, updateDoc, options);
      res.json(result);
    });

    app.put("/users/admin", verifyToken, async (req, res) => {
      const user = req.body;
      const requester = req.decodedEmail;
      if (requester) {
        const requesterAccount = await userCollection.findOne({
          email: requester,
        });
        if (requesterAccount.role === "admin") {
          const filter = { email: user.email };
          const updateDoc = {
            $set: {
              role: "admin",
            },
          };
          const result = await usersCollection.updateOne(filter, updateDoc);
          res.json(result);
        } else {
          res.status(403).json({ message: "You don not have authorize!!" });
        }
      }
    });
  } finally {
    // await client.close()
  }
};
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Hello Doctor Protal");
});

app.listen(port, () => {
  console.log("listening at:", port);
});
