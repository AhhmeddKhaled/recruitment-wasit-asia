const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.verifyAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "غير مصرح" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "ممنوع الوصول - ليس أدمن" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "رمز غير صالح" });
  }
};
