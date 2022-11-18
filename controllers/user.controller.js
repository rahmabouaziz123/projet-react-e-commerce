
const User=require("../model/user");

let bc = require('bcryptjs');
let jwt = require('jsonwebtoken');
const config=require("config");
const secret=config.get("secret");

exports.signUp=async(req,res)=>{
    const {fullName,email,password,adresse,userRole,telephone}=req.body;
    try{
        //verfier existing user avec email
        const exsitingUser= await User.findOne({email});
        if(exsitingUser){res.status(401).json({msg:"User is allready exist "})}
        //ADD NEW USER
        const newUser= new User({fullName,email,password,adresse,userRole,telephone})
        // cryptage password
        var salt = await bc.genSalt(10);
        var hash = await bc.hashSync(password, salt);
        newUser.password=hash
        await newUser.save()
         //json web token
         const payload={
            id:newUser._id,
            name:newUser.fullName,
            email:newUser.email,
            adresse:newUser.adresse,
            telephone:newUser.telephone

        };
        const token = jwt.sign(payload,secret);
        //// data qui affiche dans action.js se trouve dans res.send
        res.status(200).send({
            token,
            user:{
            id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            password: newUser.password,
            adresse: newUser.adresse,
            userRole:newUser.userRole,
            telephone:newUser.telephone

        },
          });
        // res.send(newUser)
    }catch(error){
        res.status(500).json({msg:error})
    }
}

exports.LogIn=async(req,res)=>{
    const {email,password}=req.body;
    try {
        //verification email
        const user= await User.findOne({email});
        if(!user)return res.status(404).json({msg:'coordonnes ghaltin'})
        // verification password 
        const isMatch=await bc.compare(password,user.password)
        if(!isMatch)return res.status(404).json({msg:"coordonnes ghaltin"})
        const payload={
            id:user._id,
            name:user.fullName,
            email:user.email,
            adresse:user.adresse,
        };
        const token = jwt.sign(payload,secret);
        res.status(200).send({
            token,
            user:{
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            adresse: user.adresse,
            userRole:user.userRole,
            telephone:user.telephone
        },
          });
     
    } catch (error) {
        res.status(500).json({msg:error})        
    }
}

exports.auth=(req,res)=>{
    res.send(req.user)
}