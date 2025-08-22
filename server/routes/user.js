// routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// إنشاء يوزر جديد
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;
