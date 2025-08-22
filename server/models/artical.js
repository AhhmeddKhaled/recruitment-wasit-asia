import { Schema, model } from "mongoose";

const articalSchema = new Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  paragraph: { type: String, required: true }
},{ timestamps: true });

export default model("artical", articalSchema)