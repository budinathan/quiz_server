import mongoose from "mongoose";
const { Schema } = mongoose;

//question model
const questionModels = new Schema({
  questions: { type: Array, default: [] },
  answers: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Questions", questionModels);
