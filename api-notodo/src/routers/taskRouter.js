import  express  from "express";
import {deleteTasks, insertTask, updateTask} from "../models/task/TaskModel.js"
import {getTasks} from "../models/task/TaskModel.js"
const router = express.Router();

 

// C(Create)receive new task and store in the database 
router.post("/", async(req, res)=>{
    console.log(req.body);

     const  result = insertTask(req.body);
     console.log(result);

    res.json({ 
        status: "success",
        message :"new task has been added"});
});

// R(Read) => read data from data base and return to the client
router.get("/",async (req, res)=>{
    // databae query to get all the task
    const data = await getTasks();
    res.json({
        status: "sucess",
        message:"todo get method",
        data,
    });
});
// U(Update)=> update some information of existing data int he database and respond client acordingly
router.put("/", async (req, res)=>{
        const {_id,type} = req.body;
        console.log(req.body);

        
        const result = await updateTask(_id, {type});
        console.log(result)

     if( result?._id){
            res.json({ status :"sucess",message:"todo get method"});
        

        } else{
            
            res.status(400).json({
                status :"error",
                message:"task has been deleted"

        })
    }

    });

// D(Delete) => Delete data(s) from databse and response client accordingly
router.delete("/",async  (req, res)=>{
const result = await deleteTasks(req.body)
console.log(result);

if( result?.deletedCount){
    res.json({ status :"success",message:"The selected talk has been delete",
});

} else{
    res.json({
        status :"sucess",
        message:"no thing delete"});
    }
});

export default router;
