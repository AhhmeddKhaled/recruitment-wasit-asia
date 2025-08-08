const mongoose = require("mongoose");

const securityLogSchema = new mongoose.Schema({
  action: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SecurityLog", securityLogSchema);
