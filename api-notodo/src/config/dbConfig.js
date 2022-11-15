import mongoose from "mongoose";

const mongoConnect = async() =>{
    try{
    const conStr = "mongodb://localhost:27017/Ntolist";
    const con = await mongoose.connect(conStr);

    con && console.log("mongoDB connected !")


    } catch (error){
        console.log(error);

    }
    
};

export default mongoConnect;