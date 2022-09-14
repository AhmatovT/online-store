const {Schema, model} = require("mongoose");

const categorySchema = new Schema({
  title: {type: String, required: true},
}, {timestamps: true});
model("Category", categorySchema);
