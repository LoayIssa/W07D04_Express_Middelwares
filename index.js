const express = require("express");

const app = express();
const port = 3000;
app.use(express.json())


const users = ["John", "Mark"];
//const users = [];


const logUsers = (req,res,next) =>{
    console.log(users)
    next()
}
const logMethod  = (req,res,next)=>{
    console.log(req.method);
    next()
}
//app.use("/users",logMethod)
//app.use(logUsers);
app.get("/users", (req, res, next) => {
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
//q1

const usersRouter = express.Router();
usersRouter.use((req,res,next)=>{
    res.json(users);
    console.log(users);
    next();
})
app.use("/users",usersRouter)

//q2

const logUser = (req ,res,next)=>{
    console.log(req.body.name);
}
app.post("/users/create",(req,res,next)=>{
    users.push(req.body.name);
    next()
})
app.use("/users/create",logUser)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});