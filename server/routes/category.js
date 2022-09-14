const { Router } = require("express");
const mongoose = require("mongoose");
const Category = mongoose.model("Category");
const router = Router();

router.get("/all/category", async(req, res) => {
  const category = await Category.find();
  res.status(200).json({category});
})

router.get("/one/category/:id", async(req, res) => {
  const category = await Category.findById(req.params.id)
  if(!category){
    res.status(404).json({error: "Not found!"})
  }
  res.status(200).json({category});
})

router.post("/create/category", async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
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
    });
    await newCategory.save();
    res.status(200).json({msg: "Request added successfully!"})
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
