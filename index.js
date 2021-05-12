const express = require("express");

const app = express();
const port = 3000;

const users = ["John", "Mark"];

const logUsers = (req,res,next) =>{
    console.log("logUsers")
    next()
}
//app.use("/users",logUsers)


app.get("/users", logUsers, (req, res, next) => {
  res.json(users);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});