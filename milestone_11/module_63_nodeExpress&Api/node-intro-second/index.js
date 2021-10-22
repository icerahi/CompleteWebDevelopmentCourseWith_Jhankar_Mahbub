const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Wow!! I am learning node,awesome great");
});
const users = [
  { id: 1, name: "shabana", email: "Shabana@gmail.com", phone: "0987654321" },
  { id: 2, name: "rubel", email: "rubel@gmail.com", phone: "09654654321" },
  { id: 3, name: "rabnur", email: "rabunur@gmail.com", phone: "09654654321" },
  { id: 4, name: "sonia", email: "sonia@gmail.com", phone: "09654654321" },
  {
    id: 5,
    name: "srabonti",
    email: "srabonti@gmail.com",
    phone: "09654654321",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search
    //use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD post
app.post('/users',(req,res)=>{
  const newUser = req.body;
  newUser.id = users.length+1
  users.push(newUser)
  console.log("hitting the post",req.body)
  // res.send(JSON.stringify(newUser))
  res.json(newUser)
})

//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params?.id;
  const user = users.find((user) => user.id == id);
  user ? res.send(user) : res.send("Not found");
  // console.log(id)
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yammy Yummy tok marka fazli");
});

app.listen(port, () => {
  console.log("Listening to port:", port);
});
