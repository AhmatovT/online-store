const {Router} = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const router = Router();

router.post("/signup", async(req, res) => {
  try{
    const {name, email, password, isAdmin} = req.body;
  if(!name || !email || !password){
    return res.status(422).json({error: "Fill in the information completely!"});
  }
  const savedUser = await User.findOne({email: email})
  if(savedUser){
    return res.status(401).json({error: "Registered from this email!"})
  }
  const hashPass = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    email,
    isAdmin,
    password: hashPass,
  })
  await user.save();
  res.status(200).json({msg: "You have successfully registered!"})
  }catch(err){
    console.log(err);
  }
})

router.post("/signin", async(req, res) => {
  try{
    const {email, password} = req.body;
    if(!email || !password){
      return res.status(422).json({error: "Fill in the information completely!"});
    }
    const savedUser = await User.findOne({email: email})
    if(!savedUser){
      return res.status(422).json({error: "Your email is incorrect!"})
    }
    const doMatch = await bcrypt.compare(password, savedUser.password);
    if(doMatch){
      const token = jwt.sign({id: savedUser.id}, process.env.JSON_SECRET);
      res.status(200).json({msg: "Welcome to your Profile!", token});
    }
    else{
      return res.status(422).json({error: "Your password is incorrect!"});
    }
  }catch(err){
    console.log(err);
  }
});

module.exports = router;