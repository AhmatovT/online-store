const express = require("express");
const mongoose = require("mongoose");
const {MOGO_URI} = require("./keys");

const app = express();

mongoose.connect(MOGO_URI);

mongoose.connection.on("Connected", () => {
  console.log("MongoDB succesfully");
})
mongoose.connection.on("Error", (err) => {
  console.log("MongoDB succesfully", err);
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server has been started on Port ${PORT}`);
})