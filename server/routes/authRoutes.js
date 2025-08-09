const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);

// مثال: مسار لليوزر المحمي
router.get('/user-profile', protect, (req, res) => {
  res.json(req.user);
});

// مثال: مسار الأدمن
router.get('/admin-dashboard', protect, adminOnly, (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

module.exports = router;
