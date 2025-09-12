const express = require("express");
const router = express.Router();
const Country = require("../models/country");

router.get("/", async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ في جلب الدول" });
  }
});

module.exports = router;
