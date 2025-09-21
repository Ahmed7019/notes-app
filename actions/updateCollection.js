"use server";

import dbConnect from "@/lib/mongodb";
import Collection from "@/models/Collection";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";

export async function addNoteToCollection(collectionId, noteId) {
  try {
    await dbConnect();
    const collection = await Collection.findById(collectionId)
      .populate("notes")
      .lean();
    console.log(collection.notes);
    collection.notes.length > 0 &&
      collection.notes.filter((ele) => {
        if (ele._id.equals(noteId)) throw new Error("Note already exists");
      });

    await Collection.updateOne(
      { _id: new mongoose.Types.ObjectId(collectionId) },
      {
        $push: { notes: new mongoose.Types.ObjectId(noteId) },
      }
    );

    revalidatePath("/");
    return;
  } catch (error) {
    throw new Error(error);
  }
}
