const mongoose = require("mongoose");

const transferWorkerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    nationality: { type: String, required: true },
    job: { type: String, required: true },
    religion: { type: String, required: true },
    recruitmentFee: { type: Number, required: true }, // بدل recruitmentFee
    maritalStatus: {
      type: String,
      enum: ["أعزب", "متزوج", "مطلق"],
      required: true,
    },
    cv: { type: String },
    experience: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },

    // الحقل الجديد 👇
    skills: {
      type: [String], // مصفوفة نصوص: "طبخ", "سواقة", "رعاية أطفال"
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TransferWorker", transferWorkerSchema);
