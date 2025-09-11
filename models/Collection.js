import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  title: String,
  description: String,
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models?.Collection ||
  mongoose.model("Collection", collectionSchema);
