const {Schema, model} = require("mongoose");

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  rol: {type: String, default: "user"},
  password: {type: String, required: true},
}, {timestamps: true});
model("User", userSchema);