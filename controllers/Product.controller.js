const product = require("../model/product");

//add product
exports.addProduct = async (req, res) => {
  const { nameProd, price, category,image, description,rating, quantity } =
    req.body;
  try {
    const newProduct = new product({
      nameProd,
      price,
      category,
      description,
      image,
      rating,
      quantity
    });
    await newProduct.save();
    newProduct
      ? res.status(200).json(newProduct)
      : res.status(401).json({ msg: "create product error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};


//get all product
exports.getAllProduct = async (req, res) => {
    try {
      const allProducts = await product.find();
      allProducts
        ? res.status(201).json(allProducts)
        : res.status(401).json({ msg: "getAll error" });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };

