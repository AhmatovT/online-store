const { Router } = require("express");
const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const router = Router();

router.post("/create/product", async (req, res) => {
  try {
    const { title, decs, img, size, color, price, categoryId } = req.body;
    const product = new Product({
      title,
      decs,
      img,
      size,
      color,
      price,
      categoryId,
    });
    await product.save();
    res.status(200).json({ msg: "Products added successfully!" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
