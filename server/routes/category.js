const { Router } = require("express");
const mongoose = require("mongoose");
const { route } = require("./product");
const Category = mongoose.model("Category");
const router = Router();

router.get("/category/all", async (req, res) => {
  try {
    const category = await Category.find().sort({ createdAt: -1 });
    if (!category) {
      res.status(404).json({ error: "Not found!" });
    }
    res.status(200).json({ category });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/category/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({ category });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/category/update", async (req, res) => {
  try {
    const { category_id } = req.query;
    const newCategory = await Category.findByIdAndUpdate(
      category_id,
      req.body,
      { new: true }
    );
    res.status(200).json({ newCategory });
  } catch (err) {
    console.log(err);
  }
});

router.post("/category/delete", async (req, res) => {
  try {
    const { category_id } = req.query;
    const deleteCategory = await Category.deleteOne({ id: category_id });
    res.status(200).json({ deleteCategory });
  } catch (err) {
    console.log(err);
  }
});

router.post("/category/create", async (req, res) => {
  try {
    const { title, img } = req.body;
    if (!title || !img) {
      return res
        .status(422)
        .json({ error: "Fill in the information completely!" });
    }
    const category = await Category.findOne({ title: title });
    if (category) {
      return res.status(422).json({ error: "There is such a category!" });
    }
    const newCategory = new Category({
      title,
      img,
    });
    await newCategory.save();
    res.status(200).json({ msg: "Request added successfully!" });
  } catch (err) {
    console.log(err);
  }
});

// router.post("/category/search", async(req, res) => {
//   const categorySearch = new RegExp("^" + req.body.query);
//   const result = await Category.find({})
// })

module.exports = router;
