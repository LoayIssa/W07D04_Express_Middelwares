const express = require("express");

const app = express();
const port = 3000;
app.use(express.json())


//const users = ["John", "Mark"];
const users = [];


const logUsers = (req,res,next) =>{
    console.log(users)
    next()
}
const logMethod  = (req,res,next)=>{
    console.log(req.method);
    next()
}
//app.use("/users",logMethod)
app.use(logUsers);
app.get("/users",logMethod, (req, res, next) => {
    if(users.length===0){
        const err = new Error("No users");
        err.status = 500;
        next(err)
    }
    else {
        res.json(users);

    }
});

app.use((err,req,res,next)=>{
 res.status(err.status);
 res.json({
     error:{
         status:err.status,
         message: err.message,
     },
 });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});