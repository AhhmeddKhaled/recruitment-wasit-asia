const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  flag: String,
  description: String,
  salary: Number,
  availableJobs: {
    type: [String],
    default: [],
  }
});

module.exports = mongoose.model("Country", countrySchema);
