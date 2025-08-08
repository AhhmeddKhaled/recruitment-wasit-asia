const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    nationality: { type: String, required: true },
    job: { type: String, required: true },
    religion: { type: String, required: true },
    recruitmentFee: { type: Number, required: true },
    maritalStatus: {
      type: String,
      enum: ["أعزب", "متزوج", "مطلق"],
      required: true,
    },
    cv: { type: String },
    experience: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Worker", workerSchema);
