

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nameProd : String,
    price : Number,
    category : String,
    image : String,
    description : String,
    rating: String,
    sold:Number,
    quantity:String
});

module.exports = mongoose.model("product", productSchema);