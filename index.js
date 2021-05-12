const express = require("express");

const app = express();
const port = 3000;

const users = ["John", "Mark"];

const logUsers = (req,res,next) =>{
    console.log("logUsers")
    next()
}
const logMethod  = (req,res,next)=>{
    console.log(logMethod);
    next()
}
//app.use("/users",logMethod)
app.use(logUsers);
app.get("/users",logMethod, (req, res, next) => {
  res.json(users);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});