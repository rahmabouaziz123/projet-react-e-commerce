
const express=require("express");

const {addProduct,getAllProduct}=require("../controllers/Product.controller")

let router=express.Router()
////path + function controller
router.post("/addProduct",addProduct)
router.get("/getAllProduct", getAllProduct);

module.exports = router;