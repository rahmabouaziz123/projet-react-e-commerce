
const express=require("express");

const {addProduct,getAllProduct, updateProduct ,deleteProduct, getOneProduct, getWomenProducts}=require("../controllers/Product.controller")

let router=express.Router()
////path + function controller
//add Product
router.post("/addProduct",addProduct)
///getAllProduct
router.get("/getAllProduct", getAllProduct);
/////updateProduct
router.put("/updateProduct/:_id", updateProduct);
/////deleteOneProduct
router.delete("/deleteOneProduct/:_id", deleteProduct);

/////getOneProduct
router.get("/getOneProduct/:_id", getOneProduct);

///////get women product
router.get("/getWomenProducts", getWomenProducts);


module.exports = router;