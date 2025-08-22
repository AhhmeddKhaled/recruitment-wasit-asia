const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs");

const { register, login } = require('../controllers/authController');
const { protect, adminOnly, authorize } = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);

// مثال: مسار لليوزر المحمي
router.get('/user-profile', protect, (req, res) => {
  res.json(req.user);
});

// API لتحميل CV محمي
router.get("/api/workers/:id/cv", protect, (req, res) => {
  const workerId = req.params.id;
  const filePath = path.join(__dirname, "cvs", `${workerId}.pdf`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "CV not found" });
  }

  res.download(filePath);
});

// مثال: مسار الأدمن
router.get('/admin-dashboard', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

module.exports = router;
