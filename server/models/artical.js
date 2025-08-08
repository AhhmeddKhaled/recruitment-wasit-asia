const mongoose = require("mongoose");

const articalSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  paragraph: { type: String, required: true }
},{ timestamps: true });

module.exports = mongoose.model("artical", articalSchema)