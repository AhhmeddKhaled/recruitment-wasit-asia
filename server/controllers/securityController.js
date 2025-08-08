const User = require("../models/User");
const SecurityLog = require("../models/SecurityLog");

exports.getSecurityDashboard = async (req, res) => {
  try {
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const blockedUsers = await User.find({ isBlocked: true }).select("email");
    const recentLogs = await SecurityLog.find()
      .sort({ timestamp: -1 })
      .limit(10)
      .populate("userId", "email");

    res.json({
      totalAdmins,
      blockedUsers,
      recentLogs,
    });
  } catch (err) {
    res.status(500).json({ message: "حدث خطأ", error: err.message });
  }
};
