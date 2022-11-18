const express=require("express");
const app=express();
const connectDb=require("./config/connectDb")
connectDb()

app.use(express.json())
///user 
const user=require("./routes/user")
app.use("/user",user)

//////product
const product =require ("./routes/product")
app.use("/product",product)

//router upload
const upload = require("./routes/upload");
app.use("/upload", upload);


const PORT=process.env.PORT||5000;
app.listen(PORT,error=>error?console.log(error):console.log(`server is runig successfuly on ${PORT}`))
