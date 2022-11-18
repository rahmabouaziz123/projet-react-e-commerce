const mongoose=require("mongoose");
const config=require("config");
const db=config.get("db");
const connectDb=async()=>{
    try{
        await mongoose.connect(db)
        console.log("data base is successfuly connected")
    }catch(error){
        console.log(error)
    }
}
module.exports=connectDb