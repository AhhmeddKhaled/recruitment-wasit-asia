const express = require("express");
const router = express.Router();
const artical = require('../controllers/artical');
const upload = require("../upload");

router.get("/",artical.getArticals);
router.get("/:id",artical.getArticalById);
router.post("/",upload.single("img"), artical.createArtical);

module.exports = router;