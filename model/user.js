const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    fullName:String,
    email:String,
    password:String,
    adresse:String,
    userRole: {
        type: String,
        roles: ["user", "admin"],
        default: "user"
      },
      telephone:String

});
module.exports=mongoose.model("User",userSchema)