import  express  from "express";
const router = express.Router();

// C(Create)receive new task and store in the database 
router.post("/", (req, res)=>{
    res.json({message:"todo get method"});
});

// R(Read) => read data from data base and return to the client
router.get("/", (req, res)=>{
    res.json({message:"todo get method"});
});
// U(Update)=> update some information of existing data int he database and respond client acordingly
router.put("/", (req, res)=>{
    res.json({message:"todo get method"});
});
// D(Delete) => Delete data(s) from databse and response client accordingly
router.delete("/", (req, res)=>{
    res.json({message:"todo get method"});
});

export default router;
