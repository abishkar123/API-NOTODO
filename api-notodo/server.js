import express  from "express";
const app = express();
const PORT = 8000;

import morgan from 'morgan';
//middleware
app.use(morgan("dev"));

// api endpoints 

// workflow : CRUD
// C(Create)receive new task and store in the database 

app.post("/api/v1/task", (req, res)=>{
    res.json({message:"todo get method"});
});

// R(Read) => read data from data base and return to the client
app.get("/api/v1/task", (req, res)=>{
    res.json({message:"todo get method"});
});
// U (Updat)=> update some information fo existing data int he database and respond client acordingly
app.put("/api/v1/task", (req, res)=>{
    res.json({message:"todo get method"});
});
// D (Delete) => Delte data(s) form databse and response client accordingly
app.delete("/api/v1/task", (req, res)=>{
    res.json({message:"todo get method"});
});


app.listen(PORT, error =>{
    error?
    console.log(error)
    :
    console.log(`server runing at the http://localhost:${PORT}`);
});
console.log(app);