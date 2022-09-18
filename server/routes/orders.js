// const router = require("express").Router();
// const mongoose = require("mongoose");
// const Order = mongoose.model("Order");

// router.post("/neworder", async(req, res) => {
//   try{
//     const {userId, products, address} = req.body;
//     if(userId){
//       const newOrder = new Order({
//         userId,
//         products,
//         address,
//       })
//       await newOrder.save();
//       res.status(201).json({newOrder});
//     }else{
//       return res.status(500).json({error: "Wrong!"})
//     }
//   }catch(err){
//     res.status(500).json({err});
//   }
// })


// module.exports = router;