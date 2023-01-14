
const express=require("express");
const {signUp,LogIn, auth, getAllUser,updateUser}=require("../controllers/user.controller");
const { signUpRules,validator } = require("../middleware/validator");
const verifyAuth = require("../middleware/verifyAuth");

let router=express.Router()
////path + function controller
router.post("/signUp",signUpRules(),validator,signUp)
router.post('/signIn',LogIn)
router.get('/auth',verifyAuth,auth)

///getAllProduct
router.get("/getAllUser", getAllUser);
///// update user
router.put("/updateUser/:_id", updateUser);


module.exports = router