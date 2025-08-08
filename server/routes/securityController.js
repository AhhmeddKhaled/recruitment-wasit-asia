const express = require("express");
const router = express.Router();
const { getSecurityDashboard } = require("../controllers/securityController");
const { verifyAdmin } = require("../middlewares/authMiddleware");

router.get("/dashboard", verifyAdmin, getSecurityDashboard);

module.exports = router;
