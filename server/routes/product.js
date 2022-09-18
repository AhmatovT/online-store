const { Router } = require("express");
const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const router = Router();

router.get("/product/all", async (req, res) => {
  try {
    const product = await Product.find().sort({ createdAt: -1 });
    if (!product) {
      res.status(404).json({ error: "Not found!" });
    }
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/product/update/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/product/delete/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Product has been delete..." });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/product/create", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
