const {Schema, model} = require("mongoose");

const productSchema = new Schema({
  title: {type: String, required: true},
  decs: {type: String, required: true},
  price: {type: Number, required: true},
  img: [
    {
      type: String,
      required: true,
    }
  ],
  size: [
    {
      type: String,
    }
  ],
  color: [
    {
      type: String,
    }
  ],
  categoryId: {
    type: Schema.Types.ObjectId, 
    ref: "Category",
  },
}, {timestamps: true});
model("Product", productSchema);