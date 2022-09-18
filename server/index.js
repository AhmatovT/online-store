const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {verifyToken} = require("./middleware/verifyToken");

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

require("./modules/user");
require("./modules/category");
require("./modules/product");
require("./modules/order");
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/category"));
app.use(require("./routes/product"));
app.use(verifyToken, require("./routes/orders"));

mongoose.connection.on("connected", () => {
  console.log("MongoDB succesfully");
})
mongoose.connection.on("error", (err) => {
  console.log("MongoDB succesfully", err);
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server has been started on Port ${PORT}`);
})