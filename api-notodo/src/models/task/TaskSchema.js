import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        require: true
    },
    hr:{
        type: Number,
        default: 30,
        max: 168,
    },
    Type:{
        type: String,
        default: "entry",
    },
},
{
        timestamps:true,
    }


);
 export default mongoose.model("task", taskSchema); // tasks
