const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(422).json({ error: "You are not registered!" });
  }
  token = authorization.replace("Jwt ", "");
  jwt.verify(token, process.env.JSON_SECRET, (err, user) => {
    if (err) {
      return res.status(422).json({ error: "Wrong!" });
    }
    const { id } = user;
    User.findById(id).then((userId) => {
      res.user = userId;
      next();
    });
  });
};
module.exports = { verifyToken };
