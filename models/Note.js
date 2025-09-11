import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: String,
  text: String,
  slug: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models?.Note || mongoose.model("Note", NoteSchema);
