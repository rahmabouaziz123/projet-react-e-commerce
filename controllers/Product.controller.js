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


  //edit Product

  exports.updateProduct = async (req, res) => {
    try {
      const updateProduct = await product.findByIdAndUpdate(
        req.params._id,
        { ...req.body },
        { new: true }
      );
      res.status(201).send(updateProduct);
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };

//delete one product
exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await product.findByIdAndDelete(req.params._id);
    res.status(201).json({ msg: "product deleted successfully" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};


//get one product
exports.getOneProduct = async (req, res) => {
  try {
    const oneProduct = await product.findById(req.params._id);
    oneProduct
      ? res.status(201).send(oneProduct)
      : res.status(401).json({ msg: "get one product error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

  
///////get product women

exports.getWomenProducts = async (req, res) => {
  try {
    const womenProducts = await product.find({category:"femme"});
    womenProducts
      ? res.status(201).json(womenProducts)
      : res.status(401).json({ msg: "get women Products error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};