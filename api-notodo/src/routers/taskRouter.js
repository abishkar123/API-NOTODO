import  express  from "express";
const router = express.Router();

//fake databse 
let  fakeTaskTable = [
    {
        _id: 1,
        task: "cooking",
        hr: 4,
        type : "entry"
      },
      {
        _id: 2,
        task: "Watching Tv",
        hr: 4,
        type : "bad"
      }
]

// C(Create)receive new task and store in the database 
router.post("/", (req, res)=>{
    console.log(req.body);

    fakeTaskTable.push(req.body);

    res.json({ 
        status: "success",
        message :"new task has been added"});
});

// R(Read) => read data from data base and return to the client
router.get("/", (req, res)=>{
    res.json({
        status: "sucess",
        message:"todo get method",
        data:fakeTaskTable
    });
});
// U(Update)=> update some information of existing data int he database and respond client acordingly
router.put("/", (req, res)=>{
    
    const {_id,type} = req.body;
    console.log(req.body);

 fakeTaskTable.map((item)=>{
 if(item._id === _id){
    item.type = type;
 }
 return item;
 });

    res.json({
        status :"sucess",
        message:"todo get method"});
});
// D(Delete) => Delete data(s) from databse and response client accordingly
router.delete("/:_id?", (req, res)=>{
    const {_id} = req.params;
    if (!_id){  
        res.status(400).json({
        status :"error",
        message:"invaild request, id is missing"
    });
    return;

    }
    console.log(req.params);


    fakeTaskTable = fakeTaskTable.filter(item => item._id !=_id);

    res.json({
        status :"sucess",
        message:"todo get method"});
});

export default router;
